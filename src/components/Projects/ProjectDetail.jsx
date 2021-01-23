import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { ThemeProvider } from "styled-components"

import { GlobalStyles } from "../GlobalStyles"
import { lightTheme, darkTheme } from "../../styles/Theme"
import { useDarkMode } from "../useDarkMode"

import Layout from "../Layout"
import Navigation from "../Common/Navigation/Navigation"
import SEO from "../Seo"
import { ProjectDetail as StyledProjectDetail } from "./Styles"
import Footer from "../Common/Footer/Footer"

export const query = graphql`
  query($slug: String) {
    projectsJson(slug: { eq: $slug }) {
      title
      url
      githubUrl
      technologies
      description
      youtubeUrl
      contribution
      imageDetails {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const ProjectDetail = ({ data }) => {
  const [theme, setTheme] = useDarkMode(
    (typeof window !== "undefined" && window.localStorage.getItem("theme")) ||
      "light"
  )
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  const project = data.projectsJson

  const {
    url,
    title,
    technologies,
    githubUrl,
    description,
    contribution,
    youtubeUrl,
  } = project

  const imageData = project.imageDetails.childImageSharp.fluid
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Layout theme={theme}>
          <Navigation theme={theme} toggleTheme={themeToggler} />
          <SEO title={title} description={description} img={imageData} />

          <StyledProjectDetail>
            <div className="project-detail">
              <div className="project-image">
                <Image fluid={imageData} alt={title} />
              </div>

              <div className="project-content">
                <h2>{title}</h2>

                <p>{description}</p>

                <p className="contribution-text">"{contribution}"</p>

                <div className="project-technologies">
                  {technologies.map(technology => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-globe fa-4x"></i>
                  </a>

                  <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github fa-4x"></i>
                  </a>

                  {youtubeUrl ? (
                    <a
                      href={youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-youtube fa-4x"></i>
                    </a>
                  ) : (
                    ""
                  )}
                </div>

                <div className="project-actions">
                  <p>
                    <Link to="/#projects"> &larr; Back to all projects</Link>
                  </p>
                </div>
              </div>
            </div>
          </StyledProjectDetail>
          <Footer theme={theme} />
        </Layout>
      </>
    </ThemeProvider>
  )
}

export default ProjectDetail
