import React from 'react';
import './RevitCourse.css'; // Ensure you create a CSS file for Revit Course

const Revit = () => {
  return (
    <div className="course-details">
      <h1>Revit Course</h1>
      <img src="/images/revit.jpg" alt="Revit" className="course-detail-image" />
      <div className="course-info">
        <h2>Course Overview</h2>
        <p>
          This comprehensive Revit course is designed to take you from a beginner to a proficient user of Autodesk Revit. You'll learn the fundamentals of Building Information Modeling (BIM), creating architectural designs, and collaborating on construction projects.
        </p>
        <h3>What You'll Learn</h3>
        <ul>
          <li>Introduction to BIM and Revit</li>
          <li>Creating architectural designs and models</li>
          <li>Working with walls, floors, roofs, and ceilings</li>
          <li>Adding doors, windows, and other components</li>
          <li>Creating and managing views and sheets</li>
          <li>Collaborating with teams using Revit</li>
        </ul>
        <h3>Course Details</h3>
        <p><strong>Duration:</strong> 08 Weeks</p>
        <p><strong>Price:</strong> <span className="old-price">₹1499</span> <span className="new-price">₹899</span></p>
        <p><strong>Instructor:</strong> Risabh Singh</p>
        <p><strong>Level:</strong> Beginner to Intermediate</p>
        <a href="/enroll/revit" className="enroll-button">Enroll Now</a>
      </div>
    </div>
  );
};

export default Revit;