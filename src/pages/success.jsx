import React from "react"
import { Link } from "gatsby"
import { ThemeProvider } from "styled-components"

import { GlobalStyles } from "../components/GlobalStyles"
import { lightTheme, darkTheme } from "../styles/Theme"
import { useDarkMode } from "../components/useDarkMode"

import Layout from "../components/Layout"
import Footer from "../components/Common/Footer/Footer"
import successImage from "../images/mail.svg"
import { Success as StyledSuccess } from "../styles"

import PatternImageLight from "../images/pattern-bg-light.svg"
import PatternImageDark from "../images/pattern-bg-dark.svg"
import Navigation from "../components/Common/Navigation/Navigation"

const Success = props => {
  const [theme, setTheme] = useDarkMode(
    (typeof window !== "undefined" && window.localStorage.getItem("theme")) ||
      "light"
  )
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  let PatternImage = PatternImageLight

  if (theme === "dark") {
    PatternImage = PatternImageDark
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Layout theme={theme}>
          <Navigation theme={theme} toggleTheme={themeToggler} />
          <StyledSuccess>
            <div
              className="success"
              style={{
                backgroundImage: `linear-gradient(to right bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url(${PatternImage})`,
              }}
            >
              <div className="success-image">
                <img src={successImage} alt="" />
              </div>

              <div className="success-content">
                <div className="success-content-detail">
                  <h2>Thank you for contacting me!</h2>
                  <Link to="/">&larr; Back Home</Link>
                </div>
              </div>
            </div>
          </StyledSuccess>
          <Footer theme={theme} />
        </Layout>
      </>
    </ThemeProvider>
  )
}

export default Success
