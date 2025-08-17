import React, { useState } from 'react';
import './ElectricVehicle.css'; // Import CSS for styling
import { FaChevronDown, FaChevronUp, FaCheckCircle, FaQuestionCircle, FaClock, FaUser, FaStar } from 'react-icons/fa';

const ElectricVehicle = ({ courseDetails }) => {
  const defaultCourseDetails = {
    title: 'Electric Vehicle Course',
    description:
      'Learn about electric vehicles, battery technology, charging infrastructure, and sustainable mobility. This course covers EV fundamentals, power electronics, battery management, and industry trends.',
    image: '/images/electric-vehicle.jpg',
    oldPrice: '₹25,000',
    newPrice: '₹18,000',
    discount: '28% off',
    duration: '10 Weeks',
    instructor: {
      name: 'Dr. Rajesh Kumar',
      bio: 'Dr. Rajesh is a leading expert in electric mobility with over 15 years of experience in EV technology and renewable energy systems.',
      image: '/images/rajesh.jpg',
    },
    syllabus: [
      'Introduction to Electric Vehicles',
      'Battery Technology and Energy Storage',
      'Electric Motors and Power Electronics',
      'Charging Infrastructure and Grid Integration',
      'Autonomous and Connected EVs',
      'Sustainability and Future of EVs',
      'Final Project: EV System Design',
    ],
    benefits: [
      'Hands-on experience with EV components',
      'Guidance from industry professionals',
      'Certification upon completion',
      'Career opportunities in the EV sector',
      'Access to exclusive EV research papers',
    ],
    highlights: [
      '80+ hours of live training',
      'Real-world case studies',
      'Industry collaborations',
      'Lifetime access to materials',
    ],
    testimonials: [
      {
        name: 'Anjali Mehta',
        review: 'This course gave me a deep understanding of EV technology and helped me land a job in the industry.',
        rating: 5,
      },
      {
        name: 'Vikram Singh',
        review: 'Excellent course content and knowledgeable instructors. Highly recommended!',
        rating: 5,
      },
    ],
    faqs: [
      {
        question: 'Do I need prior knowledge of EVs?',
        answer: 'No prior experience is required, but a background in engineering or science is beneficial.',
      },
      {
        question: 'Will I receive a certificate?',
        answer: 'Yes, a certification is provided after successfully completing the course.',
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
                  <p>This module provides an in-depth understanding of <strong>{module}</strong>.</p>
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
          <a href="https://forms.gle/ElectricVehicleCourse" className="apply-button" target="_blank" rel="noopener noreferrer">Apply Now</a>
        </div>
      </div>
    </div>
  );
};

export default ElectricVehicle;
