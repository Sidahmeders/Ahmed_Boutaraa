import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { SkillsList as StyledSkillsList } from "./Styles"
import Skill from "./Skill"

const SkillsList = ({ theme }) => {
  const data = useStaticQuery(graphql`
    {
      allSkillsJson {
        edges {
          node {
            id
            title
            icon
            skillset
          }
        }
      }
    }
  `)

  const skills = data.allSkillsJson.edges

  return (
    <StyledSkillsList>
      <div className="skills">
        <div className="skills-header">
          <h3>Skills</h3>
        </div>

        <div className="skills-body">
          <div className="skills-body-content">
            <div className="skills-body-content-header">
              <i className="fas fa-code fa-3x"></i>
              <h3>Developer</h3>
            </div>

            <div className="skills-body-content-details">
              <h4>
                I am a Full-Stack Web Engineer with a passion for web technologies. 
                and systems I write robust, clean, well-documented and re-usable code.
              </h4>

              <h4>
                This means I strive to follow best practices and to create flexible
                designs that are maintainable and that can cope with change and use 
                industry-standard tools<span > git-flow</span>,
                <span> Test Driven Development</span>,<span> Continous Integration</span>,
                <span> linting</span>, <span> package management</span> and modern build tools (
                <span>Webpack, Babel</span>).
              </h4>

              <h4>
                Although I have done some frontEnd-Development with different technologies I
                prefer backend-Engineering and building systems that are flexible and/or scale with {" "}
                <span>(maintainability)</span>,<span> (modifiability)</span>, 
                <span> (interoperability)</span> and <span> (fault tolerance)</span>. 
                not to say that working on both sides of the coin is my pleasure.
              </h4>
            </div>
          </div>
          <div className="skills-body-items">
            {skills.map(({ node: skill }) => (
              <Skill key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </StyledSkillsList>
  )
}

export default SkillsList
