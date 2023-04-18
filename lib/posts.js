import fs from 'fs';
import path from 'path';


const postsDirectory = path.join(process.cwd(),'pages/posts');


export async function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  
  const allPostsData = Promise.all(fileNames.map( async fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.mdx$/, '');

    const {meta} = await import(`../pages/posts/${fileName}`);
    const data = meta;

    // Combine the data with the id
    return await {
      id,
      ...data
    }
  }))

  // Sort posts by date
  return (await allPostsData).sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
