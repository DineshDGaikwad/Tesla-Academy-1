"use client";
import React, { useEffect, useState } from "react"; // Import React hooks
import { motion } from "framer-motion";

// HoverEffect Component for scaling and shadow effects on hover
const HoverEffect = ({ children }) => (
  <div className="relative overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
    {children}
  </div>
);

// Courses Component
export function Courses() {
  const [courses, setCourses] = useState({}); // State to hold fetched courses
  const [error, setError] = useState(null); // State to handle errors

  // Fetch courses from the API when the component mounts
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/courses"); // Fetch data from your backend
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();

        // Ensure data has the correct structure
        if (data && typeof data === 'object') {
          setCourses(data); // Set courses to the state
        } else {
          throw new Error("Fetched data is not in the expected format");
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
        setError(error.message); // Set error message in state
      }
    };

    fetchCourses();
  }, []);

  // Handle error state
  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  // Grouping courses by standard
  const groupedCourses = Object.entries(courses).reduce((acc, [className, courseList]) => {
    acc[className] = courseList; // Directly assign the courses to the className
    return acc;
  }, {});

  return (
    <section id="courses" className="py-12 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-10">COURSES</h2>
      <div className="container mx-auto px-4">
        {Object.entries(groupedCourses).map(([className, courseList]) => (
          <div key={className} className="mb-12">
            <h3 className="text-3xl font-semibold mb-6">{className}</h3>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-center">
              {courseList.map((course, index) => (
                <HoverEffect key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and y offset
                    animate={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
                    transition={{ duration: 0.5, delay: 0.2 * index }} // Incremental delay for each course
                    className={`relative h-60 overflow-hidden rounded-lg shadow-lg ${
                      index === 3 || index === 4 ? "lg:col-span-2" : "lg:col-span-1"
                    }`}
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
}

export default Courses;
