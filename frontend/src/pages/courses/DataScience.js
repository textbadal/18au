import React, { useState } from 'react';
import './DataScience.css'; // Import CSS for styling
import { FaChevronDown, FaChevronUp, FaCheckCircle, FaQuestionCircle, FaClock, FaUser, FaStar } from 'react-icons/fa'; // Icons for dropdown and benefits

const DataScience = ({ courseDetails }) => {
  // Default course details (can be overridden by props)
  const defaultCourseDetails = {
    title: 'Data Science Course',
    description:
      'Master Data Science and learn to analyze, visualize, and interpret complex data. This course covers essential tools, algorithms, and workflows to help you become proficient in Data Science.',
    image: '/images/datascience.jpg', // Path to the course image
    oldPrice: '₹25,000',
    newPrice: '₹18,000',
    discount: '28% off', // Optional discount
    duration: '12 Weeks',
    instructor: {
      name: 'Rashi Singh',
      bio: 'Rashi is a certified Data Scientist with over 10 years of experience in data analysis, machine learning, and AI. He has worked on numerous high-profile projects.',
      image: '/images/instructor.jpg',
    },
    syllabus: [
      'Introduction to Data Science',
      'Python for Data Science',
      'Data Wrangling and Cleaning',
      'Exploratory Data Analysis (EDA)',
      'Statistical Analysis',
      'Machine Learning Basics',
      'Supervised Learning',
      'Unsupervised Learning',
      'Deep Learning',
      'Data Visualization',
      'Final Project: End-to-End Data Science Project',
    ],
    benefits: [
      'Hands-on projects to build a professional portfolio',
      'Learn from industry experts with real-world experience',
      'Get certified and enhance your career prospects',
      'Flexible learning options (online/offline)',
      '24/7 support and access to course materials',
    ],
    highlights: [
      '100+ hours of live classes',
      '20+ hands-on projects',
      'Lifetime access to course materials',
      'Certificate of completion',
    ],
    testimonials: [
      {
        name: 'Rajesh Raj',
        review: 'This course helped me transition into a Data Scientist role. The hands-on projects were incredibly useful!',
        rating: 5,
      },
      {
        name: 'Rohan Jha',
        review: 'The instructors are amazing, and the course content is well-structured. Highly recommended!',
        rating: 5,
      },
    ],
    faqs: [
      {
        question: 'What are the prerequisites for this course?',
        answer: 'Basic programming knowledge is recommended, but beginners are welcome!',
      },
      {
        question: 'How long is the course?',
        answer: 'The course is 12 weeks long, with 6 hours of classes per week.',
      },
      {
        question: 'Will I get a certificate after completing the course?',
        answer: 'Yes, you will receive a certificate upon successful completion of the course.',
      },
    ],
  };

  // Use props if provided, otherwise use default course details
  const course = courseDetails || defaultCourseDetails;

  // State to manage dropdowns for course content
  const [expandedModule, setExpandedModule] = useState(null);

  const toggleModule = (index) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  return (
    <div className="course-details">
      {/* Course Heading */}
      <h1>{course.title}</h1>

      {/* Course Image */}
      <img src={course.image} alt={course.title} className="course-image" />

      {/* Course Description */}
      <div className="course-info">
        <h2>About the Course</h2>
        <p>{course.description}</p>

        {/* Price Tag */}
        <div className="price-tag">
          <h3>
            <span className="old-price">{course.oldPrice}</span>
            <span className="new-price">{course.newPrice}</span>
          </h3>
          {course.discount && (
            <p className="discount">Special Offer: <span>{course.discount}</span></p>
          )}
        </div>

        {/* Course Duration */}
        <div className="course-duration">
          <FaClock className="duration-icon" />
          <p>Duration: <strong>{course.duration}</strong></p>
        </div>

        {/* Instructor Details */}
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

        {/* Course Highlights */}
        <h3>Course Highlights</h3>
        <ul className="highlights-list">
          {course.highlights.map((highlight, index) => (
            <li key={index}>
              <FaCheckCircle className="highlight-icon" /> {highlight}
            </li>
          ))}
        </ul>

        {/* Course Content with Dropdowns */}
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
                  <p>
                    This module covers in-depth knowledge of <strong>{module}</strong>. You will learn through hands-on
                    projects and assignments.
                  </p>
                  <ul>
                    <li>Video Lectures</li>
                    <li>Quizzes</li>
                    <li>Assignments</li>
                    <li>Project Work</li>
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Benefits */}
        <h3>Benefits</h3>
        <ul className="benefits-list">
          {course.benefits.map((benefit, index) => (
            <li key={index}>
              <FaCheckCircle className="benefit-icon" /> {benefit}
            </li>
          ))}
        </ul>

        {/* Testimonials */}
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

        {/* FAQs */}
        <h3>FAQs</h3>
        <div className="faqs">
          {course.faqs.map((faq, index) => (
            <div key={index} className="faq">
              <h4><FaQuestionCircle className="faq-icon" /> {faq.question}</h4>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* Apply and Payment Buttons */}
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

export default DataScience;