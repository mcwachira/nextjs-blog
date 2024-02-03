import {format, parseISO} from "date-fns";
import {Blog} from "contentlayer/generated";
import Link from "next/link";
import { slug } from "github-slugger";
import ViewCounter from "@/components/Blog/ViewCounter";


interface BlogDetailsProps {
    slug:string,
    blog:Blog

}

const BlogDetails = ({blog, slug: blogSlug }:BlogDetailsProps) => {
    console.log(blogSlug)
    return (
        <div
            className="px-2  md:px-10 bg-accent dark:bg-accentDark text-light dark:text-dark py-2 flex items-center justify-around flex-wrap text-lg sm:text-xl font-medium mx-5  md:mx-10 rounded-lg">
            <time className='m-3'>
                {format(parseISO(blog.publishedAt), 'LLLL d, yyyy')}
            </time>
            <span className='m-3'>
    <ViewCounter slug={blogSlug} noCount showCount/>
            </span>

            <div className='m-3'>
                {blog.readingTime.text}
            </div>

            <Link href={`/categories/${slug(blog.tags[0])}`} className='m-3'>
                #{blog.tags[0]}
            </Link>
        </div>
    )
}

export default BlogDetails