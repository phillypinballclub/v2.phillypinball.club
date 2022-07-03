import React from "react"
import { graphql } from "gatsby"
import Content from "../components/Content"
import MeetupList from "../components/MeetupList"
import Layout from "../components/Layout"

export const query = graphql`
  {
    prismic {
      allSchedules(uid: null) {
        edges {
          node {
            _meta {
              id
              type
            }
            page_title
            season
            intro
            content
          }
        }
      }
      allMeetups(sortBy: date_and_time_ASC) {
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
  const page = data.prismic.allSchedules.edges[0].node
  const meetups = data.prismic.allMeetups.edges

  if (!page) return null

  return (
    <Layout pageTitle={page.page_title}>
      <h1>{page.page_title}</h1>
      <Content data={page.intro} />
      <h2 className="mt-6">{page.season}</h2>
      <MeetupList data={meetups} />
      <Content data={page.content} />
    </Layout>
  )
}
