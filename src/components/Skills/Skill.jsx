import React from "react"

import { Skill as StyledSkill } from "./Styles"

export default function Skill({ skill }) {
  const { title, skillset } = skill
  let iconClass = `${skill.icon} fa-3x`

  return (
    <StyledSkill>
      <div className="skill-header">
        <i className={iconClass}></i>
        <h4>{title}</h4>
      </div>

      <div className="skill">
        {skillset.map((singleSkill, index) => (
          <p key={index}>{singleSkill}</p>
        ))}
      </div>
    </StyledSkill>
  )
}
