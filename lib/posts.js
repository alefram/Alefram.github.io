import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {unified} from 'unified'
import markdown from 'remark-parse'
import html from 'remark-html'
import math from 'remark-math'
import remarkRehype from 'remark-rehype'
import rehypeKatex from 'rehype-katex'
import rehypeStringify from 'rehype-stringify'
import prism from 'rehype-prism-plus'
const remarkHeadingId = require('remark-heading-id');

const postsDirectory = path.join(process.cwd(), '_posts')

export function getSortedPostsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map(fileName => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '')

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // Combine the data with the id
        return {
          id,
          ...matterResult.data
        }
    })
      // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
          return 1
        } else {
          return -1
        }
    })
}

export function getAllPostsIds() {
  const fileNames = fs.readdirSync(postsDirectory)
    return fileNames.map(fileName => {
        return {
          params: {id: fileName.replace(/\.md$/, '')}
        }
    })
}

export async function getPostsData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = await unified()
        .use(markdown)
        .use(math)
        .use(html)
        .use(remarkHeadingId, {defaults: true})
        .use(remarkRehype)
        .use(prism)
        .use(rehypeKatex)
        .use(rehypeStringify)
        .process(matterResult.content)

    const contentHtml = processedContent.toString()

    // Combine the data with the id
    return {
        id,
        contentHtml,
        ...matterResult.data
    }
}
