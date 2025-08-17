import React from 'react';
import './WebDevelopmentCourse.css';
const WebDevelopmentCourse = () => {
  return (
    <div className="course-details">
      <h1>Web Development Course</h1>
      <img src="/images/webdev.jpg" alt="Web Development" className="course-detail-image" />
      <div className="course-info">
        <h2>Course Overview</h2>
        <p>
          This comprehensive Web Development course is designed to take you from a beginner to a proficient web developer. You'll learn the fundamentals of HTML, CSS, JavaScript, and modern frameworks like React and Node.js.
        </p>
        <h3>What You'll Learn</h3>
        <ul>
          <li>HTML5 and CSS3 for building responsive websites</li>
          <li>JavaScript for interactive web applications</li>
          <li>React.js for building dynamic user interfaces</li>
          <li>Node.js and Express for backend development</li>
          <li>Database integration with MongoDB</li>
          <li>Deploying web applications to the cloud</li>
        </ul>
        <h3>Course Details</h3>
        <p><strong>Duration:</strong> 08 Weeks</p>
        <p><strong>Price:</strong> <span className="old-price">₹1499</span> <span className="new-price">₹899</span></p>
        <p><strong>Instructor:</strong> Shristi Shalini</p>
        <p><strong>Level:</strong> Beginner to Intermediate</p>
        <a href="/enroll/web-development" className="enroll-button">Enroll Now</a>
      </div>
    </div>
  );
};

export default WebDevelopmentCourse;