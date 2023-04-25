import { Link } from "react-router-dom";
import "./AboutContentStyle.css";
import React from 'react';

export const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <p>I am a react front-end developer.I create responsive secure websites for my clients.</p>
        <Link to="/contact">
            <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?q=10&h=200" className="img"alt="true"/>
            </div>
            <div className="img-stack bottom">
                <img src="https://img.freepik.com/free-vector/mobile-app-development-isometric-landing-page_107791-2045.jpg?w=900&t=st=1681643833~exp=1681644433~hmac=f7439b24b1be5be3b765554fb06b18a64fc4f12196f0b44c834d00495caad134" className="img"alt="true"/>
            </div>
        </div>
      </div>
    </div>
  )
}
