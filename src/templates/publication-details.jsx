import React from 'react';
import "./publicationView.scss";
import Layout from "../components/Layout"
import { graphql } from 'gatsby';

export default function PublicationDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, authors, publisher, publicationDate, link } =  data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className="publicationView">
          <div className="container">
              <h2>{ title }</h2>
              <h3>{ authors }</h3>
              <h5>{ publisher }</h5>
              <h5>{ publicationDate }</h5>
              <div className="abstract" dangerouslySetInnerHTML={{ __html: html }} />
              <div className="buttonContainer">
                  <a style={{display: "table-cell"}} href={link} target="_blank" rel = "noopener noreferrer"> View </a>
              </div>
          </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PublicationView($id: String) {
    markdownRemark(frontmatter: {id: {eq: $id}}) {
      frontmatter {
        title
        authors
        publisher
        publicationDate
        link
      }
      html
    }
  }
`