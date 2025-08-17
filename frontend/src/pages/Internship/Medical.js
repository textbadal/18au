import React, { useState } from 'react';
import './Medical.css'; // Import the CSS file for styling

const Medical = () => {
  // State to manage the selected role
  const [selectedRole, setSelectedRole] = useState('clinicalResearch');

  // Role-specific data
  const roles = {
    clinicalResearch: {
      title: 'Clinical Research Internship',
      description: 'Gain hands-on experience in clinical research, including data collection, patient interaction, and research documentation.',
      image: '/images/clinical-research.jpg',
      details: {
        duration: '8 Weeks',
        stipend: '₹7000/month',
        location: 'On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Medical students or graduates with an interest in clinical research.',
        skills: ['Data Collection', 'Patient Interaction', 'Research Documentation', 'Clinical Trials', 'Ethical Guidelines'],
        responsibilities: [
          'Assist in data collection and analysis for clinical trials.',
          'Interact with patients and explain study protocols.',
          'Document research findings and maintain records.',
          'Ensure compliance with ethical guidelines and protocols.',
        ],
      },
    },
    hospitalAdministration: {
      title: 'Hospital Administration Internship',
      description: 'Work on hospital operations, including patient management, resource allocation, and administrative tasks.',
      image: '/images/hospital-administration.jpg',
      details: {
        duration: '10 Weeks',
        stipend: '₹8000/month',
        location: 'On-site (Delhi, Mumbai, Chennai)',
        eligibility: 'Students or graduates with an interest in healthcare management or hospital administration.',
        skills: ['Patient Management', 'Resource Allocation', 'Administrative Tasks', 'Healthcare Policies', 'Hospital Operations'],
        responsibilities: [
          'Assist in managing patient records and appointments.',
          'Coordinate resource allocation and hospital logistics.',
          'Support administrative tasks and policy implementation.',
          'Ensure smooth hospital operations and patient satisfaction.',
        ],
      },
    },
    medicalCoding: {
      title: 'Medical Coding Internship',
      description: 'Learn about medical coding, including ICD-10 coding, billing processes, and healthcare documentation.',
      image: '/images/medical-coding.jpg',
      details: {
        duration: '6 Weeks',
        stipend: '₹6000/month',
        location: 'Remote/On-site (Delhi, Mumbai)',
        eligibility: 'Students or graduates with an interest in medical coding, billing, or healthcare documentation.',
        skills: ['ICD-10 Coding', 'Billing Processes', 'Healthcare Documentation', 'Medical Terminology', 'Data Accuracy'],
        responsibilities: [
          'Assist in coding medical diagnoses and procedures.',
          'Support billing and insurance claim processes.',
          'Maintain accurate healthcare documentation.',
          'Ensure compliance with coding standards and regulations.',
        ],
      },
    },
    publicHealth: {
      title: 'Public Health Internship',
      description: 'Gain experience in public health initiatives, including community health programs, data analysis, and health education.',
      image: '/images/public-health.jpg',
      details: {
        duration: '8 Weeks',
        stipend: '₹7500/month',
        location: 'On-site (Delhi, Mumbai, Kolkata)',
        eligibility: 'Students or graduates with an interest in public health, community health, or related fields.',
        skills: ['Community Health Programs', 'Data Analysis', 'Health Education', 'Epidemiology', 'Public Health Policies'],
        responsibilities: [
          'Assist in implementing community health programs.',
          'Analyze public health data and trends.',
          'Conduct health education and awareness campaigns.',
          'Support public health policy development and implementation.',
        ],
      },
    },
    medicalWriting: {
      title: 'Medical Writing Internship',
      description: 'Work on medical writing projects, including research papers, case studies, and healthcare content creation.',
      image: '/images/medical-writing.jpg',
      details: {
        duration: '12 Weeks',
        stipend: '₹9000/month',
        location: 'Remote/On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Students or graduates with an interest in medical writing, research, or healthcare communication.',
        skills: ['Research Writing', 'Case Studies', 'Healthcare Content Creation', 'Scientific Communication', 'Editing'],
        responsibilities: [
          'Assist in writing research papers and case studies.',
          'Create healthcare-related content for various platforms.',
          'Edit and proofread medical documents.',
          'Collaborate with researchers and healthcare professionals.',
        ],
      },
    },
  };

  // Testimonials data
  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Clinical Research Intern',
      testimonial: 'This internship gave me practical exposure to clinical research. I worked on real projects and learned from industry experts. Highly recommended!',
      image: '/images/rahul.jpg',
    },
    {
      name: 'Priya Singh',
      role: 'Hospital Administration Intern',
      testimonial: 'I got the opportunity to work on hospital operations. The experience was eye-opening and helped me grow as a professional.',
      image: '/images/priya.jpg',
    },
    {
      name: 'Ankit Patel',
      role: 'Medical Coding Intern',
      testimonial: 'Working on medical coding projects was an incredible learning experience. The mentorship was top-notch.',
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
      <h1>Medical Internship Program</h1>

      {/* Role Selection Dropdown */}
      <div className="role-selection">
        <label htmlFor="role">Select Role:</label>
        <select
          id="role"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="clinicalResearch">Clinical Research Intern</option>
          <option value="hospitalAdministration">Hospital Administration Intern</option>
          <option value="medicalCoding">Medical Coding Intern</option>
          <option value="publicHealth">Public Health Intern</option>
          <option value="medicalWriting">Medical Writing Intern</option>
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

export default Medical;