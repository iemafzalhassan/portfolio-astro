import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import { NOTION_CONFIG } from '../config/notion';
import type { NotionPost } from '../config/notion';
import fs from 'fs/promises';

const notion = new Client({
  auth: NOTION_CONFIG.TOKEN,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

interface NotionError extends Error {
  code?: string;
  status?: number;
}

export async function getAllPosts(status: 'Draft' | 'Ready' | 'Published' = 'Published'): Promise<NotionPost[]> {
  try {
    if (!NOTION_CONFIG.TOKEN || !NOTION_CONFIG.DATABASE_ID) {
      throw new Error('Notion configuration is missing. Please check your environment variables.');
    }

    const response = await notion.databases.query({
      database_id: NOTION_CONFIG.DATABASE_ID,
      filter: {
        and: [
          {
            property: 'Status',
            select: {
              equals: status,
            },
          },
        ],
      },
      sorts: [
        {
          property: 'Date',
          direction: 'descending',
        },
      ],
    });

    const posts = await Promise.all(
      response.results.map(async (page: any) => {
        try {
          const mdBlocks = await n2m.pageToMarkdown(page.id);
          const mdString = n2m.toMarkdownString(mdBlocks);

          if (!page.properties.Name?.title?.[0]?.plain_text) {
            throw new Error(`Post ${page.id} is missing a title`);
          }

          return {
            id: page.id,
            title: page.properties.Name.title[0].plain_text,
            description: page.properties.Description?.rich_text?.[0]?.plain_text || '',
            slug: page.properties.Slug?.rich_text?.[0]?.plain_text || '',
            date: page.properties.Date?.date?.start || new Date().toISOString(),
            tags: page.properties.Tags?.multi_select?.map((tag: any) => tag.name) || [],
            content: mdString.parent,
            coverImage: page.cover?.external?.url || page.cover?.file?.url || undefined,
            status: page.properties.Status?.select?.name || status,
            lastUpdated: page.last_edited_time,
          } as NotionPost;
        } catch (error) {
          console.error(`Error processing post ${page.id}:`, error);
          return null;
        }
      })
    );

    // Filter out any null posts from errors
    return posts.filter((post): post is NotionPost => post !== null);
  } catch (error) {
    const notionError = error as NotionError;
    console.error('Error fetching posts from Notion:', {
      message: notionError.message,
      code: notionError.code,
      status: notionError.status,
    });
    throw new Error(`Failed to fetch posts: ${notionError.message}`);
  }
}

export async function getLatestPost(): Promise<NotionPost | null> {
  try {
    const posts = await getAllPosts('Published');
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error('Error fetching latest post:', error);
    return null;
  }
}

export async function getDraftPosts(): Promise<NotionPost[]> {
  return getAllPosts('Draft');
}

export async function getReadyPosts(): Promise<NotionPost[]> {
  return getAllPosts('Ready');
}