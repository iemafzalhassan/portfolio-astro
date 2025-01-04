export const NOTION_CONFIG = {
  // Replace with your database ID
  DATABASE_ID: process.env.NOTION_DATABASE_ID || '',
  // Replace with your integration token
  TOKEN: process.env.NOTION_TOKEN || '',
};

export interface NotionPost {
  id: string;
  title: string;
  description: string;
  slug: string;
  date: string;
  tags: string[];
  content: string;
  coverImage?: string;
  status: 'Draft' | 'Ready' | 'Published';
  lastUpdated: string;
}
