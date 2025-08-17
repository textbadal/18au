import React, { useState } from 'react';
import './BCA.css'; // Import the CSS file for styling

const BCA = () => {
  // State to manage the selected role
  const [selectedRole, setSelectedRole] = useState('webDevelopment');

  // Role-specific data
  const roles = {
    webDevelopment: {
      title: 'Web Development Internship',
      description: 'Gain hands-on experience in building responsive and dynamic websites using modern web technologies.',
      image: '/images/webdev.jpg',
      details: {
        duration: '8 Weeks',
        stipend: '₹6000/month',
        location: 'Remote/On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'BCA students or graduates with an interest in web development.',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
        responsibilities: [
          'Develop and maintain responsive websites.',
          'Collaborate with teams to design and implement features.',
          'Write clean, scalable, and efficient code.',
          'Debug and fix website issues.',
        ],
      },
    },
    mobileAppDevelopment: {
      title: 'Mobile App Development Internship',
      description: 'Learn to build cross-platform mobile applications using frameworks like React Native and Flutter.',
      image: '/images/mobileapp.jpg',
      details: {
        duration: '10 Weeks',
        stipend: '₹7000/month',
        location: 'Remote/On-site (Delhi, Bangalore, Hyderabad)',
        eligibility: 'BCA students or graduates with an interest in mobile app development.',
        skills: ['React Native', 'Flutter', 'JavaScript', 'Dart', 'Firebase'],
        responsibilities: [
          'Develop and maintain mobile applications.',
          'Collaborate with teams to design and implement features.',
          'Write clean, scalable, and efficient code.',
          'Debug and fix app issues.',
        ],
      },
    },
    databaseManagement: {
      title: 'Database Management Internship',
      description: 'Work on database design, optimization, and management using SQL and NoSQL databases.',
      image: '/images/database.jpg',
      details: {
        duration: '8 Weeks',
        stipend: '₹6500/month',
        location: 'Remote/On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'BCA students or graduates with an interest in database management.',
        skills: ['SQL', 'NoSQL', 'Database Design', 'Query Optimization', 'Data Modeling'],
        responsibilities: [
          'Design and implement database schemas.',
          'Optimize database queries for performance.',
          'Work with both SQL and NoSQL databases.',
          'Perform data migration and transformation tasks.',
        ],
      },
    },
    uiuxDesign: {
      title: 'UI/UX Design Internship',
      description: 'Learn to design user-friendly interfaces and enhance user experience for web and mobile applications.',
      image: '/images/uiux.jpg',
      details: {
        duration: '6 Weeks',
        stipend: '₹5500/month',
        location: 'Remote/On-site (Delhi, Mumbai)',
        eligibility: 'BCA students or graduates with an interest in UI/UX design.',
        skills: ['Figma', 'Adobe XD', 'Wireframing', 'Prototyping', 'User Research'],
        responsibilities: [
          'Design user interfaces for web and mobile apps.',
          'Create wireframes and prototypes.',
          'Conduct user research and usability testing.',
          'Collaborate with developers to implement designs.',
        ],
      },
    },
    softwareTesting: {
      title: 'Software Testing Internship',
      description: 'Gain experience in manual and automated testing to ensure software quality and reliability.',
      image: '/images/softwaretesting.jpg',
      details: {
        duration: '8 Weeks',
        stipend: '₹6000/month',
        location: 'Remote/On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'BCA students or graduates with an interest in software testing.',
        skills: ['Manual Testing', 'Automated Testing', 'Selenium', 'JIRA', 'Test Cases'],
        responsibilities: [
          'Write and execute test cases.',
          'Identify and report software bugs.',
          'Perform manual and automated testing.',
          'Collaborate with developers to resolve issues.',
        ],
      },
    },
    digitalMarketing: {
      title: 'Digital Marketing Internship',
      description: 'Learn about SEO, social media marketing, content creation, and online advertising strategies.',
      image: '/images/digitalmarketing.jpg',
      details: {
        duration: '6 Weeks',
        stipend: '₹5000/month',
        location: 'Remote/On-site (Delhi, Mumbai)',
        eligibility: 'BCA students or graduates with an interest in digital marketing.',
        skills: ['SEO', 'Social Media Marketing', 'Content Creation', 'Google Ads', 'Analytics'],
        responsibilities: [
          'Create and manage social media campaigns.',
          'Optimize websites for search engines (SEO).',
          'Write and edit content for blogs and ads.',
          'Analyze campaign performance using analytics tools.',
        ],
      },
    },
  };

  // Testimonials data
  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Web Development Intern',
      testimonial: 'This internship gave me practical exposure to web development. I worked on real projects and learned from industry experts. Highly recommended!',
      image: '/images/rahul.jpg',
    },
    {
      name: 'Priya Singh',
      role: 'UI/UX Design Intern',
      testimonial: 'I got the opportunity to design user-friendly interfaces. The experience was eye-opening and helped me grow as a designer.',
      image: '/images/priya.jpg',
    },
    {
      name: 'Ankit Patel',
      role: 'Mobile App Development Intern',
      testimonial: 'Working on mobile apps was an incredible learning experience. The mentorship was top-notch.',
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
      <h1>BCA Internship Program</h1>

      {/* Role Selection Dropdown */}
      <div className="role-selection">
        <label htmlFor="role">Select Role:</label>
        <select
          id="role"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="webDevelopment">Web Development Intern</option>
          <option value="mobileAppDevelopment">Mobile App Development Intern</option>
          <option value="databaseManagement">Database Management Intern</option>
          <option value="uiuxDesign">UI/UX Design Intern</option>
          <option value="softwareTesting">Software Testing Intern</option>
          <option value="digitalMarketing">Digital Marketing Intern</option>
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

export default BCA;