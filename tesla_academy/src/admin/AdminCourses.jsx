"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Reusable HoverEffect Component for scaling and shadow effects
const HoverEffect = ({ children }) => (
  <div className="relative overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
    {children}
  </div>
);

const AdminCourses = () => {
  const [courses, setCourses] = useState({});
  const [error, setError] = useState(null);
  const [newCourse, setNewCourse] = useState({
    title: "",
    description: "",
    img: "",
    standard: "",
  });

  // Fetch courses from the API on component mount
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/courses");
        if (!response.ok) throw new Error("Failed to fetch courses");

        const data = await response.json();
        if (typeof data === "object" && data !== null) {
          setCourses(data);
        } else {
          throw new Error("Unexpected data format");
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchCourses();
  }, []);

  // Add a new course
  const handleAddCourse = async () => {
    const { title, description, img, standard } = newCourse;
    if (!title || !description || !img || !standard) {
      alert("All fields are required!");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/courses/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCourse),
      });

      if (response.ok) {
        alert("Course added successfully!");
        setNewCourse({ title: "", description: "", img: "", standard: "" });
        const updatedCourses = await response.json();
        setCourses(updatedCourses);
      } else {
        alert("Failed to add the course.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Delete a course
  const handleDeleteCourse = async (standard, index) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/courses/delete/${standard}/${index}`,
        { method: "DELETE" }
      );

      if (response.ok) {
        alert("Course deleted successfully!");
        const updatedCourses = await response.json();
        setCourses(updatedCourses);
      } else {
        alert("Failed to delete the course.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Render error state
  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  // Group courses by standard
  const groupedCourses = Object.entries(courses);

  return (
    <section id="admin-courses" className="py-12 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-10">Manage Courses</h2>

      {/* Add New Course Form */}
      <div className="container mx-auto px-4 mb-8">
        <h3 className="text-2xl font-semibold mb-4">Add New Course</h3>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {["title", "description", "img", "standard"].map((field) => (
            <input
              key={field}
              type="text"
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={newCourse[field]}
              onChange={(e) =>
                setNewCourse({ ...newCourse, [field]: e.target.value })
              }
              className="border p-2 rounded"
            />
          ))}
        </div>
        <button
          onClick={handleAddCourse}
          className="bg-green-500 text-white px-4 py-2 rounded mt-4"
        >
          Add Course
        </button>
      </div>

      {/* List Courses */}
      <div className="container mx-auto px-4">
        {groupedCourses.map(([className, courseList]) => (
          <div key={className} className="mb-12">
            <h3 className="text-3xl font-semibold mb-6">{className}</h3>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {courseList.map((course, index) => (
                <HoverEffect key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 * index }}
                    className="relative h-60 rounded-lg shadow-lg"
                  >
                    <img
                      src={course.img}
                      alt={course.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="relative z-10 p-4 bg-black bg-opacity-50 h-full flex flex-col justify-center">
                      <h4 className="text-xl font-semibold text-white mb-2">
                        {course.title}
                      </h4>
                      <p className="text-gray-200">{course.description}</p>
                      <button
                        onClick={() => handleDeleteCourse(className, index)}
                        className="bg-red-500 text-white px-2 py-1 rounded mt-2"
                      >
                        Delete
                      </button>
                    </div>
                  </motion.div>
                </HoverEffect>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdminCourses;
