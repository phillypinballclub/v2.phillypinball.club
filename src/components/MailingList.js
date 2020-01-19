import React, { Fragment, useState, useRef } from "react"
import { Content } from "gatsby-theme-monolog/src/components/Layout"
import axios from "axios"
import qs from "qs"

const SuccessMessage = () => (
  <Fragment>
    <p className="text-delta text-shadow-delta">Welcome to the party, pal!</p>
    <p>
      We add these addresses manually to avoid spam filters, so it might take a
      few days before you get a confirmation. In the meantime, free to email{" "}
      <a href="mailto:info@phillypinball.club">info@phillypinball.club</a> if
      you wanna get in touch.
    </p>{" "}
  </Fragment>
)
const ErrorMessage = () => (
  <Fragment>
    <p className="text-alpha text-shadow-alpha">Yikes, something went wrong!</p>
    <p>
      If you give it another shot and still see this error, drop a line to{" "}
      <a href="mailto:info@phillypinball.club">info@phillypinball.club</a> and
      we'll sort it out!
    </p>
  </Fragment>
)
const ValidationMessage = () => (
  <p className="text-epsilon text-shadow-epsilon">Forget yer email?</p>
)

const MailingList = () => {
  const [submitted, setSubmitted] = useState(false)
  const [errored, setErrored] = useState(false)
  const [validated, setValidated] = useState(true)
  const ref = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()

    const formData = Object.keys(ref.current).reduce((obj, key) => {
      const name = ref.current[key]["name"]
      const value = ref.current[key]["value"]

      if (name && value !== undefined) {
        obj[name] = value
      }

      return obj
    }, {})

    const opts = {
      url: "/",
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: qs.stringify(formData),
    }

    if (!formData.email) {
      setValidated(false)
    } else {
      setValidated(true)

      axios(opts)
        .then(response => {
          setSubmitted(true)
          setErrored(false)
          ref.current.reset()
        })
        .catch(err => {
          setSubmitted(false)
          setErrored(true)
        })
    }
  }

  return (
    <Content>
      <h1>Mailing List</h1>
      <p>
        The best place to keep up with the PPC is on our mailing list. During
        the season we'll send out an email every week with reminders, updates,
        and announcements, so if you're looking to stay in the know, this is the
        place to be.
      </p>
      {!validated && <ValidationMessage />}
      <form
        onSubmit={e => handleSubmit(e)}
        ref={ref}
        className="mt-5 mb-6 flex"
        name="mailing-list"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="mailing-list" />
        <input type="hidden" name="bot-field" />
        <input
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
      {submitted && <SuccessMessage />}
      {errored && <ErrorMessage />}
    </Content>
  )
}

export default MailingList
