import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

import { ProjectsList as StyledProjectsList } from "./Styles"
import Project from "./Project"

const ProjectsList = ({ theme }) => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            id
            slug
            title
            url
            githubUrl
            gif {
              publicURL
            }
            technologies
            description
            image {
              publicURL
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  const projects = data.allProjectsJson.edges

  return (
    <StyledProjectsList id="projects">
      <div className="projects-list">
        <h3>Projects</h3>
        {projects.slice(0, 8).map(({ node: project }) => (
          <Project key={project.id} project={project} />
        ))}

        <Link to="/projects">View More Projects</Link>
      </div>
    </StyledProjectsList>
  )
}

export default ProjectsList
