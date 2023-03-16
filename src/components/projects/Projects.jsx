import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Carousel, { CarouselItem } from "../Carousel/Carousel"
import "./projects.scss"

export default function Projects() {
  const data = useStaticQuery(graphql`
    query ProjectsList {
      allProjectsJson(sort: { jsonId: ASC }) {
        nodes {
          type
          title
          desc
          tools
          link
          image {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      }
    }
  `)
  const projects = data.allProjectsJson.nodes

  return (
    <div className="projects" id="projects">
      <h1 className="title">Projects</h1>
      <Carousel>
        {projects.map(project => (
          <CarouselItem>{project}</CarouselItem>
        ))}
      </Carousel>
    </div>
  )
}
