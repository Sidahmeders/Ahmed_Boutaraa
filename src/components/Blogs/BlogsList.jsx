import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { BlogsList as StyledBlogsList } from "./Styles"

import PatternImageDark from "../../images/pattern-bg-dark.svg"

import Blog from "./Blog"

const BlogsList = ({ theme }) => {
  const data = useStaticQuery(graphql`
    {
      allBlogsJson {
        edges {
          node {
            id
            title
            publisher
            blogLink
            created
          }
        }
      }
    }
  `)

  const blogs = data.allBlogsJson.edges

  return (
    <StyledBlogsList>
      <div
        className="blog"
        style={{
          backgroundImage:
            theme === "light" &&
            `linear-gradient(to right bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url(${PatternImageDark})`,
        }}
      >
        <div className="blog-header">
          <h3>Blog Posts</h3>
        </div>
        {blogs.slice(0, 6).map(({ node: blog }) => {
          return <Blog key={blog.id} blog={blog} />
        })}
      </div>
    </StyledBlogsList>
  )
}

export default BlogsList
