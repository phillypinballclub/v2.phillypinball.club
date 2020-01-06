import React from "react"
import moment from "moment"
import Strikethrough from "./Strikethrough"

const Meetup = ({ data }) => {
  const date = moment(data.date_and_time).format("MMMM Do")
  const time = moment(data.date_and_time).format("h:mma")
  const venue = data.venue.name
  const neighborhood = data.venue.neighborhood
  const map = data.venue.google_maps_link.url

  return (
    <p>
      <Strikethrough date={data.date_and_time}>
        {date} at{" "}
        <a href={map} title={`See ${venue} on Google Maps`}>
          {venue}
        </a>{" "}
        {neighborhood ? ` in ${neighborhood}` : ""}, <strong>{time}</strong>
      </Strikethrough>
    </p>
  )
}

export default Meetup
