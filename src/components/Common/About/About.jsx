import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import StyledAbout from "./Styles"
import PatternImageDark from "../../../images/pattern-bg-dark.svg"

export default function About({ theme }) {
  const data = useStaticQuery(graphql`
    query {
      aboutImage: file(relativePath: { eq: "profile5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <StyledAbout id="about">
      <div
        className="bg"
        style={{
          backgroundImage:
            theme === "light" &&
            `linear-gradient(to right bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url(${PatternImageDark})`,
        }}
      >
        <div className="about-content">
          <h3>About Me</h3>
          <p>
            I am high school dropout with retail and customer service jobs, and i started
            programming and web developement in april 2019 till now. so i consider my self a
            self-taught Software Engineer with a autodidactic mindset seeking to develop a 
            flexible, robust and easy to scale software and distributed systems. 
            and I have been able to deliver a consistent approach throughout a period of 
            challenges so far with committment to learning and self-development.
          </p>
          
          <br/>
          <br/>

          <p>
            in my leisure i do calisthenics, jogging, boxing and sometimes i like to read 
            fictional stories, solve puzzlez, learn about new topic or just hang around with friends.
          </p>

        </div>
        <div className="about-image">
          <img src={data.aboutImage.childImageSharp.fluid.src} alt="profile" />
        </div>
      </div>
    </StyledAbout>
  )
}
