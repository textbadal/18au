import React, { useState } from 'react';
import './SupplyChainLogistics.css'; // Import CSS for styling
import { FaChevronDown, FaChevronUp, FaCheckCircle, FaQuestionCircle, FaClock, FaUser, FaStar } from 'react-icons/fa';

const SupplyChainLogistics = ({ courseDetails }) => {
  const defaultCourseDetails = {
    title: 'Supply Chain & Logistics Course',
    description:
      'Master the fundamentals of supply chain management, logistics, and operations. Learn how to optimize supply chain processes, manage inventory, and implement best practices.',
    image: '/images/supplychain.jpg',
    oldPrice: '₹18,000',
    newPrice: '₹12,000',
    discount: '33% off',
    duration: '10 Weeks',
    instructor: {
      name: 'Dr. Rajesh Mehta',
      bio: 'Dr. Mehta has over 15 years of experience in supply chain management and logistics. He has worked with leading multinational companies.',
      image: '/images/instructor.jpg',
    },
    syllabus: [
      'Introduction to Supply Chain Management',
      'Logistics & Transportation Fundamentals',
      'Inventory and Warehouse Management',
      'Procurement and Vendor Management',
      'Supply Chain Analytics and Optimization',
      'Technology in Supply Chain (AI & Blockchain)',
      'Sustainability and Green Logistics',
      'Global Supply Chain Strategies',
      'Case Studies and Industry Applications',
      'Final Project: Supply Chain Optimization Plan',
    ],
    benefits: [
      'Hands-on case studies and real-world applications',
      'Learn from industry experts',
      'Certification upon completion',
      'Flexible learning schedule',
      'Access to course materials for a lifetime',
    ],
    highlights: [
      '80+ hours of expert training',
      '15+ real-world case studies',
      'Industry-recognized certification',
      'Job placement assistance',
    ],
    testimonials: [
      {
        name: 'Ravi Sharma',
        review: 'This course gave me practical insights into supply chain management. The case studies were very helpful.',
        rating: 5,
      },
      {
        name: 'Priya Kapoor',
        review: 'I highly recommend this course for anyone looking to build a career in logistics and supply chain.',
        rating: 5,
      },
    ],
    faqs: [
      {
        question: 'What are the prerequisites for this course?',
        answer: 'No prior experience is required, but basic business knowledge is helpful.',
      },
      {
        question: 'Will I receive a certificate upon completion?',
        answer: 'Yes, you will receive a recognized certification.',
      },
      {
        question: 'Is job assistance provided?',
        answer: 'Yes, we provide job placement assistance for top-performing students.',
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
                  <p>Deep dive into <strong>{module}</strong> with practical assignments.</p>
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
          <a href="https://forms.gle/xyz" className="apply-button" target="_blank" rel="noopener noreferrer">Apply Now</a>
        </div>
      </div>
    </div>
  );
};

export default SupplyChainLogistics;
