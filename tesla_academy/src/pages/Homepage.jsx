import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Courses from "../components/Courses";
import Footer from "../components/Footer";

const HomePage = () => {
    return (
        <div>
            <div>
                <NavBar/>
                <Hero />
                <Footer />
            </div>
        </div>
    );
};

export default HomePage;
