import React from "react"
import ToggleContainer from "./Styles"

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <>
      <ToggleContainer onClick={toggleTheme}>
        <i className="fa fa-5x fa-moon"></i>
        <i className="fa fa-5x fa-sun"></i>
      </ToggleContainer>
    </>
  )
}

export default Toggle
