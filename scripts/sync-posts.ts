import 'dotenv/config';
import { getAllPosts, getLatestPost, getReadyPosts } from '../src/utils/notion';
import { notifySubscribers } from '../src/utils/convertkit';
import * as fs from 'fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LOG_FILE = path.join(__dirname, '../logs/sync.log');

async function log(message: string, error?: any) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}${error ? `\nError: ${JSON.stringify(error, null, 2)}` : ''}\n`;
  
  // Ensure logs directory exists
  await fs.mkdir(path.dirname(LOG_FILE), { recursive: true });
  
  // Append to log file
  await fs.appendFile(LOG_FILE, logMessage);
  
  // Also log to console
  console.log(logMessage);
}

async function generateMarkdownFiles() {
  try {
    const posts = await getAllPosts();
    await log(`Found ${posts.length} posts to process`);
    
    // Create posts directory if it doesn't exist
    const postsDir = path.join(process.cwd(), 'src/content/post');
    await fs.mkdir(postsDir, { recursive: true });

    // Write each post to a markdown file
    for (const post of posts) {
      const fileName = `${post.slug}.md`;
      const filePath = path.join(postsDir, fileName);
      
      // Process content to fix markdown formatting
      let processedContent = post.content
        // Fix bold text rendering
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        // Fix lists formatting
        .replace(/^- ([A-Z]\))/gm, '\n- $1')  // Add newline before lettered list items
        .replace(/^▼/gm, '\n▼')  // Add newline before dropdown triangles
        // Handle code blocks with proper copy functionality
        .replace(/```([\s\S]*?)```/g, (match, code) => {
          // Extract language if specified
          const firstLine = code.split('\n')[0];
          const lang = firstLine.trim();
          const content = firstLine.match(/^[a-z]+$/) ? code.substring(firstLine.length + 1) : code;
          
          // Escape any # at the start of lines inside code blocks to prevent markdown conversion
          const escapedContent = content.split('\n').map((line: string) => {
            // Only escape # at the start of lines, preserve # elsewhere in the line
            return line.replace(/^(\s*)#/, '$1\\#');
          }).join('\n');
          
          return `<div class="code-block-wrapper">
  <pre><code class="language-${lang || 'plaintext'}">${escapedContent.trim()}</code></pre>
</div>`;
        })
        // Handle inline code with backticks
        .replace(/`([^`]+)`/g, (match, code) => {
          return `<code class="inline-code">${code.trim()}</code>`;
        })
        // Remove author lines
        .replace(/Author: \[Md\. Afzal Hassan Ehsani\]\(.*?\)\n\n/g, '')
        .replace(/Author: Md\. Afzal Hassan Ehsani\n\n/g, '')
        .replace(/\*Author: \[Md\. Afzal Hassan Ehsani\]\(.*?\)\*\n\n/g, '');

      const frontMatter = `---
layout: ../../layouts/post.astro
title: "${post.title}"
description: "${post.description}"
date: ${post.date}
dateFormatted: ${new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
tags: [${post.tags.join(', ')}]
coverImage: ${post.coverImage || ''}
lastUpdated: ${post.lastUpdated}
status: ${post.status}
---

${processedContent}`;

      await fs.writeFile(filePath, frontMatter, 'utf-8');
      await log(`Generated markdown file: ${fileName}`);
    }
  } catch (error) {
    await log('Error generating markdown files', error);
    throw error;
  }
}

async function updateRSSFeed() {
  try {
    const posts = await getAllPosts();
    const siteUrl = process.env.SITE_URL || 'https://iemafzalhassan.tech';
    
    const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Md. Afzal Hassan Ehsani's Blog</title>
    <description>DevOps Engineering, Cloud Computing, and Software Development insights</description>
    <link>${siteUrl}</link>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${posts.map(post => `
    <item>
      <title>${post.title}</title>
      <link>${siteUrl}/posts/${post.slug}</link>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <guid isPermaLink="true">${siteUrl}/posts/${post.slug}</guid>
      ${post.tags.map(tag => `<category>${tag}</category>`).join('\n      ')}
    </item>`).join('\n    ')}
  </channel>
</rss>`;

    await fs.writeFile(path.join(process.cwd(), 'public/rss.xml'), rssFeed, 'utf-8');
    await log('Updated RSS feed');
  } catch (error) {
    await log('Error updating RSS feed', error);
    throw error;
  }
}

async function notifyAboutNewPost() {
  try {
    const latestPost = await getLatestPost();
    if (!latestPost) {
      await log('No new posts to notify about');
      return;
    }

    const success = await notifySubscribers(latestPost);
    if (success) {
      await log(`Sent notification for post: ${latestPost.title}`);
    } else {
      throw new Error('Failed to send notification');
    }
  } catch (error) {
    await log('Error notifying subscribers', error);
    throw error;
  }
}

async function main() {
  try {
    await log('Starting sync process');
    await generateMarkdownFiles();
    await updateRSSFeed();
    await notifyAboutNewPost();
    await log('Successfully completed sync process');
  } catch (error) {
    await log('Sync process failed', error);
    process.exit(1);
  }
}

main(); 