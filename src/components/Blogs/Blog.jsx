import React from "react"

import { Blog as SyledBlog } from "./Styles"
const Blog = ({ blog }) => {
  const { title, publisher, blogLink, created } = blog

  return (
    <SyledBlog>
      <a target="_blank" rel="noopener noreferrer" href={blogLink}>
        <div className="blog-content">
          <h3>{title}</h3>
          <p>{created}</p>
          <p>Published by {publisher}</p>
        </div>
      </a>
    </SyledBlog>
  )
}

export default Blog
