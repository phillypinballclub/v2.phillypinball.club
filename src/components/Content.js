import React from "react"
import { RichText } from "prismic-reactjs"
import { Content as ThemeContent } from "gatsby-theme-monolog/src/components/Layout"
import { linkResolver } from "../utils/linkResolver"
import htmlSerializer from "../utils/htmlSerializer"

const Content = ({ data }) => {
  return (
    <ThemeContent>
      <RichText
        render={data}
        htmlSerializer={htmlSerializer}
        linkResolver={linkResolver}
      />
    </ThemeContent>
  )
}

export default Content
