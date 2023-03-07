import React from 'react';
import "./publicationsList.scss"
import Popup from 'reactjs-popup';

export default function PublicationsList({publications}) {
  return (
    <div className="container">
      {publications.map((item) => (
        <div className="publicationPreview">
          <Popup trigger=
            {<button className='preview'>
              <h2>{item.frontmatter.title}</h2>
              <h3>{item.frontmatter.authors}</h3>
              <h5>{item.frontmatter.publicationDate}</h5>
            </button>}
            modal nested>
            {
              close => (
                <div className="modal">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    <div className="header">{ item.frontmatter.title }</div>
                    <div className="content">
                        <h3 className='author'>{ item.frontmatter.authors }</h3>
                        <h5 className='details'>{ item.frontmatter.publisher }</h5>
                        <h5 className='details'>{ item.frontmatter.publicationDate }</h5>
                        <div className="abstract" dangerouslySetInnerHTML={{ __html: item.html }} />
                        <div className="buttonContainer">
                            <a href={item.frontmatter.link} target="_blank" rel = "noopener noreferrer"> View </a>
                        </div>
                    </div>
                </div>
              )
            }
          </Popup>
        </div>
      ))}
    </div>
    
  )
}