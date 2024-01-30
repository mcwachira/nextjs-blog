import Image from "next/image";
import {allBlogs, Blog} from "contentlayer/generated";
import HomeCoverSection from "@/components/Home/HomeCoverSection";

export default async function Home() {

    console.log(allBlogs)
  return (

        <main className="flex flex-col items-center justify-center">
            <HomeCoverSection blogs={allBlogs} />
    </main>
  );
}
