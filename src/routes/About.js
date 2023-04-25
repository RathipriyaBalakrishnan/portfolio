import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import HeroImage from "../components/HeroImg2";
import { AboutContent } from "../components/AboutContent";

const About =()=>{
    return(
        <div>
            <Navbar />
            <HeroImage heading="ABOUT." text="I'm a friendly Front-end Developer."/>
            <AboutContent/>
            <Footer />
        </div>
    )
}
export default About;
