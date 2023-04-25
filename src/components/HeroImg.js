import "./HeroImgStyle.css";
import React from 'react'

import { Link } from "react-router-dom";
export const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
      <img className="into-img" src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="IntroImg"/>
      </div>
      <div className="content">
        <p>Hi,I am Rathipriya.</p>
        <h1>React Developer.</h1>
        <div>
            <Link to="/project" className="btn">PROJECTS</Link>
            <Link to="/contact" className="btn btn-light">CONTACT</Link>
        </div>
      </div>
    </div>
  )
}
