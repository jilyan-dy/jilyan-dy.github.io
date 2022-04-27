import React, {useState} from "react";
import { graphql, useStaticQuery } from "gatsby";
import PublicationsList from "./PublicationsList";
import "./publications.scss";

export default function Publications() {
  const data = useStaticQuery(graphql`
    query PublicationList {
      allMarkdownRemark(sort: {fields: frontmatter___id, order: DESC}) {
        nodes {
          frontmatter {
            id
            topic
            title
            authors
            publicationDate
          }
        }
      }
    }
  `);
  const publications = data.allMarkdownRemark.nodes;
  const [selected, setSelected] = useState("all");
  const topics = [
    {
      id: "all",
      topic: "All"
    },
    {
      id: "nlp",
      topic: "Natural Language Processing",
    },
    {
      id: "cv",
      topic: "Computer Vision",
    },
  ];

  return (
    <div className='publications' id="publications">
        <h1>Publications</h1>
        <ul>
          {topics.map((item)=>(
            <li className={"" + (item.id===selected && "active")}>
              <button onClick={()=>setSelected(item.id)}
                      onKeyDown={()=>setSelected(item.id)}>
                {item.topic}
              </button>
            </li>
          ))}
        </ul>
        <div className="container">
          <PublicationsList publications={publications.filter((publication) => selected === publication.frontmatter.topic || selected === "all")} />
        </div>
    </div>
  )
}