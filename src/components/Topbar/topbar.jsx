import React from 'react';
import "./topbar.scss"
import DownloadIcon from '@mui/icons-material/DownloadRounded';
import MailIcon from '@mui/icons-material/MailRounded';
import SchoolIcon from '@mui/icons-material/SchoolRounded';
import ArticleIcon from '@mui/icons-material/ArticleRounded';
import myLogo from "../../images/icon.png";
import { personal_info } from "../../data";
import resume from "../../pdf/Jilyan-resume.pdf"
import { AnchorLink as Link } from "gatsby-plugin-anchor-links";

const Topbar = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
          <div className="left">
            <Link stripHash to="/#intro" className="logo">
              <img src={myLogo} alt="Logo" />
              <span className="name">Jilyan Dy</span>
            </Link>
          </div>
          <div className="right">
            <Link stripHash to="/#publications">
              <div className="itemContainer">
                <ArticleIcon className="icon" />
                <span>Publications</span>
              </div>
            </Link>
            <Link stripHash to="/#education">
              <div className="itemContainer">
                <SchoolIcon className="icon" />
                <span>Education</span>
              </div>
            </Link>
            <a href={`mailto:${personal_info.email}`}>
              <div className="itemContainer">
                <MailIcon className="icon" />
                <span>Contact Me</span>
              </div>
            </a>
            <a href={resume} target="_blank" rel = "noopener noreferrer">
              <div className="itemContainer">
                <DownloadIcon className="icon" />
                <span>My Resume</span>
              </div>
            </a>
            <button className="hamburger" onClick={()=>setMenuOpen(!menuOpen)} onKeyDown={()=>setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </button>
          </div>
        </div>
    </div>
  )
}

export default Topbar;