import React, { useState } from 'react';
import './Hospitality.css'; // Import the CSS file for styling

const Hospitality = () => {
  // State to manage the selected role
  const [selectedRole, setSelectedRole] = useState('hotelManagement');

  // Role-specific data
  const roles = {
    hotelManagement: {
      title: 'Hotel Management Internship',
      description: 'Gain hands-on experience in hotel operations, including front desk management, guest services, and hospitality operations.',
      image: '/images/hotel-management.jpg',
      details: {
        duration: '8 Weeks',
        stipend: '₹7000/month',
        location: 'On-site (Delhi, Mumbai, Goa)',
        eligibility: 'Students or graduates with an interest in hospitality, hotel management, or related fields.',
        skills: ['Front Desk Operations', 'Guest Services', 'Reservation Management', 'Hospitality Standards', 'Customer Relationship Management'],
        responsibilities: [
          'Assist in front desk operations and guest check-in/check-out.',
          'Manage reservations and room allocations.',
          'Provide exceptional guest services and handle inquiries.',
          'Ensure compliance with hospitality standards and protocols.',
        ],
      },
    },
    eventManagement: {
      title: 'Event Management Internship',
      description: 'Work on event planning and execution, including venue coordination, guest management, and logistics.',
      image: '/images/event-management.jpg',
      details: {
        duration: '10 Weeks',
        stipend: '₹8000/month',
        location: 'On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Students or graduates with an interest in event management, hospitality, or related fields.',
        skills: ['Event Planning', 'Venue Coordination', 'Guest Management', 'Logistics', 'Vendor Management'],
        responsibilities: [
          'Assist in planning and organizing events.',
          'Coordinate with vendors and venues.',
          'Manage guest lists and invitations.',
          'Oversee event logistics and on-site execution.',
        ],
      },
    },
    foodAndBeverage: {
      title: 'Food & Beverage Internship',
      description: 'Learn about food and beverage operations, including menu planning, service standards, and inventory management.',
      image: '/images/food-beverage.jpg',
      details: {
        duration: '6 Weeks',
        stipend: '₹6000/month',
        location: 'On-site (Delhi, Mumbai)',
        eligibility: 'Students or graduates with an interest in food and beverage management, culinary arts, or related fields.',
        skills: ['Menu Planning', 'Service Standards', 'Inventory Management', 'Customer Service', 'Food Safety'],
        responsibilities: [
          'Assist in menu planning and food preparation.',
          'Ensure high standards of food and beverage service.',
          'Manage inventory and stock levels.',
          'Maintain food safety and hygiene standards.',
        ],
      },
    },
    travelAndTourism: {
      title: 'Travel & Tourism Internship',
      description: 'Gain experience in travel and tourism operations, including itinerary planning, customer service, and tour coordination.',
      image: '/images/travel-tourism.jpg',
      details: {
        duration: '8 Weeks',
        stipend: '₹7500/month',
        location: 'On-site (Delhi, Mumbai, Jaipur)',
        eligibility: 'Students or graduates with an interest in travel, tourism, or related fields.',
        skills: ['Itinerary Planning', 'Customer Service', 'Tour Coordination', 'Travel Logistics', 'Destination Knowledge'],
        responsibilities: [
          'Assist in creating travel itineraries.',
          'Provide excellent customer service to travelers.',
          'Coordinate tours and travel logistics.',
          'Research and promote travel destinations.',
        ],
      },
    },
    customerService: {
      title: 'Customer Service Internship',
      description: 'Work on customer service operations, including handling inquiries, resolving complaints, and ensuring guest satisfaction.',
      image: '/images/customer-service.jpg',
      details: {
        duration: '12 Weeks',
        stipend: '₹9000/month',
        location: 'On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Students or graduates with an interest in customer service, hospitality, or related fields.',
        skills: ['Customer Relationship Management', 'Conflict Resolution', 'Communication Skills', 'Guest Satisfaction', 'Problem Solving'],
        responsibilities: [
          'Handle guest inquiries and complaints.',
          'Ensure high levels of guest satisfaction.',
          'Assist in resolving customer issues.',
          'Maintain positive relationships with guests.',
        ],
      },
    },
  };

  // Testimonials data
  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Hotel Management Intern',
      testimonial: 'This internship gave me practical exposure to hotel operations. I learned how to manage guest services and front desk operations. Highly recommended!',
      image: '/images/rahul.jpg',
    },
    {
      name: 'Priya Singh',
      role: 'Event Management Intern',
      testimonial: 'I got the opportunity to work on event planning and execution. The experience was eye-opening and helped me grow as a professional.',
      image: '/images/priya.jpg',
    },
    {
      name: 'Ankit Patel',
      role: 'Food & Beverage Intern',
      testimonial: 'Working on food and beverage operations was an incredible learning experience. The mentorship was top-notch.',
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
      <h1>Hospitality Internship Program</h1>

      {/* Role Selection Dropdown */}
      <div className="role-selection">
        <label htmlFor="role">Select Role:</label>
        <select
          id="role"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="hotelManagement">Hotel Management Intern</option>
          <option value="eventManagement">Event Management Intern</option>
          <option value="foodAndBeverage">Food & Beverage Intern</option>
          <option value="travelAndTourism">Travel & Tourism Intern</option>
          <option value="customerService">Customer Service Intern</option>
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

export default Hospitality;