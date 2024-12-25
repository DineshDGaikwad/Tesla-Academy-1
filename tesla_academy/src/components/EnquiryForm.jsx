"use client";

import React, { useState } from "react";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    class: "",
    board: "",
    subject: "",
    country: "+91",
    phone: "",
    enquiryMessage: "",
  });

  const [errors, setErrors] = useState({});
  const [responseMessage, setResponseMessage] = useState(null);

  const classes = Array.from({ length: 12 }, (_, i) => `${i + 1}`);
  const boards = ["CBSE", "ICSE", "State Board", "IB", "Cambridge"];
  const subjects = ["Mathematics", "Science", "English", "History", "Geography", "Hindi", "Marathi", "Geometry", "Algebra", "Physics", "Chemistry", "Biology"];
  const countries = [
    { name: "India", code: "+91" },
    { name: "USA", code: "+1" },
    { name: "UK", code: "+44" },
    { name: "Australia", code: "+61" },
    { name: "Canada", code: "+1" },
  ];

  const validate = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required.";
        if (value.length < 3) return "Name must be at least 3 characters.";
        break;
      case "class":
        if (!value) return "Class is required.";
        break;
      case "board":
        if (!value) return "Board is required.";
        break;
      case "subject":
        if (!value) return "Subject is required.";
        break;
      case "phone":
        if (!value) return "Phone number is required.";
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(value)) return "Invalid phone number. Must be 10 digits.";
        break;
      case "enquiryMessage":
        if (!value.trim()) return "Enquiry message is required.";
        if (value.length < 10) return "Message must be at least 10 characters.";
        break;
      default:
        return null;
    }
    return null;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: validate(name, value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = Object.keys(formData).reduce((acc, key) => {
      const error = validate(key, formData[key]);
      if (error) acc[key] = error;
      return acc;
    }, {});

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setResponseMessage("Your enquiry has been submitted successfully!");
    setFormData({
      name: "",
      class: "",
      board: "",
      subject: "",
      country: "+91",
      phone: "",
      enquiryMessage: "",
    });
    setErrors({});
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded shadow mt-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">Enquiry Form</h2>
      {responseMessage && <p className="text-center text-green-500 mb-4">{responseMessage}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 mb-1">Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`border w-full p-3 rounded ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Class</label>
          <select
            name="class"
            value={formData.class}
            onChange={handleChange}
            className={`border w-full p-3 rounded ${
              errors.class ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select Class</option>
            {classes.map((classOption) => (
              <option key={classOption} value={classOption}>
                {classOption}th
              </option>
            ))}
          </select>
          {errors.class && <p className="text-red-500 text-sm mt-1">{errors.class}</p>}
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Board</label>
          <select
            name="board"
            value={formData.board}
            onChange={handleChange}
            className={`border w-full p-3 rounded ${
              errors.board ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select Board</option>
            {boards.map((board) => (
              <option key={board} value={board}>
                {board}
              </option>
            ))}
          </select>
          {errors.board && <p className="text-red-500 text-sm mt-1">{errors.board}</p>}
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Subject</label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`border w-full p-3 rounded ${
              errors.subject ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select Subject</option>
            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
          {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Phone</label>
          <div className="flex gap-2">
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="border p-3 rounded"
            >
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name} ({country.code})
                </option>
              ))}
            </select>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`border flex-grow p-3 rounded ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter phone number"
            />
          </div>
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Enquiry Message</label>
          <textarea
            name="enquiryMessage"
            value={formData.enquiryMessage}
            onChange={handleChange}
            className={`border w-full p-3 rounded ${
              errors.enquiryMessage ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your enquiry message"
            rows="5"
          />
          {errors.enquiryMessage && <p className="text-red-500 text-sm mt-1">{errors.enquiryMessage}</p>}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EnquiryForm;
