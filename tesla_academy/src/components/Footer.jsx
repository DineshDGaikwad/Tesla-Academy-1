import React from "react";

const Footer = () => {
    return (
        <footer className="bg-teal-500 text-white py-6">
            <div className="container mx-auto text-center">
                <p className="mb-4">&copy;2023 Tesla Academy. All rights reserved.</p>
                <ul className="flex justify-center space-x-6">
                    <li>
                        <a href="#facebook" className="hover:text-blue-400 transition">Facebook</a>
                    </li>
                    <li>
                        <a href="#twitter" className="hover:text-blue-400 transition">Twitter</a>
                    </li>
                    <li>
                        <a href="#linkedin" className="hover:text-blue-400 transition">LinkedIn</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
