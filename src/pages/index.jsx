import React from "react"
import "./index.scss"

import Layout from "../components/Layout"
import Intro from "../components/intro/Home"
import Publications from "../components/publications/Publications"
import Education from "../components/education/Education"
import Contact from "../components/contact/Contact"

export default function Home({ data }) {
  return (
    <main>
      <title>Jilyan Dy</title>
      <Layout>
        <Intro/>
        <Education/>
        <Publications/>
        <Contact/>
      </Layout>
    </main>
  )
}
