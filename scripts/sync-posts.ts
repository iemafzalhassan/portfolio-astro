import 'dotenv/config';
import { getAllPosts, getLatestPost } from '../src/utils/blog';
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

async function updateRSSFeed() {
  try {
    const posts = await getAllPosts('Published');
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
    await updateRSSFeed();
    await notifyAboutNewPost();
    await log('Successfully completed sync process');
  } catch (error) {
    await log('Sync process failed', error);
    process.exit(1);
  }
}

main();
