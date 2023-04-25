import "./HeroImgStyle2.css";

import React from 'react';
class HeroImage extends React.Component {
   render() {
     return(
      <div className="hero-img">
      <div className="heading">
         <h1>{this.props.heading}</h1>
         <p>{this.props.text}</p>
      </div>
     </div>

     )
   }
 }
 export default HeroImage;
