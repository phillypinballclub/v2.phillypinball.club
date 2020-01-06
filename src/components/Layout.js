import React, { Fragment } from "react"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Wrapper } from "gatsby-theme-monolog/src/components/Layout"
import Nav from "./Nav"

export default props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        prismic {
          allSite_configs {
            edges {
              node {
                site_title
                site_description
                standings_link {
                  ... on PRISMIC__ExternalLink {
                    url
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
)

const Layout = ({ pageTitle, data, children }) => {
  const siteConfig = data.prismic.allSite_configs.edges[0].node
  const title = siteConfig.site_title
  const description = siteConfig.site_description
  const standings = siteConfig.standings_link.url

  // Load the Prismic edit button
  if (typeof window !== "undefined" && window.prismic) {
    window.prismic.setupEditButton()
  }

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {title}
          {pageTitle ? `: ${pageTitle}` : ""}
        </title>
        <meta name="description" content={description} />
      </Helmet>
      <main>
        <Wrapper>
          <Nav standings={standings} />
          {children}
        </Wrapper>
      </main>
    </Fragment>
  )
}
