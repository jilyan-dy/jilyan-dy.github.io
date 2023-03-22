import React, { useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useSwipeable } from "react-swipeable"
import CircleIcon from "@mui/icons-material/CircleRounded"

import "./carousel.scss"

export const CarouselItem = ({ children }) => {
  const image = getImage(children.image)
  return (
    <div className="carousel-item">
      <div className="project">
        <GatsbyImage image={image} alt={children.title} />
        <div className="content">
          <h1 className="name">{children.title}</h1>
          <h3 className="description">{children.desc}</h3>
          <h3 className="tools">{children.tools}</h3>
          <div className="buttonContainer">
            <a href={children.link} target="_blank" rel="noopener noreferrer">
              {children.type === "research" ? "Video" : "GitHub"}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const updateIndex = newIndex => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0
    }

    setActiveIndex(newIndex)
  }

  const calcTransform = () => {
    if (typeof window !== "undefined" && window.screen.width <= 768) {
      return 6.5 - activeIndex * 74
    } else {
      return 7 - activeIndex * 83
    }
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  })

  return (
    <div {...handlers} className="carousel">
      <div className="view">
        <div
          className="inner"
          style={{ transform: `translateX(${calcTransform()}%)` }}
        >
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child)
          })}
        </div>
      </div>
      <div className="indicators">
        <button
          className="arrow"
          onClick={() => {
            updateIndex(activeIndex - 1)
          }}
        >
          &#10094;
        </button>
        {React.Children.map(children, (child, index) => {
          return (
            <CircleIcon
              className={`${index === activeIndex ? "dots active" : "dots"}`}
              onClick={() => {
                updateIndex(index)
              }}
            ></CircleIcon>
          )
        })}
        <button
          className="arrow"
          onClick={() => {
            updateIndex(activeIndex + 1)
          }}
        >
          &#10095;
        </button>
      </div>
    </div>
  )
}

export default Carousel
