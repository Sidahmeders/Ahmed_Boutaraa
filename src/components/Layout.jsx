import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import PatternImageDark from "../images/pattern-bg-dark.svg"
import PatternImageLight from "../images/pattern-bg-light.svg"

const Layout = ({ children, theme }) => {
  let PatternImage = PatternImageLight

  if (theme === "dark") {
    PatternImage = PatternImageDark
  }

  return (
    <>
      <Helmet>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Concert+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Meera+Inimai&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <main
        style={{
          backgroundImage: `linear-gradient(to right bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url(${PatternImage})`,
        }}
      >
        {children}
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
