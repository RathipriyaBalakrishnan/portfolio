import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import HeroImage from "../components/HeroImg2";
import { Form } from "../components/Form";

const Contact =()=>{
    return(
        <div>
            <Navbar />
            <HeroImage heading="CONTACT." text="Let's have a chat"/>
            <Form/>
            <Footer />
        </div>
    )

}
export default Contact;
