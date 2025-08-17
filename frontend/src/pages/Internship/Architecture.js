import React, { useState } from 'react';
import './Architecture.css'; // Import the CSS file for styling

const Architecture = () => {
  // State to manage the selected role
  const [selectedRole, setSelectedRole] = useState('architecturalDesign');

  // Role-specific data
  const roles = {
    architecturalDesign: {
      title: 'Architectural Design Internship',
      description: 'Gain hands-on experience in architectural design, including drafting, 3D modeling, and project planning.',
      image: '/images/architectural-design.jpg',
      details: {
        duration: '8 Weeks',
        stipend: '₹7000/month',
        location: 'On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Architecture students or graduates with an interest in architectural design.',
        skills: ['AutoCAD', 'SketchUp', '3D Modeling', 'Project Planning', 'Design Principles'],
        responsibilities: [
          'Assist in drafting architectural plans.',
          'Create 3D models using software like SketchUp and Revit.',
          'Support in project planning and design development.',
          'Collaborate with senior architects on design concepts.',
        ],
      },
    },
    urbanPlanning: {
      title: 'Urban Planning Internship',
      description: 'Work on urban planning projects, including city layouts, zoning, and sustainable development.',
      image: '/images/urban-planning.jpg',
      details: {
        duration: '10 Weeks',
        stipend: '₹8000/month',
        location: 'Remote/On-site (Delhi, Bangalore, Hyderabad)',
        eligibility: 'Architecture students or graduates with an interest in urban planning.',
        skills: ['GIS Mapping', 'Zoning Regulations', 'Sustainable Development', 'City Layouts', 'Public Spaces'],
        responsibilities: [
          'Assist in developing city layouts and zoning plans.',
          'Conduct research on sustainable urban development.',
          'Support in GIS mapping and data analysis.',
          'Collaborate on public space design projects.',
        ],
      },
    },
    interiorDesign: {
      title: 'Interior Design Internship',
      description: 'Learn about interior design, including space planning, material selection, and client presentations.',
      image: '/images/interior-design.jpg',
      details: {
        duration: '6 Weeks',
        stipend: '₹6000/month',
        location: 'On-site (Delhi, Mumbai)',
        eligibility: 'Architecture students or graduates with an interest in interior design.',
        skills: ['Space Planning', 'Material Selection', 'Client Presentations', '3D Rendering', 'Color Theory'],
        responsibilities: [
          'Assist in space planning and layout design.',
          'Select materials and finishes for interior projects.',
          'Prepare client presentations and 3D renderings.',
          'Collaborate with senior designers on projects.',
        ],
      },
    },
    landscapeArchitecture: {
      title: 'Landscape Architecture Internship',
      description: 'Gain experience in designing outdoor spaces, including parks, gardens, and public areas.',
      image: '/images/landscape-architecture.jpg',
      details: {
        duration: '8 Weeks',
        stipend: '₹7500/month',
        location: 'On-site (Delhi, Mumbai, Chennai)',
        eligibility: 'Architecture students or graduates with an interest in landscape architecture.',
        skills: ['Site Analysis', 'Plant Selection', 'Hardscape Design', 'Sustainable Landscaping', '3D Modeling'],
        responsibilities: [
          'Assist in site analysis and design development.',
          'Select plants and materials for landscape projects.',
          'Design hardscape elements like pathways and water features.',
          'Collaborate on sustainable landscaping projects.',
        ],
      },
    },
    constructionManagement: {
      title: 'Construction Management Internship',
      description: 'Work on construction projects, including site supervision, budgeting, and project coordination.',
      image: '/images/construction-management.jpg',
      details: {
        duration: '12 Weeks',
        stipend: '₹9000/month',
        location: 'On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Architecture students or graduates with an interest in construction management.',
        skills: ['Site Supervision', 'Budgeting', 'Project Coordination', 'Quality Control', 'Safety Regulations'],
        responsibilities: [
          'Assist in site supervision and project coordination.',
          'Monitor budgets and timelines for construction projects.',
          'Ensure quality control and compliance with safety regulations.',
          'Collaborate with contractors and stakeholders.',
        ],
      },
    },
  };

  // Testimonials data
  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Architectural Design Intern',
      testimonial: 'This internship gave me practical exposure to architectural design. I worked on real projects and learned from industry experts. Highly recommended!',
      image: '/images/rahul.jpg',
    },
    {
      name: 'Priya Singh',
      role: 'Urban Planning Intern',
      testimonial: 'I got the opportunity to work on urban planning projects. The experience was eye-opening and helped me grow as a professional.',
      image: '/images/priya.jpg',
    },
    {
      name: 'Ankit Patel',
      role: 'Interior Design Intern',
      testimonial: 'Working on interior design projects was an incredible learning experience. The mentorship was top-notch.',
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
      <h1>Architecture Internship Program</h1>

      {/* Role Selection Dropdown */}
      <div className="role-selection">
        <label htmlFor="role">Select Role:</label>
        <select
          id="role"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="architecturalDesign">Architectural Design Intern</option>
          <option value="urbanPlanning">Urban Planning Intern</option>
          <option value="interiorDesign">Interior Design Intern</option>
          <option value="landscapeArchitecture">Landscape Architecture Intern</option>
          <option value="constructionManagement">Construction Management Intern</option>
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

export default Architecture;