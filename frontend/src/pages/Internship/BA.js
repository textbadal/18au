import React, { useState } from 'react';
import './BA.css'; // Import the CSS file for styling

const BA = () => {
  // State to manage the selected role
  const [selectedRole, setSelectedRole] = useState('businessAnalysis');

  // Role-specific data
  const roles = {
    businessAnalysis: {
      title: 'Business Analyst Internship',
      description: 'Gain hands-on experience in business analysis, including requirements gathering, data analysis, and process improvement.',
      image: '/images/business-analysis.jpg',
      details: {
        duration: '8 Weeks',
        stipend: '₹7000/month',
        location: 'On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Students or graduates with an interest in business analysis, management, or related fields.',
        skills: ['Requirements Gathering', 'Data Analysis', 'Process Improvement', 'Stakeholder Management', 'Business Modeling'],
        responsibilities: [
          'Assist in gathering and documenting business requirements.',
          'Analyze data to identify trends and insights.',
          'Support process improvement initiatives.',
          'Collaborate with stakeholders to understand business needs.',
        ],
      },
    },
    dataAnalysis: {
      title: 'Data Analysis Internship',
      description: 'Work on data analysis projects, including data cleaning, visualization, and reporting.',
      image: '/images/data-analysis.jpg',
      details: {
        duration: '10 Weeks',
        stipend: '₹8000/month',
        location: 'Remote/On-site (Delhi, Bangalore, Hyderabad)',
        eligibility: 'Students or graduates with an interest in data analysis, statistics, or related fields.',
        skills: ['Data Cleaning', 'Data Visualization', 'Statistical Analysis', 'Excel', 'SQL'],
        responsibilities: [
          'Clean and preprocess data for analysis.',
          'Create data visualizations and reports.',
          'Perform statistical analysis to derive insights.',
          'Collaborate with teams to present findings.',
        ],
      },
    },
    financialAnalysis: {
      title: 'Financial Analysis Internship',
      description: 'Learn about financial analysis, including budgeting, forecasting, and financial modeling.',
      image: '/images/financial-analysis.jpg',
      details: {
        duration: '6 Weeks',
        stipend: '₹6000/month',
        location: 'On-site (Delhi, Mumbai)',
        eligibility: 'Students or graduates with an interest in finance, accounting, or related fields.',
        skills: ['Budgeting', 'Forecasting', 'Financial Modeling', 'Excel', 'Financial Reporting'],
        responsibilities: [
          'Assist in budgeting and forecasting activities.',
          'Develop financial models and reports.',
          'Analyze financial data to support decision-making.',
          'Collaborate with finance teams on projects.',
        ],
      },
    },
    marketResearch: {
      title: 'Market Research Internship',
      description: 'Gain experience in market research, including data collection, analysis, and reporting.',
      image: '/images/market-research.jpg',
      details: {
        duration: '8 Weeks',
        stipend: '₹7500/month',
        location: 'On-site (Delhi, Mumbai, Chennai)',
        eligibility: 'Students or graduates with an interest in market research, marketing, or related fields.',
        skills: ['Data Collection', 'Survey Design', 'Data Analysis', 'Market Trends', 'Reporting'],
        responsibilities: [
          'Collect and analyze market data.',
          'Design and conduct surveys.',
          'Identify market trends and insights.',
          'Prepare reports and presentations.',
        ],
      },
    },
    productManagement: {
      title: 'Product Management Internship',
      description: 'Work on product management tasks, including product planning, roadmaps, and stakeholder communication.',
      image: '/images/product-management.jpg',
      details: {
        duration: '12 Weeks',
        stipend: '₹9000/month',
        location: 'On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Students or graduates with an interest in product management, business, or related fields.',
        skills: ['Product Planning', 'Roadmap Development', 'Stakeholder Communication', 'Agile Methodologies', 'Market Analysis'],
        responsibilities: [
          'Assist in product planning and roadmap development.',
          'Communicate with stakeholders to gather requirements.',
          'Support Agile development processes.',
          'Conduct market analysis to inform product decisions.',
        ],
      },
    },
  };

  // Testimonials data
  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Business Analyst Intern',
      testimonial: 'This internship gave me practical exposure to business analysis. I worked on real projects and learned from industry experts. Highly recommended!',
      image: '/images/rahul.jpg',
    },
    {
      name: 'Priya Singh',
      role: 'Data Analysis Intern',
      testimonial: 'I got the opportunity to work on data analysis projects. The experience was eye-opening and helped me grow as a professional.',
      image: '/images/priya.jpg',
    },
    {
      name: 'Ankit Patel',
      role: 'Financial Analysis Intern',
      testimonial: 'Working on financial analysis projects was an incredible learning experience. The mentorship was top-notch.',
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
      <h1>Business Analyst Internship Program</h1>

      {/* Role Selection Dropdown */}
      <div className="role-selection">
        <label htmlFor="role">Select Role:</label>
        <select
          id="role"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="businessAnalysis">Business Analyst Intern</option>
          <option value="dataAnalysis">Data Analysis Intern</option>
          <option value="financialAnalysis">Financial Analysis Intern</option>
          <option value="marketResearch">Market Research Intern</option>
          <option value="productManagement">Product Management Intern</option>
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

export default BA;