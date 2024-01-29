import { makeSource, defineDocumentType } from '@contentlayer/source-files'


const Blog = defineDocumentType(() => ({
    name:'Blog',
    filePathPattern:'**/**/*.mdx',
    field:{
        title:{
            type:'string',
        },
        publishedAt:{
            type:'date',
            required:true,

        },
        updatedAt:{
            type:'date',
            required:true,

        },
        description:{
            type:'date',
            required:true,

        },
        image:{
            type:'string',
            required:true
        },
        isPublishedAt:{
            type:'boolean',
            required:true,

        },
       author:{
            type:'string',
            required:true,

        },
        tags: {
            type: 'list',
            of: { type: 'string' },
        },
    },
    computedFields: {
        url_path: {
            type: 'string',
            resolve: (doc) => `/blogs/${doc._raw.flattenedPath}`,
        },
    },
}))
export default makeSource({
    /* options */
    contentDirPath:"content",
    documentTypes:[Blog]
})