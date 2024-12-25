"use client";
import React, { useState } from "react";
import AdminCourses from "./AdminCourses"; // Import AdminCourses as the default export

export function AdminPanel() {
  const [currentView, setCurrentView] = useState("home"); // State to track the current view

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Admin Panel Home */}
      {currentView === "home" && (
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold mb-8">Admin Panel</h1>
          <button
            onClick={() => setCurrentView("courses")} // Navigate to Courses Management
            className="bg-blue-500 text-white px-6 mr-3 py-3 rounded shadow hover:bg-blue-600"
          >
            Courses Data
          </button>
          <button
            onClick={() => alert("Button 2 Functionality - Coming Soon!")} // Placeholder for Button 2
            className="bg-green-500 text-white px-6 mr-3 py-3 rounded shadow hover:bg-green-600"
          >
            Students Data
          </button>
          <button
            onClick={() => alert("Button 3 Functionality - Coming Soon!")} // Placeholder for Button 3
            className="bg-yellow-500 text-white px-6 mr-3 py-3 rounded shadow hover:bg-yellow-600"
          >
            Enquiry Data
          </button>
        </div>
      )}

      {/* Courses Management */}
      {currentView === "courses" && (
        <div className="w-full">
          {/* Back Button to Return to Admin Panel */}
          <button
            onClick={() => setCurrentView("home")}
            className="bg-gray-500 text-white px-4 py-2 rounded m-4 hover:bg-gray-600"
          >
            Back to Admin Panel
          </button>
          {/* Render AdminCourses Component */}
          <AdminCourses />
        </div>
      )}
    </div>
  );
}

export default AdminPanel;
