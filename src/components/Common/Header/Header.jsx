import React from "react"
import Typist from "react-typist"
import "react-typist/dist/Typist.css"

import StyledHeader from "./Styles"
import PatternImageLight from "../../../images/pattern2.svg"
import PatternImageDark from "../../../images/pattern.svg"
import Bounce from "../Bounce"
import ContactDetail from "../Reuseables/ContactDetail/ContactDetail"

export default function Header({ theme }) {
  let PatternImage = PatternImageLight

  if (theme === "dark") {
    PatternImage = PatternImageDark
  }
  return (
    <StyledHeader>
      <div
        className="content"
        style={{
          backgroundImage: `linear-gradient(to right bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url(${PatternImage})`,
        }}
      >
        <div className="header-content">
          <ContactDetail size="5x" theme={theme} />
          <div className="header-text">
            <h1>
              Hello I'm <span className="name">Ahmed Boutaraa</span>
            </h1>
            <Typist
              cursor={{
                show: true,
                blink: true,
                element: "  |  ",
                hideWhenDone: false,
              }}
              startDelay={1000}
            >
              <span>I am a Software Developer</span>
              <Typist.Backspace count={9} delay={2000} />
              <span>Engineer</span>
            </Typist>
          </div>
        </div>
      </div>
      <Bounce to="about" />
    </StyledHeader>
  )
}
