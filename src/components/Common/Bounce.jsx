import React from "react"

import { DownArrow } from "../../styles/common"
import downArrow from "../../images/down-arrow.svg"
export default function Bounce({ to }) {
  return (
    <DownArrow>
      <a href={`#${to}`}>
        <div className="downArrow bounce">
          <img width="40" height="40" alt="" src={downArrow} />
        </div>
      </a>
    </DownArrow>
  )
}
