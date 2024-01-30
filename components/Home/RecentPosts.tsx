import { sortBlogs } from "@/utils";
import React from "react";
import {Blog} from "contentlayer/generated";
import BlogLayoutOne from "@/components/Blog/BlogLayoutOne";
import BlogLayoutTwo from "@/components/Blog/BlogLayoutTwo";
import Link from "next/link";
import BlogLayoutThree from "@/components/Blog/BlogLayoutThree";


const RecentPosts = ({ blogs }:Blog[]) => {
    const sortedBlogs = sortBlogs(blogs);
    return <section className="w-full mt-16 sm:mt-24  md:mt-32 px-5 sm:px-10 md:px-24  sxl:px-32 flex flex-col items-center justify-center">

        <div className="flex w-full justify-between">



        <h2 className=" inline-block font-bold capitalize text-2xl md:text-4xl ">Recent Posts</h2>


    <Link href="/categories/all" className='inline-block fonty-medium text-accent underline underline-offset-2 text-lg'>
        View all
    </Link>
        </div>

            <div className="grid grid-cols-3 grid-rows-2 gap-16 mt-16">

                {sortedBlogs.slice(5,11 ).map((blog, index) => {
                    return <article className='col-span-1 row-span-1 relative' key={index}>
                        <BlogLayoutThree blog={blog} />

                    </article>
                })}


        </div>
    </section>;
};

export default RecentPosts;

