import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Topbar from "./Topbar/topbar"
import Menu from "./Menu/menu"

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const data = useStaticQuery(graphql`
    query MenuLinks {
      site {
        siteMetadata {
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)
  const menuLinks = data.site.siteMetadata.menuLinks
  return (
    <div>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu
        menuLinks={menuLinks}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <div className="content">{children}</div>
    </div>
  )
}
