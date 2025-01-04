interface ConvertKitSubscriber {
  email_address: string;
  first_name?: string;
  tags?: string[];
}

function generateEmailTemplate(post: { title: string; description: string; slug: string; coverImage?: string; tags?: string[] }) {
  const siteUrl = process.env.SITE_URL || 'https://iemafzalhassan.tech';
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${post.title}</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0; background-color: #f4f4f5;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px;">
        <!-- Header -->
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #2d3748; font-size: 28px; margin-bottom: 10px;">DevOps & Cloud Engineering</h1>
          <p style="color: #4a5568; font-size: 16px;">By Md. Afzal Hassan Ehsani</p>
        </div>

        <!-- Main Content -->
        <div style="margin-bottom: 30px;">
          ${post.coverImage ? `
            <img src="${post.coverImage}" alt="Cover image" 
                 style="max-width: 100%; height: auto; border-radius: 8px; margin-bottom: 20px;">
          ` : ''}

          <h2 style="color: #2d3748; font-size: 24px; margin-bottom: 15px;">${post.title}</h2>
          
          <p style="color: #4a5568; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
            ${post.description}
          </p>

          ${post.tags ? `
            <div style="margin-bottom: 20px;">
              ${post.tags.map(tag => `
                <span style="display: inline-block; background: #edf2f7; color: #4a5568; 
                           padding: 4px 12px; border-radius: 15px; margin-right: 8px; 
                           margin-bottom: 8px; font-size: 14px;">
                  ${tag}
                </span>
              `).join('')}
            </div>
          ` : ''}

          <a href="${siteUrl}/posts/${post.slug}" 
             style="display: inline-block; background: #3182ce; color: white; 
                    padding: 12px 24px; text-decoration: none; border-radius: 6px; 
                    font-weight: bold; margin-top: 20px;">
            Read Full Post
          </a>
        </div>

        <!-- Popular Posts -->
        <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
          <h3 style="color: #2d3748; font-size: 20px; margin-bottom: 15px;">
            Explore More DevOps Content
          </h3>
          <ul style="list-style: none; padding: 0; margin: 0;">
            <li style="margin-bottom: 10px;">
              <a href="${siteUrl}/posts" style="color: #3182ce; text-decoration: none;">
                → Browse All Articles
              </a>
            </li>
            <li style="margin-bottom: 10px;">
              <a href="${siteUrl}/tags/devops" style="color: #3182ce; text-decoration: none;">
                → DevOps Guides
              </a>
            </li>
            <li style="margin-bottom: 10px;">
              <a href="${siteUrl}/tags/cloud" style="color: #3182ce; text-decoration: none;">
                → Cloud Engineering
              </a>
            </li>
          </ul>
        </div>

        <!-- Footer -->
        <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0; 
                    text-align: center; color: #718096; font-size: 14px;">
          <p>
            You're receiving this because you subscribed to updates from Md. Afzal Hassan Ehsani.
          </p>
          <p>
            <a href="{{ unsubscribe_url }}" style="color: #4a5568; text-decoration: underline;">
              Unsubscribe
            </a>
            ·
            <a href="{{ preferences_url }}" style="color: #4a5568; text-decoration: underline;">
              Update Preferences
            </a>
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

export async function notifySubscribers(post: { title: string; description: string; slug: string; coverImage?: string; tags?: string[] }) {
  try {
    const CONVERTKIT_API_KEY = process.env.CONVERTKIT_API_KEY;
    if (!CONVERTKIT_API_KEY) {
      throw new Error('CONVERTKIT_API_KEY is not set');
    }

    const emailContent = generateEmailTemplate(post);
    
    // Send broadcast to all subscribers
    const broadcastResponse = await fetch('https://api.convertkit.com/v3/broadcasts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: CONVERTKIT_API_KEY,
        broadcast: {
          subject: `New Post: ${post.title} | DevOps & Cloud Engineering`,
          content: emailContent,
          email_layout_template: 'default',
          thumbnail_alt: 'Blog post thumbnail',
          published: true
        }
      })
    });

    if (!broadcastResponse.ok) {
      throw new Error('Failed to send broadcast');
    }

    return true;
  } catch (error) {
    console.error('Error sending ConvertKit broadcast:', error);
    return false;
  }
} 