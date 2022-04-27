import React from 'react';
import "./publicationsList.scss"
import { Link } from 'gatsby'

export default function PublicationsList({publications}) {
  // let navigate = useNavigate();
  return (
    <div className="container">
      {publications.map((item) => (
          <div className="publicationPreview">
            <Link to={"/publication/" + item.frontmatter.id} key={item.frontmatter.id}>
              <h2>{item.frontmatter.title}</h2>
              <h3>{item.frontmatter.authors}</h3>
              <h5>{item.frontmatter.publicationDate}</h5>
            </Link>
          </div>
      ))}
    </div>
    
  )
}