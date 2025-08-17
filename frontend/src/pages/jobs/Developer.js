import React, { useState } from 'react';
import './Developer.css'; // Import the CSS file for styling

const Developer = () => {
  // State to manage the selected role
  const [selectedRole, setSelectedRole] = useState('frontendDeveloper');

  // Role-specific data
  const roles = {
    frontendDeveloper: {
      title: 'Frontend Developer',
      description: 'Join our team as a Frontend Developer and build user-friendly, responsive, and visually appealing web applications. This role requires expertise in HTML, CSS, JavaScript, and modern frontend frameworks.',
      image: '/images/frontend-developer.jpg',
      details: {
        experience: '1-3 Years',
        salary: '₹5-9 LPA',
        location: 'Remote/On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Bachelor’s degree in Computer Science or related field. Proficiency in frontend technologies is required.',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design'],
        responsibilities: [
          'Develop and maintain user-facing features for web applications.',
          'Collaborate with designers to implement UI/UX designs.',
          'Optimize applications for maximum speed and scalability.',
          'Ensure cross-browser compatibility and responsiveness.',
          'Write clean, maintainable, and reusable code.',
        ],
        benefits: [
          'Competitive salary with performance-based incentives.',
          'Flexible work hours and remote work options.',
          'Access to the latest tools and technologies.',
          'Opportunities for professional growth and development.',
        ],
      },
    },
    backendDeveloper: {
      title: 'Backend Developer',
      description: 'As a Backend Developer, you will design and implement server-side logic, databases, and APIs to power web applications. This role requires expertise in server-side languages and database management.',
      image: '/images/backend-developer.jpg',
      details: {
        experience: '2-4 Years',
        salary: '₹6-10 LPA',
        location: 'Remote/On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Bachelor’s degree in Computer Science or related field. Proficiency in backend technologies is required.',
        skills: ['Node.js', 'Python', 'Java', 'SQL', 'REST APIs'],
        responsibilities: [
          'Design and develop server-side logic and APIs.',
          'Manage and optimize databases for performance and scalability.',
          'Integrate third-party services and APIs.',
          'Ensure security and data protection.',
          'Collaborate with frontend developers for seamless integration.',
        ],
        benefits: [
          'Competitive salary with annual performance reviews.',
          'Opportunities to work on high-impact projects.',
          'Access to advanced backend tools and technologies.',
          'Collaborative and innovative work culture.',
        ],
      },
    },
    fullStackDeveloper: {
      title: 'Full Stack Developer',
      description: 'Join our team as a Full Stack Developer and work on both frontend and backend development to deliver end-to-end solutions. This role requires expertise in both client-side and server-side technologies.',
      image: '/images/fullstack-developer.jpg',
      details: {
        experience: '2-5 Years',
        salary: '₹7-12 LPA',
        location: 'Remote/On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Bachelor’s degree in Computer Science or related field. Proficiency in full stack technologies is required.',
        skills: ['React', 'Node.js', 'MongoDB', 'REST APIs', 'Git'],
        responsibilities: [
          'Develop and maintain both frontend and backend components.',
          'Design and implement RESTful APIs for seamless communication.',
          'Ensure the entire stack is optimized for performance and scalability.',
          'Collaborate with cross-functional teams to deliver projects.',
          'Write clean, maintainable, and well-documented code.',
        ],
        benefits: [
          'Competitive salary with performance-based incentives.',
          'Flexible work hours and remote work options.',
          'Access to the latest full stack tools and technologies.',
          'Opportunities to work on diverse and challenging projects.',
        ],
      },
    },
    mobileAppDeveloper: {
      title: 'Mobile App Developer',
      description: 'As a Mobile App Developer, you will design and build mobile applications for iOS and Android platforms. This role requires expertise in mobile development frameworks and tools.',
      image: '/images/mobile-developer.jpg',
      details: {
        experience: '1-3 Years',
        salary: '₹5-9 LPA',
        location: 'Remote/On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Bachelor’s degree in Computer Science or related field. Proficiency in mobile development is required.',
        skills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'REST APIs'],
        responsibilities: [
          'Develop and maintain mobile applications for iOS and Android.',
          'Collaborate with designers to implement UI/UX designs.',
          'Optimize applications for performance and user experience.',
          'Ensure compatibility with different devices and OS versions.',
          'Write clean, maintainable, and reusable code.',
        ],
        benefits: [
          'Competitive salary with performance-based incentives.',
          'Flexible work hours and remote work options.',
          'Access to the latest mobile development tools and technologies.',
          'Opportunities to work on innovative and impactful projects.',
        ],
      },
    },
    devOpsEngineer: {
      title: 'DevOps Engineer',
      description: 'Join our team as a DevOps Engineer and streamline development and deployment processes through automation and infrastructure management. This role requires expertise in CI/CD, cloud platforms, and scripting.',
      image: '/images/devops-engineer.jpg',
      details: {
        experience: '2-5 Years',
        salary: '₹8-13 LPA',
        location: 'Remote/On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Bachelor’s degree in Computer Science or related field. Proficiency in DevOps tools and practices is required.',
        skills: ['CI/CD', 'Docker', 'Kubernetes', 'AWS', 'Scripting'],
        responsibilities: [
          'Design and implement CI/CD pipelines for automated deployments.',
          'Manage and optimize cloud infrastructure and services.',
          'Monitor and troubleshoot production systems for performance and reliability.',
          'Collaborate with development and operations teams for seamless workflows.',
          'Ensure security and compliance in infrastructure and deployments.',
        ],
        benefits: [
          'Competitive salary with performance-based incentives.',
          'Flexible work hours and remote work options.',
          'Access to advanced DevOps tools and technologies.',
          'Opportunities to work on cutting-edge infrastructure projects.',
        ],
      },
    },
  };

  // Get the selected role data
  const roleData = roles[selectedRole];

  return (
    <div className="job-details">
      {/* Heading */}
      <h1>Developer Jobs</h1>

      {/* Role Selection Dropdown */}
      <div className="role-selection">
        <label htmlFor="role">Select Job Role:</label>
        <select
          id="role"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="frontendDeveloper">Frontend Developer</option>
          <option value="backendDeveloper">Backend Developer</option>
          <option value="fullStackDeveloper">Full Stack Developer</option>
          <option value="mobileAppDeveloper">Mobile App Developer</option>
          <option value="devOpsEngineer">DevOps Engineer</option>
        </select>
      </div>

      {/* Image */}
      <img src={roleData.image} alt={roleData.title} className="job-detail-image" />

      {/* Job Overview */}
      <div className="job-info">
        <h2>{roleData.title}</h2>
        <p>{roleData.description}</p>

        {/* Job Highlights */}
        <h3>Job Highlights</h3>
        <ul className="job-highlights">
          <li><strong>Experience:</strong> {roleData.details.experience}</li>
          <li><strong>Salary:</strong> <span className="salary">{roleData.details.salary}</span></li>
          <li><strong>Location:</strong> {roleData.details.location}</li>
          <li><strong>Eligibility:</strong> {roleData.details.eligibility}</li>
        </ul>

        {/* Skills Required */}
        <h3>Skills Required</h3>
        <div className="skills-grid">
          {roleData.details.skills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill}
            </div>
          ))}
        </div>

        {/* Key Responsibilities */}
        <h3>Key Responsibilities</h3>
        <ul className="responsibilities-list">
          {roleData.details.responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>

        {/* Benefits */}
        <h3>Benefits</h3>
        <ul className="benefits-list">
          {roleData.details.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>

        {/* Apply Button */}
        <a
          href="mailto:info@interncourse.online"
          className="apply-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default Developer;