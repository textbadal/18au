import React, { useState } from 'react';
import './AdvancedExcel.css'; // Import CSS for styling
import { FaChevronDown, FaChevronUp, FaCheckCircle, FaQuestionCircle, FaClock, FaUser, FaStar } from 'react-icons/fa';

const AdvancedExcel = ({ courseDetails }) => {
  const defaultCourseDetails = {
    title: 'Advanced Excel Course',
    description:
      'Master Excel for data analysis, reporting, and automation. Learn advanced formulas, pivot tables, VBA macros, and data visualization techniques.',
    image: '/images/excel.jpg',
    oldPrice: '₹15,000',
    newPrice: '₹10,000',
    discount: '33% off',
    duration: '8 Weeks',
    instructor: {
      name: 'Sushant Singh',
      bio: 'Sushant Singh is an Excel expert with over 8 years of experience in data analytics and financial modeling.',
      image: '/images/Jane.jpg',
    },
    syllabus: [
      'Excel Basics and Shortcuts',
      'Advanced Formulas and Functions',
      'Pivot Tables and Data Analysis',
      'Data Visualization with Charts',
      'Automation with VBA Macros',
      'Financial Modeling Techniques',
      'Data Cleaning and Power Query',
      'Excel Dashboards and Reporting',
    ],
    benefits: [
      'Hands-on projects for real-world applications',
      'Learn from industry professionals',
      'Certification upon completion',
      'Flexible online/offline learning',
      'Lifetime access to course materials',
    ],
    highlights: [
      '50+ hours of live training',
      '10+ real-world projects',
      'Excel automation with VBA',
      'Expert mentorship and support',
    ],
    testimonials: [
      {
        name: 'David Smith',
        review: 'This course transformed the way I work with Excel. The VBA automation lessons were game-changing!',
        rating: 5,
      },
      {
        name: 'Emily Johnson',
        review: 'The instructor explained complex concepts in a simple way. Highly recommended for Excel users!',
        rating: 5,
      },
    ],
    faqs: [
      {
        question: 'Do I need prior Excel experience?',
        answer: 'Basic Excel knowledge is recommended, but not required.',
      },
      {
        question: 'Will I receive a certificate?',
        answer: 'Yes, a certificate will be provided after course completion.',
      },
    ],
  };

  const course = courseDetails || defaultCourseDetails;
  const [expandedModule, setExpandedModule] = useState(null);
  const toggleModule = (index) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  return (
    <div className="course-details">
      <h1>{course.title}</h1>
      <img src={course.image} alt={course.title} className="course-image" />
      <div className="course-info">
        <h2>About the Course</h2>
        <p>{course.description}</p>
        <div className="price-tag">
          <h3>
            <span className="old-price">{course.oldPrice}</span>
            <span className="new-price">{course.newPrice}</span>
          </h3>
          {course.discount && <p className="discount">Special Offer: <span>{course.discount}</span></p>}
        </div>
        <div className="course-duration">
          <FaClock className="duration-icon" />
          <p>Duration: <strong>{course.duration}</strong></p>
        </div>
        <div className="instructor-details">
          <h3>Instructor</h3>
          <div className="instructor-info">
            <img src={course.instructor.image} alt={course.instructor.name} />
            <div>
              <h4>{course.instructor.name}</h4>
              <p>{course.instructor.bio}</p>
            </div>
          </div>
        </div>
        <h3>Course Highlights</h3>
        <ul className="highlights-list">
          {course.highlights.map((highlight, index) => (
            <li key={index}><FaCheckCircle className="highlight-icon" /> {highlight}</li>
          ))}
        </ul>
        <h3>Course Content</h3>
        <div className="course-content">
          {course.syllabus.map((module, index) => (
            <div key={index} className="module">
              <div className="module-header" onClick={() => toggleModule(index)}>
                <h4>{module}</h4>
                <span>{expandedModule === index ? <FaChevronUp /> : <FaChevronDown />}</span>
              </div>
              {expandedModule === index && (
                <div className="module-details">
                  <p>Deep dive into <strong>{module}</strong> with practical assignments and case studies.</p>
                  <ul>
                    <li>Video Tutorials</li>
                    <li>Hands-on Exercises</li>
                    <li>Quizzes & Assignments</li>
                    <li>Capstone Project</li>
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
        <h3>Benefits</h3>
        <ul className="benefits-list">
          {course.benefits.map((benefit, index) => (
            <li key={index}><FaCheckCircle className="benefit-icon" /> {benefit}</li>
          ))}
        </ul>
        <h3>Testimonials</h3>
        <div className="testimonials">
          {course.testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <p>"{testimonial.review}"</p>
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="star-icon" />
                ))}
              </div>
              <h4>- {testimonial.name}</h4>
            </div>
          ))}
        </div>
        <h3>FAQs</h3>
        <div className="faqs">
          {course.faqs.map((faq, index) => (
            <div key={index} className="faq">
              <h4><FaQuestionCircle className="faq-icon" /> {faq.question}</h4>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
        <div className="action-buttons">
          <a
            href="https://forms.gle/CyNWzPZKSHjGg6Nv7"
            className="apply-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdvancedExcel;
