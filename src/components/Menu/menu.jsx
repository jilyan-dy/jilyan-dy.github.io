import React from "react"
import "./menu.scss"
import resume from "../../pdf/Jilyan-resume.pdf"
import { AnchorLink as Link } from "gatsby-plugin-anchor-links"

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li>
          <Link
            smooth
            to="/#intro"
            onClick={() => setMenuOpen(false)}
            onKeyDown={() => setMenuOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            smooth
            to="/#projects"
            onClick={e => {
              e.preventDefault()
              setMenuOpen(false)
              console.log(menuOpen)
            }}
            onKeyDown={e => {
              e.preventDefault()
              setMenuOpen(false)
              console.log(menuOpen)
            }}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            smooth
            to="/#education"
            onClick={() => setMenuOpen(false)}
            onKeyDown={() => setMenuOpen(false)}
          >
            Education
          </Link>
        </li>
        <li>
          <Link
            smooth
            to="/#publications"
            onClick={() => setMenuOpen(false)}
            onKeyDown={() => setMenuOpen(false)}
          >
            Publications
          </Link>
        </li>
        <li>
          <Link
            smooth
            to="/#contact"
            onClick={() => setMenuOpen(false)}
            onKeyDown={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </li>
        <li>
          <a
            style={{ display: "table-cell" }}
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            onKeyDown={() => setMenuOpen(false)}
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Menu
