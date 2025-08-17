import React, { useState } from 'react';
import './PythonProgramming.css'; // Import CSS for styling
import { FaChevronDown, FaChevronUp, FaCheckCircle, FaQuestionCircle, FaClock, FaUser, FaStar } from 'react-icons/fa';

const PythonProgramming = ({ courseDetails }) => {
  const defaultCourseDetails = {
    title: 'Python Programming Course',
    description:
      'Master Python programming from basics to advanced concepts, including data structures, algorithms, object-oriented programming, and web development with Django and Flask.',
    image: '/images/python.jpg',
    oldPrice: '₹15,000',
    newPrice: '₹10,000',
    discount: '33% off',
    duration: '10 Weeks',
    instructor: {
      name: 'Rakesh Yadav',
      bio: 'Rakesh is a software engineer with 8+ years of experience in Python development and data science.',
      image: '/images/Rakesh.jpg',
    },
    syllabus: [
      'Introduction to Python and Setup',
      'Data Types and Operators',
      'Control Flow and Functions',
      'Object-Oriented Programming',
      'Working with Modules and Packages',
      'File Handling and Exception Handling',
      'Web Development with Django & Flask',
      'Data Science Basics with Pandas & NumPy',
      'Machine Learning Introduction',
      'Final Project: Building a Python Application',
    ],
    benefits: [
      'Hands-on coding exercises and real-world projects',
      'Expert-led live sessions and recorded lectures',
      'Industry-recognized certification upon completion',
      'Access to exclusive Python coding challenges',
      '24/7 student support and mentorship',
    ],
    highlights: [
      '80+ hours of learning content',
      '10+ real-world projects',
      'Lifetime access to materials',
      'Certification on course completion',
    ],
    testimonials: [
      {
        name: 'Michael Smith',
        review: 'This course was a game-changer for me. I landed a Python developer job within weeks after completing it!',
        rating: 5,
      },
      {
        name: 'Emily Johnson',
        review: 'The instructors are excellent, and the hands-on projects helped me build confidence in coding.',
        rating: 5,
      },
    ],
    faqs: [
      {
        question: 'Do I need prior programming experience?',
        answer: 'No, this course is designed for beginners as well as experienced programmers.',
      },
      {
        question: 'Will I receive a certificate?',
        answer: 'Yes, a certificate will be awarded upon successfully completing the course.',
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
        <h3>Course Content</h3>
        <div className="course-content">
          {course.syllabus.map((module, index) => (
            <div key={index} className="module">
              <div className="module-header" onClick={() => toggleModule(index)}>
                <h4>{module}</h4>
                <span>{expandedModule === index ? <FaChevronUp /> : <FaChevronDown />}</span>
              </div>
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
                {[...Array(testimonial.rating)].map((_, i) => (<FaStar key={i} className="star-icon" />))}
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

export default PythonProgramming;
