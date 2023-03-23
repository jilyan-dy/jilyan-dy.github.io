import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import PublicationsList from "./PublicationsList"
import "./publications.scss"

export default function Publications() {
  const data = useStaticQuery(graphql`
    query PublicationList {
      allPublicationsJson(sort: { jsonId: DESC }) {
        nodes {
          topic
          title
          authors
          publisher
          publicationDate
          link
          abstract
        }
      }
    }
  `)
  const publications = data.allPublicationsJson.nodes
  const [selected, setSelected] = useState("all")
  const topics = [
    {
      id: "all",
      topic: "All",
    },
    {
      id: "nlp",
      topic: "Natural Language Processing",
    },
    {
      id: "cv",
      topic: "Computer Vision",
    },
  ]

  return (
    <div className="publications" id="publications">
      <h1 className="title">Publications</h1>
      <ul className="topics">
        {topics.map(item => (
          <li className={"" + (item.id === selected && "active")}>
            <button
              onClick={() => setSelected(item.id)}
              onKeyDown={() => setSelected(item.id)}
            >
              {item.topic}
            </button>
          </li>
        ))}
      </ul>
      <PublicationsList
        publications={publications.filter(
          publication => selected === publication.topic || selected === "all"
        )}
      />
    </div>
  )
}
