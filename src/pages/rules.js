import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Content from "../components/Content"

export const query = graphql`
  {
    prismic {
      allRuless(uid: null) {
        edges {
          node {
            _meta {
              id
              type
            }
            page_title
            content
          }
        }
      }
    }
  }
`

export default ({ data }) => {
  const page = data.prismic.allRuless.edges[0].node

  if (!page) return null

  return (
    <Layout pageTitle={page.page_title}>
      <h1>{page.page_title}</h1>
      <Content data={page.content} />
    </Layout>
  )
}
