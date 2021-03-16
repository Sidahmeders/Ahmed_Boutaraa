import React from "react"

import { StyledHireMe } from "../../styles"
import PatternImage from "../../images/pattern2.png"

const HireMe = () => {
  return (
    <StyledHireMe>
      <h3><span role="img" aria-labelledby="stress smile">😁 😆 😅</span></h3>
      <div
        className="hire"
        style={{
          backgroundImage: `linear-gradient(to right bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url(${PatternImage})`,
        }}
      >
      <iframe 
      width="560" height="315" src="https://www.youtube.com/embed/bFvSuNUZgG8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </StyledHireMe>
  )
}

export default HireMe
