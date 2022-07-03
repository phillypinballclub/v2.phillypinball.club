import React from "react"
import { Content } from "gatsby-theme-monolog/src/components/Layout"

const MailingList = () => {
  return (
    <Content>
      <h1>Mailing List</h1>
      <p>
        The best place to keep up with the PPC is on our mailing list. During
        the season we'll send out an email every week with reminders, updates,
        and announcements, so if you're looking to stay in the know, this is the
        place to be.
      </p>
      <form
        action="https://buttondown.email/api/emails/embed-subscribe/phillypinballclub"
        method="post"
        target="popupwindow"
        onsubmit="window.open('https://buttondown.email/phillypinballclub', 'popupwindow')"
        className="mt-5 mb-6 flex"
      >
        <label for="bd-email" class="sr-only">
          Enter your email
        </label>
        <input
          id="bd-email"
          name="email"
          placeholder="name@email.com"
          type="email"
          className="block bg-iota text-epsilon rounded py-2 px-4 leading-tight focus: outline-none focus:shadow-outline"
        />
        <button
          type="submit"
          className="box-glow bg-alpha hover:bg-epsilon text-white hover:text-theta font-bold py-1 px-4 rounded ml-2"
        >
          Submit
        </button>
      </form>
    </Content>
  )
}

export default MailingList
