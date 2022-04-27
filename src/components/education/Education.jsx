import React from 'react';
import "./education.scss";
import dlsuLogo from "../../images/dlsu_logo.png";
import ntustLogo from "../../images/ntust_logo.png";
import { education } from "../../data";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

export default function Education() {
  let dlsuIconStyle = { background: "#c8ffe4" }
  let ntustIconStyle = { background: "#b3d9ff" }

  return (
    <div className='education' id="education">
        <h1 className="title">Education</h1>
        <VerticalTimeline>
          {education.map(element => {
            let isDLSUIcon = element.acronym === "DLSU";
            return(
            <VerticalTimelineElement
              key={element.key}
              date={element.duration}
              dateClassName="date"
              iconStyle={isDLSUIcon ? dlsuIconStyle : ntustIconStyle}
              icon={isDLSUIcon ? <img src={dlsuLogo} alt="DLSU" style={{width:'80%',margin: '0',position: 'absolute',top: '9%',left: '11%'}}/> : <img src={ntustLogo} alt="NTUST" style={{width:'80%',margin: '0',position: 'absolute',top: '9%',left: '11%'}}/> }
            >
              <h3 className="vertical-timeline-element-title">
                {element.schoolName}
              </h3>
              <h5 className="verticle-timeline-element-subtitle">
                {element.degree}
              </h5>
            </VerticalTimelineElement>
          )})}
        </VerticalTimeline>
    </div>
  )
}
