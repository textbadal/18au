import React, { useState } from 'react';
import './Pharmacy.css'; // Import the CSS file for styling

const Pharmacy = () => {
  // State to manage the selected role
  const [selectedRole, setSelectedRole] = useState('clinicalPharmacy');

  // Role-specific data
  const roles = {
    clinicalPharmacy: {
      title: 'Clinical Pharmacy Internship',
      description: 'Gain hands-on experience in clinical pharmacy, patient care, and medication management.',
      image: '/images/clinical-pharmacy.jpg',
      details: {
        duration: '8 Weeks',
        stipend: '₹7000/month',
        location: 'On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Pharmacy students or graduates with an interest in clinical pharmacy.',
        skills: ['Patient Care', 'Medication Management', 'Drug Interactions', 'Pharmacotherapy', 'Clinical Research'],
        responsibilities: [
          'Assist in patient care and medication management.',
          'Support in monitoring drug interactions and side effects.',
          'Collaborate with healthcare professionals on pharmacotherapy.',
          'Participate in clinical research and data collection.',
        ],
      },
    },
    pharmaceuticalResearch: {
      title: 'Pharmaceutical Research Internship',
      description: 'Work on drug development, clinical trials, and pharmaceutical research.',
      image: '/images/pharma-research.jpg',
      details: {
        duration: '10 Weeks',
        stipend: '₹8000/month',
        location: 'On-site (Delhi, Mumbai, Hyderabad)',
        eligibility: 'Pharmacy students or graduates with an interest in pharmaceutical research.',
        skills: ['Drug Development', 'Clinical Trials', 'Data Analysis', 'Regulatory Compliance', 'Laboratory Techniques'],
        responsibilities: [
          'Assist in drug development and formulation.',
          'Support in conducting clinical trials and data analysis.',
          'Ensure compliance with regulatory standards.',
          'Collaborate with research teams on projects.',
        ],
      },
    },
    hospitalPharmacy: {
      title: 'Hospital Pharmacy Internship',
      description: 'Learn about hospital pharmacy operations, inventory management, and patient counseling.',
      image: '/images/hospital-pharmacy.jpg',
      details: {
        duration: '6 Weeks',
        stipend: '₹6000/month',
        location: 'On-site (Delhi, Mumbai)',
        eligibility: 'Pharmacy students or graduates with an interest in hospital pharmacy.',
        skills: ['Inventory Management', 'Patient Counseling', 'Medication Dispensing', 'Pharmacy Operations', 'Drug Safety'],
        responsibilities: [
          'Assist in medication dispensing and inventory management.',
          'Support in patient counseling and education.',
          'Ensure drug safety and proper storage.',
          'Collaborate with hospital pharmacy staff.',
        ],
      },
    },
    communityPharmacy: {
      title: 'Community Pharmacy Internship',
      description: 'Gain experience in community pharmacy, patient interaction, and over-the-counter medication advice.',
      image: '/images/community-pharmacy.jpg',
      details: {
        duration: '8 Weeks',
        stipend: '₹7500/month',
        location: 'On-site (Delhi, Mumbai, Chennai)',
        eligibility: 'Pharmacy students or graduates with an interest in community pharmacy.',
        skills: ['Patient Interaction', 'OTC Medication Advice', 'Prescription Handling', 'Health Promotion', 'Pharmacy Management'],
        responsibilities: [
          'Assist in handling prescriptions and OTC medications.',
          'Support in patient interaction and health promotion.',
          'Ensure proper pharmacy management and operations.',
          'Collaborate with community pharmacists.',
        ],
      },
    },
    regulatoryAffairs: {
      title: 'Regulatory Affairs Internship',
      description: 'Work on regulatory compliance, drug approval processes, and documentation.',
      image: '/images/regulatory-affairs.jpg',
      details: {
        duration: '12 Weeks',
        stipend: '₹9000/month',
        location: 'On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Pharmacy students or graduates with an interest in regulatory affairs.',
        skills: ['Regulatory Compliance', 'Drug Approval Processes', 'Documentation', 'Quality Assurance', 'Clinical Trials'],
        responsibilities: [
          'Assist in preparing regulatory submissions.',
          'Support in ensuring compliance with drug approval processes.',
          'Maintain documentation and quality assurance records.',
          'Collaborate with regulatory teams on projects.',
        ],
      },
    },
  };

  // Testimonials data
  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Clinical Pharmacy Intern',
      testimonial: 'This internship gave me practical exposure to patient care and medication management. I worked with healthcare professionals and learned a lot. Highly recommended!',
      image: '/images/rahul.jpg',
    },
    {
      name: 'Priya Singh',
      role: 'Pharmaceutical Research Intern',
      testimonial: 'I got the opportunity to work on drug development and clinical trials. The experience was eye-opening and helped me grow as a professional.',
      image: '/images/priya.jpg',
    },
    {
      name: 'Ankit Patel',
      role: 'Hospital Pharmacy Intern',
      testimonial: 'Working in a hospital pharmacy was an incredible learning experience. The mentorship was top-notch.',
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
      <h1>Pharmacy Internship Program</h1>

      {/* Role Selection Dropdown */}
      <div className="role-selection">
        <label htmlFor="role">Select Role:</label>
        <select
          id="role"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="clinicalPharmacy">Clinical Pharmacy Intern</option>
          <option value="pharmaceuticalResearch">Pharmaceutical Research Intern</option>
          <option value="hospitalPharmacy">Hospital Pharmacy Intern</option>
          <option value="communityPharmacy">Community Pharmacy Intern</option>
          <option value="regulatoryAffairs">Regulatory Affairs Intern</option>
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

export default Pharmacy;