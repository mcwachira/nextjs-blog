
import { slug } from "github-slugger";
import React from "react";
import Category from "@/components/Blog/Category";




interface CategoriesProps{
    categories:[],
    currentSlug:string
}
const Categories = ({ categories, currentSlug }:CategoriesProps) => {
    return (
        <div
            className=" px-0 md:px-10 sxl:px-20 mt-10 border-t-2 text-dark dark:text-light border-b-2 border-solid border-dark dark:border-light py-4 flex items-start flex-wrap font-medium mx-5 md:mx-10">
            {categories.map((cat: string, index: number) => (
                <Category
                    key={index}
                    link={`/categories/${cat}`}
                    name={cat}
                    active={currentSlug === slug(cat)}
                />
            ))}
        </div>
    );
};

export default Categories;