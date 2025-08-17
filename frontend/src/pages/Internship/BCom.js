import React, { useState } from 'react';
import './BCom.css'; // Import the CSS file for styling

const BCom = () => {
  // State to manage the selected role
  const [selectedRole, setSelectedRole] = useState('accounting');

  // Role-specific data
  const roles = {
    accounting: {
      title: 'Accounting Internship',
      description: 'Gain hands-on experience in accounting, financial reporting, and bookkeeping.',
      image: '/images/accounting.jpg',
      details: {
        duration: '8 Weeks',
        stipend: '₹7000/month',
        location: 'On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'BCom students or graduates with an interest in accounting.',
        skills: ['Bookkeeping', 'Financial Reporting', 'Tally', 'GST Filing', 'Excel'],
        responsibilities: [
          'Assist in maintaining financial records and ledgers.',
          'Prepare financial statements and reports.',
          'Support in GST filing and tax compliance.',
          'Collaborate with the accounting team on audits.',
        ],
      },
    },
    taxation: {
      title: 'Taxation Internship',
      description: 'Work on taxation-related tasks, including GST filing, tax planning, and compliance.',
      image: '/images/taxation.jpg',
      details: {
        duration: '10 Weeks',
        stipend: '₹8000/month',
        location: 'Remote/On-site (Delhi, Bangalore, Hyderabad)',
        eligibility: 'BCom students or graduates with an interest in taxation.',
        skills: ['GST Filing', 'Tax Planning', 'Compliance', 'Tally', 'Excel'],
        responsibilities: [
          'Assist in GST filing and tax compliance.',
          'Support in tax planning and advisory services.',
          'Prepare and file tax returns.',
          'Collaborate with the taxation team on client projects.',
        ],
      },
    },
    auditing: {
      title: 'Auditing Internship',
      description: 'Learn about auditing processes, internal controls, and financial compliance.',
      image: '/images/auditing.jpg',
      details: {
        duration: '6 Weeks',
        stipend: '₹6000/month',
        location: 'On-site (Delhi, Mumbai)',
        eligibility: 'BCom students or graduates with an interest in auditing.',
        skills: ['Auditing', 'Internal Controls', 'Financial Compliance', 'Risk Assessment', 'Excel'],
        responsibilities: [
          'Assist in conducting internal and external audits.',
          'Support in evaluating internal controls and processes.',
          'Prepare audit reports and documentation.',
          'Collaborate with the auditing team on client projects.',
        ],
      },
    },
    financialAnalysis: {
      title: 'Financial Analysis Internship',
      description: 'Gain experience in financial analysis, budgeting, and investment research.',
      image: '/images/financial-analysis.jpg',
      details: {
        duration: '8 Weeks',
        stipend: '₹7500/month',
        location: 'On-site (Delhi, Mumbai, Chennai)',
        eligibility: 'BCom students or graduates with an interest in financial analysis.',
        skills: ['Financial Analysis', 'Budgeting', 'Investment Research', 'Excel', 'Data Analysis'],
        responsibilities: [
          'Assist in financial analysis and forecasting.',
          'Support in budgeting and investment research.',
          'Analyze financial data and prepare reports.',
          'Collaborate with the finance team on projects.',
        ],
      },
    },
    bankingOperations: {
      title: 'Banking Operations Internship',
      description: 'Work on banking operations, including customer service, loan processing, and compliance.',
      image: '/images/banking.jpg',
      details: {
        duration: '12 Weeks',
        stipend: '₹9000/month',
        location: 'On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'BCom students or graduates with an interest in banking operations.',
        skills: ['Customer Service', 'Loan Processing', 'Compliance', 'Banking Software', 'Excel'],
        responsibilities: [
          'Assist in customer service and support.',
          'Support in loan processing and documentation.',
          'Ensure compliance with banking regulations.',
          'Collaborate with the banking operations team on projects.',
        ],
      },
    },
  };

  // Testimonials data
  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Accounting Intern',
      testimonial: 'This internship gave me practical exposure to accounting and financial reporting. I worked on real projects and learned from industry experts. Highly recommended!',
      image: '/images/rahul.jpg',
    },
    {
      name: 'Priya Singh',
      role: 'Taxation Intern',
      testimonial: 'I got the opportunity to work on GST filing and tax compliance. The experience was eye-opening and helped me grow as a professional.',
      image: '/images/priya.jpg',
    },
    {
      name: 'Ankit Patel',
      role: 'Auditing Intern',
      testimonial: 'Working on auditing projects was an incredible learning experience. The mentorship was top-notch.',
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
      <h1>BCom Internship Program</h1>

      {/* Role Selection Dropdown */}
      <div className="role-selection">
        <label htmlFor="role">Select Role:</label>
        <select
          id="role"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="accounting">Accounting Intern</option>
          <option value="taxation">Taxation Intern</option>
          <option value="auditing">Auditing Intern</option>
          <option value="financialAnalysis">Financial Analysis Intern</option>
          <option value="bankingOperations">Banking Operations Intern</option>
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

export default BCom;