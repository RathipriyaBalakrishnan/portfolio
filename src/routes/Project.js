import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import HeroImage from "../components/HeroImg2";
import { PricingCard } from "../components/PricingCard";
import { Work } from "../components/Work";

const  Project=()=>{
    return(
        <div>
            <Navbar />
            <HeroImage heading="PROJECTS." text="Some of my recent works"/>
            <Work />
            <PricingCard />
            <Footer />
        </div>
    )
}
export default Project;
