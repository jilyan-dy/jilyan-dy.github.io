import React, { useState } from "react"
import Topbar from "./Topbar/topbar"
import Menu from "./Menu/menu"

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="content">{children}</div>
    </div>
  )
}
