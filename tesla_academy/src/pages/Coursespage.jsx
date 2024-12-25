import React from "react";
import Courses  from "../components/Courses";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'

const CoursesPage = () => {
    return (
        <div>
            <NavBar />
            <Courses />
            <Footer />
        </div>
    );
};

export default CoursesPage;
