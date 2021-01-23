import React from "react"
import { Link } from "gatsby"

import { Project as StyledProject } from "./Styles"

const Project = ({ project }) => {
  const { title, slug } = project
  let imgSrc

  if (project.gif) {
    imgSrc = project.gif.publicURL
  } else {
    const imageData = project.image.childImageSharp.fluid
    imgSrc = imageData.src
  }

  return (
    <StyledProject>
      <Link to={`/${slug}`}>
        <div
          className="project-image"
          style={{
            backgroundImage: `url(${imgSrc})`,
          }}
        >
          <div className="project-content"></div>
        </div>

        <div className="project-body">
          <h3>{title}</h3>
        </div>
      </Link>
    </StyledProject>
  )
}

export default Project
