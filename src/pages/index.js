import React from "react"
import { ThemeProvider } from "styled-components"

import { GlobalStyles } from "../components/GlobalStyles"
import { lightTheme, darkTheme } from "../styles/Theme"
import { useDarkMode } from "../components/useDarkMode"

import "../styles/reset.css"
import "../styles/global.css"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import ProjectsList from "../components/Projects/ProjectsList"

import Header from "../components/Common/Header/Header"
import Footer from "../components/Common/Footer/Footer"
import Contact from "../components/Contact/Contact"
import SkillsList from "../components/Skills/SkillsList"
import BlogsList from "../components/Blogs/BlogsList"
import HireMe from "../components/Common/HireMe"
import Navigation from "../components/Common/Navigation/Navigation"
import About from "../components/Common/About/About"

const IndexPage = () => {
  const [theme, setTheme] = useDarkMode(
    (typeof window !== "undefined" && window.localStorage.getItem("theme")) ||
      "dark"
  )

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Layout theme={theme}>
          <SEO
            title="Ahmed Boutaraa"
            description="Ahmed is self-taught(Autodidactic) Software Engineer "
          />
          <Navigation theme={theme} toggleTheme={themeToggler} />
          <Header theme={theme} />
          <About theme={theme} />
          <HireMe />
          <ProjectsList theme={theme} />
          <BlogsList theme={theme} />
          <SkillsList theme={theme} />
          <Contact theme={theme} />
          <Footer theme={theme} />
        </Layout>
      </>
    </ThemeProvider>
  )
}

export default IndexPage
