import React from "react"
import Layout from "../components/Layout"
import { Content } from "gatsby-theme-monolog/src/components/Layout"

export default () => (
  <Layout pageTitle="Page Not Found">
    <Content>
      <h1>404</h1>
      <h2>Document not found</h2>
      <p>
        <a href="/">Return to homepage</a>
      </p>
    </Content>
  </Layout>
)
