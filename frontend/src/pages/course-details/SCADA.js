import React from 'react';
import './Revit'; // Ensure you create a CSS file for SCADA Course

const SCADA = () => {
  return (
    <div className="course-details">
      <h1>SCADA Course</h1>
      <img src="/images/scada.jpg" alt="SCADA" className="course-detail-image" />
      <div className="course-info">
        <h2>Course Overview</h2>
        <p>
          This comprehensive SCADA course is designed to provide you with a deep understanding of Supervisory Control and Data Acquisition systems. You'll learn how to design, implement, and manage SCADA systems for industrial automation and process control.
        </p>
        <h3>What You'll Learn</h3>
        <ul>
          <li>Introduction to SCADA systems and their applications</li>
          <li>SCADA architecture and components</li>
          <li>Programming and configuring SCADA software</li>
          <li>Data acquisition and real-time monitoring</li>
          <li>Integration with PLCs and other industrial devices</li>
          <li>Troubleshooting and maintaining SCADA systems</li>
        </ul>
        <h3>Course Details</h3>
        <p><strong>Duration:</strong> 08 Weeks</p>
        <p><strong>Price:</strong> <span className="old-price">₹1499</span> <span className="new-price">₹899</span></p>
        <p><strong>Instructor:</strong> Michael Brown</p>
        <p><strong>Level:</strong> Beginner to Intermediate</p>
        <a href="/enroll/scada" className="enroll-button">Enroll Now</a>
      </div>
    </div>
  );
};

export default SCADA;