import React from "react"
import { Link } from "gatsby"

const NavItem = ({ text, link }) => (
  <li className="list-none mr-6 mb-1 sm:mb-0">
    {link.startsWith("http") ? (
      <a className="text-beta text-shadow-beta" href={link}>
        {text}
      </a>
    ) : (
      <Link className="text-beta text-shadow-beta" to={link}>
        {text}
      </Link>
    )}
  </li>
)

const Nav = ({ standings = "#" }) => {
  return (
    <nav className="mb-5" role="navigation">
      <ul className="block sm:flex">
        <NavItem text="Home" link="/" />
        <NavItem text="About the Club" link="/about/" />
        <NavItem text="Schedule" link="/schedule/" />
        <NavItem text="Standings" link={standings} />
        <NavItem text="Rules" link="/rules/" />
        <NavItem text="Code of Conduct" link="/code-of-conduct" />
      </ul>
    </nav>
  )
}

export default Nav
