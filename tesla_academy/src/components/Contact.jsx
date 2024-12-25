import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Swal from "sweetalert2";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_giydhim', 'template_b4edefl', form.current, {
        publicKey: 'fNj7ASt-EA3WRpr08',
      })
      .then(
        () => {
          e.target.reset();
          Swal.fire({
            title: "Success!",
            text: "Message sent successfully",
            icon: "success"
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className="flex items-center justify-center h-screen bg-cover"
      style={{
        backgroundImage: "url('https://viditrade.com/wp-content/uploads/2022/04/login-pg-img.jpg')",
      }}
    >
      <div className="max-w-screen-md w-full p-2 m-16 bg-white rounded-lg shadow-lg flex flex-col md:flex-row text-black">
        {/* Left Side */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>

          <div className="flex items-center mb-4">
            <FaPhoneAlt className="text-2xl mr-2" />
            <span className="text-lg">+1 (123) 456-7890</span>
          </div>

          <div className="flex items-center">
            <FaEnvelope className="text-2xl mr-2" />
            <span className="text-lg">info@example.com</span>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                placeholder='Enter Your Name'
                name='user_name'
                id="name"
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                placeholder='Enter Your Email'
                name='user_email'
                id="email"
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="w-full border border-gray-300 p-2 rounded"
                name='message'
                placeholder='Type your message here'
                rows="4"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full  text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 p-2 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;