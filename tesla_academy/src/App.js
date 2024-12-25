
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage'; 
import CoursesPage from './pages/Coursespage';
import LoginPage from './pages/LoginPage'; // Import the Login component
import RegisterPage from './pages/RegisterPage';
import AboutusPage from './pages/AboutusPage';
import ContactPage from './pages/ContactPage';
import ForumPage from './pages/ForumPage';
import EnquiryFormPage from './pages/EnquiryFormPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/login" element={<LoginPage />} />  {/* Add the route for Login page */}
                <Route path="/registerPage" element={<RegisterPage/>} />  {/* Add the route for Register page */}
                <Route path='/contact' element={<ContactPage/>}/>
                <Route path='/aboutus' element={<AboutusPage/>}/>
                <Route path='/forum' element={<ForumPage/>}/>
                <Route path='/enquiry' element={<EnquiryFormPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
