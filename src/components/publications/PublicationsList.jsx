import React from "react"
import "./publicationsList.scss"
import Popup from "reactjs-popup"

export default function PublicationsList({ publications }) {
  return (
    <div className="container">
      {publications.map(item => (
        <div className="publicationPreview">
          <Popup
            trigger={
              <button className="preview">
                <h2>{item.title}</h2>
                <h3>{item.authors}</h3>
                <h5>{item.publicationDate}</h5>
              </button>
            }
            modal
            nested
          >
            {close => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="content">
                  <div className="header">{item.title}</div>
                  <div className="body">
                    <h3 className="author">{item.authors}</h3>
                    <h5 className="details">{item.publisher}</h5>
                    <h5 className="details">{item.publicationDate}</h5>
                    <div className="abstract">{item.abstract}</div>
                    <div className="buttonContainer">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        View{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Popup>
        </div>
      ))}
    </div>
  )
}
