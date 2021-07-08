import React from 'react'
import blogData from './blogData'
import BlogPost from './BlogPost'

function BlogList(props) {
    const blogComponents = blogData.map(blogItem => <BlogPost blog={blogItem}/>)
    return (
        <div id='blogContainer'>
            {blogComponents}
            <a href='https://startbootstrap.github.io/startbootstrap-clean-blog/#!'>Older Posts {'>'} <i class="fab fa-twitter"></i></a>
        </div>
    )
}


export default BlogList