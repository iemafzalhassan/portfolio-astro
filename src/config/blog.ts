
export interface BlogPost {
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
