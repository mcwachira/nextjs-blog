import { makeSource, defineDocumentType } from '@contentlayer/source-files'
import readingTime from "reading-time";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import GithubSlugger from 'github-slugger'

export const Blog = defineDocumentType(() => ({
    name:'Blog',
    filePathPattern:'**/**/*.mdx',
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            required: true,
        },
        publishedAt: {
            type: "date",
            required: true,
        },
        updatedAt: {
            type: "date",
            required: true,
        },
        description: {
            type: "string",
            required: true,
        },
        image: { type: "image" },
        isPublished: {
            type: "boolean",
            default: true,
        },
        author: {
            type: "string",
            required: true,
        },
        tags: {
            type: "list",
            of: { type: "string" },
        },
    },
    computedFields: {
        url_path: {
            type: 'string',
            resolve: (blog) => `/blogs/${blog._raw.flattenedPath}`,
        },
        readingTime:{
            type:'json',
            resolve:(blog) => readingTime(blog.body.raw)
        },
        toc:{
            type:"json",
            resolve:async(blog) => {
                //this will enable us to get the headings
                const regularExp = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
                const slugger = new GithubSlugger()

                const headings = Array.from(blog.body.raw.matchAll(regularExp)).map(({groups}) =>{

                    const flag = groups.?flag;
                    const content = groups.?content;


                    return {
                        level: flag?.length == 1 ? "one" : flag?.length == 2 ? "two" : "three",
                        text: content,
                        slug: content ? slugger.slug(content) : undefined
                    }
                })

                return headings
            }
        }
    },
}))

const codeOptions = {
    theme: "material-theme-palenight",
    grid: false,
}
export default makeSource({
    /* options */
    contentDirPath:"content",
    documentTypes:[Blog],
    mdx: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, {behavior: "append"}], [rehypePrettyCode, codeOptions] ] }
});