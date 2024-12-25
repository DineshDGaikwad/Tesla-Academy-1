import React from "react";
import Aboutus  from "../components/Aboutus";
import Contact  from "../components/Contact";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'

const AboutusPage = () => {
    return (
        <div>
            <NavBar />
            <Aboutus />
            <Contact />
            <Footer />
        </div>
    );
};

export default AboutusPage;
