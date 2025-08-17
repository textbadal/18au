import React, { useState } from 'react';
import './Agriculture.css'; // Import the CSS file for styling

const Agriculture = () => {
  // State to manage the selected role
  const [selectedRole, setSelectedRole] = useState('sustainableFarming');

  // Role-specific data
  const roles = {
    sustainableFarming: {
      title: 'Sustainable Farming Internship',
      description: 'Gain hands-on experience in sustainable farming practices, including organic farming, crop rotation, and soil health management.',
      image: '/images/sustainable-farming.jpg',
      details: {
        duration: '8 Weeks',
        stipend: '₹5000/month',
        location: 'On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Agriculture students or graduates with an interest in sustainable farming.',
        skills: ['Organic Farming', 'Crop Rotation', 'Soil Health Management', 'Water Conservation'],
        responsibilities: [
          'Assist in implementing sustainable farming practices.',
          'Conduct soil and water quality tests.',
          'Learn about organic farming techniques.',
          'Support in crop planning and management.',
        ],
      },
    },
    agriTech: {
      title: 'AgriTech Internship',
      description: 'Work on innovative agricultural technologies, including precision farming, IoT in agriculture, and drone-based crop monitoring.',
      image: '/images/agritech.jpg',
      details: {
        duration: '10 Weeks',
        stipend: '₹6000/month',
        location: 'Remote/On-site (Delhi, Bangalore, Hyderabad)',
        eligibility: 'Agriculture students or graduates with an interest in AgriTech.',
        skills: ['Precision Farming', 'IoT in Agriculture', 'Drone Technology', 'Data Analysis'],
        responsibilities: [
          'Assist in deploying IoT devices for farm monitoring.',
          'Analyze data from precision farming tools.',
          'Support in drone-based crop monitoring.',
          'Collaborate with teams to develop AgriTech solutions.',
        ],
      },
    },
    horticulture: {
      title: 'Horticulture Internship',
      description: 'Learn about the cultivation of fruits, vegetables, and ornamental plants, including greenhouse management and pest control.',
      image: '/images/horticulture.jpg',
      details: {
        duration: '6 Weeks',
        stipend: '₹4500/month',
        location: 'On-site (Delhi, Mumbai)',
        eligibility: 'Agriculture students or graduates with an interest in horticulture.',
        skills: ['Greenhouse Management', 'Pest Control', 'Plant Nutrition', 'Crop Cultivation'],
        responsibilities: [
          'Assist in greenhouse management and maintenance.',
          'Learn about pest control and plant nutrition.',
          'Support in the cultivation of fruits and vegetables.',
          'Conduct research on ornamental plants.',
        ],
      },
    },
    agroforestry: {
      title: 'Agroforestry Internship',
      description: 'Gain experience in integrating trees and shrubs into agricultural landscapes for environmental and economic benefits.',
      image: '/images/agroforestry.jpg',
      details: {
        duration: '8 Weeks',
        stipend: '₹5500/month',
        location: 'On-site (Delhi, Mumbai, Chennai)',
        eligibility: 'Agriculture students or graduates with an interest in agroforestry.',
        skills: ['Tree Planting', 'Soil Conservation', 'Biodiversity Management', 'Sustainable Land Use'],
        responsibilities: [
          'Assist in tree planting and maintenance.',
          'Learn about soil conservation techniques.',
          'Support in biodiversity management.',
          'Collaborate on sustainable land use projects.',
        ],
      },
    },
    foodProcessing: {
      title: 'Food Processing Internship',
      description: 'Work on food preservation, packaging, and quality control in the agriculture and food processing industry.',
      image: '/images/food-processing.jpg',
      details: {
        duration: '6 Weeks',
        stipend: '₹5000/month',
        location: 'On-site (Delhi, Mumbai)',
        eligibility: 'Agriculture students or graduates with an interest in food processing.',
        skills: ['Food Preservation', 'Packaging', 'Quality Control', 'Supply Chain Management'],
        responsibilities: [
          'Assist in food preservation and packaging.',
          'Conduct quality control checks.',
          'Learn about supply chain management.',
          'Support in developing food processing techniques.',
        ],
      },
    },
  };

  // Testimonials data
  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Sustainable Farming Intern',
      testimonial: 'This internship gave me practical exposure to sustainable farming. I worked on real projects and learned from industry experts. Highly recommended!',
      image: '/images/rahul.jpg',
    },
    {
      name: 'Priya Singh',
      role: 'AgriTech Intern',
      testimonial: 'I got the opportunity to work on innovative AgriTech solutions. The experience was eye-opening and helped me grow as a professional.',
      image: '/images/priya.jpg',
    },
    {
      name: 'Ankit Patel',
      role: 'Horticulture Intern',
      testimonial: 'Working on horticulture projects was an incredible learning experience. The mentorship was top-notch.',
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
      <h1>Agriculture Internship Program</h1>

      {/* Role Selection Dropdown */}
      <div className="role-selection">
        <label htmlFor="role">Select Role:</label>
        <select
          id="role"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="sustainableFarming">Sustainable Farming Intern</option>
          <option value="agriTech">AgriTech Intern</option>
          <option value="horticulture">Horticulture Intern</option>
          <option value="agroforestry">Agroforestry Intern</option>
          <option value="foodProcessing">Food Processing Intern</option>
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

export default Agriculture;