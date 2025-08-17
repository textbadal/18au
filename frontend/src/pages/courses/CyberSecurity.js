import React, { useState } from 'react';
import './CyberSecurity.css'; // Import CSS for styling
import { FaChevronDown, FaChevronUp, FaCheckCircle, FaQuestionCircle, FaClock, FaUser, FaStar } from 'react-icons/fa';

const CyberSecurity = ({ courseDetails }) => {
  const defaultCourseDetails = {
    title: 'Cyber Security Course',
    description:
      'Learn the fundamentals of cyber security, ethical hacking, and protecting digital assets. This course covers network security, cryptography, penetration testing, and more.',
    image: '/images/cybersecurity.jpg',
    oldPrice: '₹25,000',
    newPrice: '₹18,000',
    discount: '28% off',
    duration: '10 Weeks',
    instructor: {
      name: 'Smriti Gupta',
      bio: 'Smriti is a certified ethical hacker with 8+ years of experience in cybersecurity, working with Fortune 500 companies.',
      image: '/images/instructor.jpg',
    },
    syllabus: [
      'Introduction to Cyber Security',
      'Network Security & Firewalls',
      'Cryptography & Data Protection',
      'Ethical Hacking Techniques',
      'Penetration Testing Fundamentals',
      'Incident Response & Threat Management',
      'Cyber Security Compliance & Laws',
      'Final Project: Security Audit & Report',
    ],
    benefits: [
      'Hands-on penetration testing labs',
      'Expert guidance from industry professionals',
      'Cybersecurity certification upon completion',
      'Flexible online/offline learning modes',
      'Access to exclusive security tools & resources',
    ],
    highlights: [
      '80+ hours of live sessions',
      'Real-world hacking simulations',
      'Lifetime access to learning materials',
      'Certificate of completion',
    ],
    testimonials: [
      {
        name: 'Mark Wilson',
        review: 'This course gave me practical experience in penetration testing. The labs were amazing!',
        rating: 5,
      },
      {
        name: 'Emily Davis',
        review: 'Great course with excellent instructors. It really helped me build my career in cybersecurity.',
        rating: 5,
      },
    ],
    faqs: [
      {
        question: 'Do I need prior coding experience?',
        answer: 'Basic programming knowledge is helpful but not mandatory for this course.',
      },
      {
        question: 'Is this course suitable for beginners?',
        answer: 'Yes, this course is designed for both beginners and professionals looking to upskill.',
      },
      {
        question: 'Will I receive a certification?',
        answer: 'Yes, you will receive a certificate upon successful course completion.',
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
                  <p>This module covers in-depth knowledge of <strong>{module}</strong> with hands-on exercises.</p>
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
          <a href="https://forms.gle/CyNWzPZKSHjGg6Nv7" className="apply-button" target="_blank" rel="noopener noreferrer">Apply Now</a>
        </div>
      </div>
    </div>
  );
};

export default CyberSecurity;
