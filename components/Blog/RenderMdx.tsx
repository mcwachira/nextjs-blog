'use client'
import {useMDXComponent} from "next-contentlayer/hooks";
import {Blog} from "contentlayer/generated";
import Image from 'next/image'

interface RenderMdxProps{
    blog:Blog
}

const mdxComponents = {
    Image
}
const RenderMdx = ({blog}:RenderMdxProps) => {

    const MDXContent = useMDXComponent(blog.body.code)

    return (
        <div className='col-span-8 font-in prose prose-lg max-w-max  prose-blockquote:bg-accent/20
    prose-blockquote:p-2
    prose-blockquote:px-6
    prose-blockquote:border-accent
    prose-blockquote:not-italic
    prose-blockquote:rounded-r-lg
     prose-li:marker:text-accent

    {/*dark:prose-invert*/}
    {/*dark:prose-blockquote:border-accentDark*/}
    {/*dark:prose-blockquote:bg-accentDark/20*/}
    {/*dark:prose-li:marker:text-accentDark*/}
        '>

            <MDXContent components={mdxComponents}/>
        </div>
    )
}

export default RenderMdx