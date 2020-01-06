import React from "react"
import Meetup from "./Meetup"
import Strikethrough from "./Strikethrough"

const MeetupList = ({ data }) => (
  <ol className="p-0">
    {data.map((meetup, index) => {
      const title = meetup.node.title
      return (
        <li className="list-none mb-6" key={`meetup_${index}`}>
          <h3 className="mb-0">
            <Strikethrough date={meetup.node.date_and_time}>
              {title}
            </Strikethrough>
          </h3>
          <Meetup data={meetup.node} />
        </li>
      )
    })}
  </ol>
)

export default MeetupList
