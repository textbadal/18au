import React, { useState } from 'react';
import './BBA.css'; // Import the CSS file for styling

const BBA = () => {
  // State to manage the selected role
  const [selectedRole, setSelectedRole] = useState('marketing');

  // Role-specific data
  const roles = {
    marketing: {
      title: 'Marketing Internship',
      description: 'Gain hands-on experience in marketing strategies, digital marketing, and market research.',
      image: '/images/marketing.jpg',
      details: {
        duration: '8 Weeks',
        stipend: '₹7000/month',
        location: 'On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'BBA students or graduates with an interest in marketing.',
        skills: ['Digital Marketing', 'Market Research', 'SEO', 'Content Creation', 'Social Media Management'],
        responsibilities: [
          'Assist in developing marketing strategies.',
          'Conduct market research and analyze data.',
          'Create content for social media platforms.',
          'Support in SEO and digital marketing campaigns.',
        ],
      },
    },
    finance: {
      title: 'Finance Internship',
      description: 'Work on financial analysis, budgeting, and financial reporting.',
      image: '/images/finance.jpg',
      details: {
        duration: '10 Weeks',
        stipend: '₹8000/month',
        location: 'Remote/On-site (Delhi, Bangalore, Hyderabad)',
        eligibility: 'BBA students or graduates with an interest in finance.',
        skills: ['Financial Analysis', 'Budgeting', 'Financial Reporting', 'Excel', 'Data Analysis'],
        responsibilities: [
          'Assist in financial analysis and reporting.',
          'Support in budgeting and forecasting.',
          'Analyze financial data and prepare reports.',
          'Collaborate with the finance team on projects.',
        ],
      },
    },
    humanResources: {
      title: 'Human Resources Internship',
      description: 'Learn about recruitment, employee engagement, and HR policies.',
      image: '/images/hr.jpg',
      details: {
        duration: '6 Weeks',
        stipend: '₹6000/month',
        location: 'On-site (Delhi, Mumbai)',
        eligibility: 'BBA students or graduates with an interest in human resources.',
        skills: ['Recruitment', 'Employee Engagement', 'HR Policies', 'Communication', 'Conflict Resolution'],
        responsibilities: [
          'Assist in recruitment and onboarding processes.',
          'Support in employee engagement activities.',
          'Learn and implement HR policies.',
          'Collaborate with the HR team on various projects.',
        ],
      },
    },
    operations: {
      title: 'Operations Internship',
      description: 'Gain experience in supply chain management, process optimization, and project management.',
      image: '/images/operations.jpg',
      details: {
        duration: '8 Weeks',
        stipend: '₹7500/month',
        location: 'On-site (Delhi, Mumbai, Chennai)',
        eligibility: 'BBA students or graduates with an interest in operations management.',
        skills: ['Supply Chain Management', 'Process Optimization', 'Project Management', 'Logistics', 'Data Analysis'],
        responsibilities: [
          'Assist in supply chain management and logistics.',
          'Support in process optimization projects.',
          'Analyze operational data and prepare reports.',
          'Collaborate with the operations team on various projects.',
        ],
      },
    },
    businessDevelopment: {
      title: 'Business Development Internship',
      description: 'Work on business growth strategies, client acquisition, and market expansion.',
      image: '/images/business-development.jpg',
      details: {
        duration: '12 Weeks',
        stipend: '₹9000/month',
        location: 'On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'BBA students or graduates with an interest in business development.',
        skills: ['Business Strategy', 'Client Acquisition', 'Market Research', 'Negotiation', 'Sales'],
        responsibilities: [
          'Assist in developing business growth strategies.',
          'Support in client acquisition and market expansion.',
          'Conduct market research and competitor analysis.',
          'Collaborate with the business development team on projects.',
        ],
      },
    },
  };

  // Testimonials data
  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Marketing Intern',
      testimonial: 'This internship gave me practical exposure to marketing strategies. I worked on real campaigns and learned from industry experts. Highly recommended!',
      image: '/images/rahul.jpg',
    },
    {
      name: 'Priya Singh',
      role: 'Finance Intern',
      testimonial: 'I got the opportunity to work on financial analysis and reporting. The experience was eye-opening and helped me grow as a professional.',
      image: '/images/priya.jpg',
    },
    {
      name: 'Ankit Patel',
      role: 'HR Intern',
      testimonial: 'Working on HR projects was an incredible learning experience. The mentorship was top-notch.',
      image: '/images/ankit.jpg',
    },
  ];

  // Certificate sample image
  const offerSample = '/images/Offer.WebP';
  const certificateSample = '/images/certification.WebP';

  // Get the selected role data
  const roleData = roles[selectedRole];

  return (
    <div className="internship-details">
      {/* Heading */}
      <h1>BBA Internship Program</h1>

      {/* Role Selection Dropdown */}
      <div className="role-selection">
        <label htmlFor="role">Select Role:</label>
        <select
          id="role"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="marketing">Marketing Intern</option>
          <option value="finance">Finance Intern</option>
          <option value="humanResources">Human Resources Intern</option>
          <option value="operations">Operations Intern</option>
          <option value="businessDevelopment">Business Development Intern</option>
        </select>
      </div>

      {/* Image */}
      <img src={roleData.image} alt={roleData.title} className="internship-detail-image" />

      {/* Program Overview */}
      <div className="internship-info">
        <h2>{roleData.title}</h2>
        <p>{roleData.description}</p>

        {/* What You'll Gain */}
        <h3>What You'll Gain</h3>
        <ul>
          <li>Hands-on experience in {roleData.title.toLowerCase()}.</li>
          <li>Opportunity to work with experienced professionals.</li>
          <li>Networking with industry experts.</li>
          <li>Certificate of completion and recommendation letter.</li>
        </ul>

        {/* Program Details */}
        <h3>Program Details</h3>
        <div className="details-grid">
          <div><strong>Duration:</strong> {roleData.details.duration}</div>
          <div><strong>Stipend:</strong> <span className="stipend">{roleData.details.stipend}</span></div>
          <div><strong>Location:</strong> {roleData.details.location}</div>
          <div><strong>Eligibility:</strong> {roleData.details.eligibility}</div>
        </div>

        {/* Skills You'll Learn */}
        <h3>Skills You'll Learn</h3>
        <div className="skills-grid">
          {roleData.details.skills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill}
            </div>
          ))}
        </div>

        {/* Responsibilities */}
        <h3>Key Responsibilities</h3>
        <ul className="responsibilities-list">
          {roleData.details.responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>

        {/* Apply Button */}
        <a
          href="https://forms.gle/CyNWzPZKSHjGg6Nv7"
          className="apply-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apply Now
        </a>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h2>What Our Interns Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              <p className="testimonial-text">"{testimonial.testimonial}"</p>
              <p className="testimonial-name">{testimonial.name}</p>
              <p className="testimonial-role">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Sample Section */}
      <div className="certificate-section">
        <h2>Certificate Sample</h2>
        <img src={offerSample} alt="Offer Letter Sample" className="offer-sample" />
        <img src={certificateSample} alt="Certificate Sample" className="certificate-sample" />
      </div>
    </div>
  );
};

export default BBA;