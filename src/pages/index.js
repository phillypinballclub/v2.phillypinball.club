import React from "react"
import { graphql } from "gatsby"
import moment from "moment"
import Layout from "../components/Layout"
import Content from "../components/Content"
import NextMeetup from "../components/NextMeetup"

export const query = graphql`
  {
    prismic {
      allSite_configs {
        edges {
          node {
            standings_link {
              ... on PRISMIC__ExternalLink {
                url
              }
            }
          }
        }
      }
      allHomes(uid: null) {
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
      allMeetups(sortBy: date_and_time_DESC) {
        edges {
          node {
            title
            date_and_time
            venue {
              ... on PRISMIC_Venue {
                name
                neighborhood
                google_maps_link {
                  _linkType
                  ... on PRISMIC__ExternalLink {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default ({ data }) => {
  const page = data.prismic.allHomes.edges[0].node
  const meetups = data.prismic.allMeetups.edges
  const now = moment()
  const upcoming = meetups
    .filter(meetup => moment(meetup.node.date_and_time).isAfter(now))
    .pop().node

  if (!page) return null

  return (
    <Layout>
      <h1 className="sr-only">{page.page_title}</h1>
      <Content data={page.content} />
      <NextMeetup data={upcoming} />
    </Layout>
  )
}
