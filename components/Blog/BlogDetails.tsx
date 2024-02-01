import {format, parseISO} from "date-fns";
import {Blog} from "contentlayer/generated";
import Link from "next/link";


interface BlogDetailsProps {
    slug:string,
    blog:Blog

}

const BlogDetails = ({blog, slug}:BlogDetailsProps) => {
    return (
        <div className='px-10 bg-accent text-light py-2 flex items-center justify-around flex-wrap text-xl font-medium mx-10 rounded-lg'>
            <time className='m-3'>
                {format(parseISO(blog.publishedAt), 'LLLL d, yyyy')}
            </time>
            <span className='m-3'>
                10 views            </span>

            <div className='m-3'>
                {blog.readingTime.text}
            </div>

            <Link href={`/categories/${blog.tags[0]}`} className='m-3'>
                #{blog.tags[0]}
            </Link>
        </div>
    )
}

export  default BlogDetails