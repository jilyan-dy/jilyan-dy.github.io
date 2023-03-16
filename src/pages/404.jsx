import React from "react"
import Layout from "../components/Layout"
import "./404.scss"

export default function NotFound() {
  return (
    <Layout>
      <div className="doesNotExist">
        <h2>Sorry, Page Does Not Exist...</h2>
      </div>
    </Layout>
  )
}
