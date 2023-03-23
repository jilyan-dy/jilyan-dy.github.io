import React from "react"
import "./menu.scss"
import resume from "../../pdf/Jilyan-resume.pdf"
import { AnchorLink as Link } from "gatsby-plugin-anchor-links"

const Menu = ({ menuLinks, menuOpen, setMenuOpen }) => (
  <div className={"menu " + (menuOpen && "active")}>
    <ul>
      {menuLinks.map(link => (
        <li key={link.name}>
          <Link to={link.link} onAnchorLinkClick={() => setMenuOpen(false)}>
            {link.name}
          </Link>
        </li>
      ))}
      <li>
        <a
          style={{ display: "table-cell" }}
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          Resume
        </a>
      </li>
    </ul>
  </div>
)

export default Menu
