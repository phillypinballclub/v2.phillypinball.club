import React from "react"
import moment from "moment"

const Strikethrough = ({ date, children }) => {
  const now = moment()

  return now.isAfter(moment(date)) ? <s>{children}</s> : children
}

export default Strikethrough
