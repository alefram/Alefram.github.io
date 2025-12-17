import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {unified} from 'unified'
import markdown from 'remark-parse'
// import math from 'remark-math'
import remarkRehype from 'remark-rehype'
// import rehypeKatex from 'rehype-katex'
import rehypeStringify from 'rehype-stringify'
import prism from 'rehype-prism-plus'

const projectsDirectory = path.join(process.cwd(), '_projects')

export function getSortedProjectsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(projectsDirectory)
    const allProjectsData = fileNames.map(fileName => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '')

        // Read markdown file as string
        const fullPath = path.join(projectsDirectory, fileName)
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
    return allProjectsData.sort((a, b) => {
        if (a.date < b.date) {
          return 1
        } else {
          return -1
        }
    })
}

export function getAllProjectsIds() {
  const fileNames = fs.readdirSync(projectsDirectory)
    return fileNames.map(fileName => {
        return {
          params: {id: fileName.replace(/\.md$/, '')}
        }
    })
}

export async function getProjectsData(id) {
    const fullPath = path.join(projectsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = await unified()
        .use(markdown)
        // .use(math)
        .use(remarkRehype)
        // .use(rehypeKatex)
        .use(prism)
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

