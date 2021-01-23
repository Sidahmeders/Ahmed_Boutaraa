import React from "react"

import ContactDetail from "../Reuseables/ContactDetail/ContactDetail"
import StyledFooter from "./Styles"

const Footer = ({ theme }) => {
  return (
    <StyledFooter>
      <ContactDetail size="3x" color="white" theme={theme} />
      <p>
        Sodium Engineering
        <span role="img" aria-label="Developer">
        </span>{" "}
        &copy; {new Date().getFullYear()}
      </p>
    </StyledFooter>
  )
}

export default Footer
