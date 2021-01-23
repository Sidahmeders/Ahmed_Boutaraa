import React from "react"
import { Link } from "gatsby"

import StyledNavigation from "./Styles"
import Toggle from "../Toggle/Toggle"
// import logo from "../../../images/logo.svg"

const Navigation = ({ theme, toggleTheme }) => {
  return (
    <StyledNavigation>
      <Link className="logo" to="/">
        {/* <img src={logo} alt="logo" /> */}
        <span>Ahmed</span>
      </Link>

      <div className="toggle">
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </StyledNavigation>
  )
}

export default Navigation
