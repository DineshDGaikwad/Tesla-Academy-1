import React from "react";
import Login  from "../components/Login";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'

const LoginPage = () => {
    return (
        <div>
            <NavBar />
            <Login />
            <Footer />
        </div>
    );
};

export default LoginPage;
