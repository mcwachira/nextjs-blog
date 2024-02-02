import {allBlogs} from "contentlayer/generated";


interface CategoryPageProps{
    params:string
}
import GithubSlugger, { slug } from "github-slugger";
import Categories from "@/components/Blog/Categories";
import BlogLayoutThree from "@/components/Blog/BlogLayoutThree";

const slugger = new GithubSlugger();

const CategoryPage = ({params}:CategoryPageProps) => {

    const allCategories = ["all"];
    const blogs = allBlogs.filter((blog) => {
        return blog?.tags.some((tag) => {
            const slugified = slug(tag);
            if (!allCategories.includes(slugified)) {
                allCategories.push(slugified);
            }
            if (params.slug === "all") {
                return true;
            }
            return slugified === params.slug;
        });
    });
    return (

    <article className='mt-12 flex flex-col text-dark'>

        <div  className='px-32 flex flex-col'>
            <h1 className='mt-6 font-semibold text-5xl'>
                #{params.slug}
            </h1>

            <span className='mt-2 inline-block'>
            Discover more categories and expand your Knowledge
        </span>
        </div>


        <Categories categories={allCategories} currentSlug={params.slug}/>

        <div className="grid grid-cols-3 grid-rows-2 gap-16 mt-24 px-32">
            {
                blogs.map((blog, index) =>(
                    <article key={index} className='col-span-1 row-span-1 relative'>
                        <BlogLayoutThree blog={blog}/>
                    </article>
                ) )
            }
        </div>
    </article>
    )
}

export default CategoryPage