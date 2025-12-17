import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkMath from 'remark-math'
import remarkRehype from 'remark-rehype'
import rehypeKatex from 'rehype-katex'
import rehypeStringify from 'rehype-stringify'
import prism from 'rehype-prism-plus'
import remarkHeadingId from 'remark-heading-id';

const postsDirectory = path.join(process.cwd(), '_posts')

export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/, '')

        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        const matterResult = matter(fileContents)

        return {
          id,
          ...matterResult.data
        }
    })
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

    const matterResult = matter(fileContents)
    
    const processedContent = await unified()
        .use(remarkParse)
        .use(remarkHeadingId, {defaults: true})
        .use(remarkMath)
        .use(remarkRehype)
        .use(rehypeKatex)
        .use(prism)
        .use(rehypeStringify)
        .process(matterResult.content)

    const contentHtml = processedContent.toString()

    return {
        id,
        contentHtml,
        ...matterResult.data
    }
}
