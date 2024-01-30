import React from 'react';


interface BlogPageProps{
    params:string
}
function BlogPage({params}) {
    console.log(params)
    return (
        <div>{params.slug}</div>
    );
}

export default BlogPage;