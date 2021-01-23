import React from "react"

import ContactDetailStyle from "./Styles"

export default function ContactDetail({ size, color, theme }) {
  let mailClassName = `fas fa-envelope fa-${size}`
  let githubClassName = `fab fa-github fa-${size}`
  let linkedInClassName = `fab fa-linkedin fa-${size}`
  let burnClassName = `fa fa-burn fa-${size}`
  let stackOverFlowClassName = `fab fa-stack-overflow fa-${size}`
  let facebookClassName = `fab fa-facebook fa-${size}`

  return (
    <ContactDetailStyle color={color}>
      <a
        className={theme === "dark" ? "dark" : ""}
        href="mailto:ahorob57@gmail.com"
      >
        <i className={mailClassName}></i>
      </a>

      <a href="https://github.com/Sidahmeders">
        <i className={githubClassName}></i>
      </a>

      <a href="https://stackoverflow.com/users/11972667/ahmed-boutaraa">
        <i className={linkedInClassName}></i>
      </a>

      <a href="https://www.blog.sodiumUnited.com/">
        <i className={burnClassName}></i>
      </a>

      <a href="https://stackoverflow.com/users/11972667/sodium-united">
        <i className={stackOverFlowClassName}></i>
      </a>

      <a href="https://www.facebook.com/sidahmed.boutaraa.5">
        <i className={facebookClassName}></i>
      </a>
    </ContactDetailStyle>
  )
}
