import matter from "gray-matter"; 

export interface BlogPost { 
  id: string; 
  title: string; 
  description: string; 
  slug: string; 
  date: string; 
  tags: string[]; 
  content: string; 
  coverImage?: string; 
  status: "Published" | "Draft" | "Ready"; 
  lastUpdated: string; 
  readingTime: number; 
} 

// Function to calculate reading time 
export function calculateReadingTime(content: string): number { 
  const wordsPerMinute = 200; 
  // Remove HTML tags and count words 
  const text = content.replace(/<[^>]*>/g, ""); 
  const wordCount = text.split(/\s+/).length; 
  const readingTime = Math.ceil(wordCount / wordsPerMinute); 
  return readingTime; 
} 

export async function getAllPosts( 
  status?: "Published" | "Draft" | "Ready" 
): Promise<BlogPost[]> { 
  const files = import.meta.glob("../content/post/*.md", { as: "string" }); 
  const posts = await Promise.all( 
    Object.entries(files).map(async ([file, content]) => { 
      const { data, content: rawContent } = matter(await content()); 
      if (status && data.status !== status) { 
        return null; 
      } 
       
      const readingTime = calculateReadingTime(rawContent); 

      return { 
        id: file.replace(/\.md$/, ""), 
        title: data.title || "Untitled", 
        description: data.description || "", 
        slug: data.slug || file.replace(/\.md$/, ""), 
        date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(), 
        tags: data.tags || [], 
        content: rawContent, 
        coverImage: data.coverImage, 
        status: data.status || "Draft", 
        lastUpdated: data.lastUpdated 
          ? new Date(data.lastUpdated).toISOString() 
          : new Date().toISOString(), 
        readingTime, // Add reading time here 
      } as BlogPost; 
    }) 
  ); 

  const filteredPosts = posts.filter((post): post is BlogPost => post !== null); 

  // Sort posts by date in descending order 
  return filteredPosts.sort( 
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime() 
  ); 
} 

export async function getLatestPost(): Promise<BlogPost | null> { 
  const posts = await getAllPosts("Published"); 
  return posts.length > 0 ? posts[0] : null; 
} 
