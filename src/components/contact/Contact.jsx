import React from "react"
import "./contact.scss"
import { personal_info } from "../../data/data"

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <h1 className="title">Contact</h1>
      <a href={`mailto:${personal_info.email}`}>
        <span>e-mail me</span>
      </a>
    </div>
  )
}
