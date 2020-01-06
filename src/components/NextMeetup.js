import React, { Fragment } from "react"
import Meetup from "./Meetup"
import { Link } from "gatsby"
import { Content as ThemeContent } from "gatsby-theme-monolog/src/components/Layout"

const NextMeetup = ({ data }) => {
  return (
    <Fragment>
      <h1>Next Meetup</h1>
      <ThemeContent>
        <Meetup data={data} />
        <p>
          {data.title} {data.title.startsWith("Week") ? "of 8" : ""} —{" "}
          <Link to="/schedule/">Details Here</Link>
        </p>
      </ThemeContent>
    </Fragment>
  )
}

export default NextMeetup
