import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import { ThemeProvider } from "styled-components"

import { GlobalStyles } from "../components/GlobalStyles"
import { lightTheme, darkTheme } from "../styles/Theme"
import { useDarkMode } from "../components/useDarkMode"

import Layout from "../components/Layout"
import Footer from "../components/Common/Footer/Footer"
import { Projects as StyledProjects } from "../styles"
import PatternImageLight from "../images/pattern-bg-light.svg"
import PatternImageDark from "../images/pattern-bg-dark.svg"
import Navigation from "../components/Common/Navigation/Navigation"

const Projects = props => {
  const [theme, setTheme] = useDarkMode(
    (typeof window !== "undefined" && window.localStorage.getItem("theme")) || "light"
  )
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  let PatternImage = PatternImageLight

  if (theme === "dark") {
    PatternImage = PatternImageDark
  }

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
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Layout theme={theme}>
          <Navigation theme={theme} toggleTheme={themeToggler} />
          <StyledProjects>
            <div
              className="projects"
              style={{
                backgroundImage: `linear-gradient(to right bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url(${PatternImage})`,
              }}
            >
              <div className="projects-list">
                {projects.map(({ node: project }) => (
                  <div className="project" key={project.id}>
                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="project-technologies">
                      {project.technologies.map(technology => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>

                    <div className="project-links">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-globe fa-4x"></i>
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-github fa-4x"></i>
                      </a>

                      {project.youtubeUrl ? (
                        <a
                          href={project.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-youtube fa-4x"></i>
                        </a>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <Link className="home" to="/#projects">
                &larr; Back To Home
              </Link>
            </div>
          </StyledProjects>
          <Footer theme={theme} />
        </Layout>
      </>
    </ThemeProvider>
  )
}

export default Projects
