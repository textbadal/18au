import React, { useState } from 'react';
import './GraphicDesign.css'; // Import the CSS file for styling

const GraphicDesign = () => {
  // State to manage the selected role
  const [selectedRole, setSelectedRole] = useState('graphicDesigner');

  // Role-specific data
  const roles = {
    graphicDesigner: {
      title: 'Graphic Designer',
      description: 'Join our team as a Graphic Designer and create visually stunning designs for digital and print media. This role requires creativity, attention to detail, and proficiency in design tools.',
      image: '/images/graphic-designer.jpg',
      details: {
        experience: '1-3 Years',
        salary: '₹4-8 LPA',
        location: 'Remote/On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Bachelor’s degree in Graphic Design or related field. Proficiency in design software is required.',
        skills: ['Adobe Photoshop', 'Illustrator', 'InDesign', 'Typography', 'Branding'],
        responsibilities: [
          'Create designs for websites, social media, and print materials.',
          'Collaborate with the marketing team to develop visual content.',
          'Ensure designs align with brand guidelines and objectives.',
          'Edit and refine designs based on feedback.',
          'Stay updated with design trends and tools.',
        ],
        benefits: [
          'Competitive salary with performance-based incentives.',
          'Flexible work hours and remote work options.',
          'Access to the latest design tools and software.',
          'Opportunities to work on creative and innovative projects.',
        ],
      },
    },
    uiUxDesigner: {
      title: 'UI/UX Designer',
      description: 'As a UI/UX Designer, you will design user-friendly and visually appealing interfaces for web and mobile applications. This role requires expertise in user-centered design principles.',
      image: '/images/ui-ux-designer.jpg',
      details: {
        experience: '2-5 Years',
        salary: '₹6-12 LPA',
        location: 'Remote/On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Bachelor’s degree in Design, Computer Science, or related field. Proficiency in UI/UX tools is required.',
        skills: ['Figma', 'Sketch', 'Wireframing', 'Prototyping', 'User Research'],
        responsibilities: [
          'Design intuitive and user-friendly interfaces for web and mobile apps.',
          'Create wireframes, prototypes, and mockups.',
          'Conduct user research and usability testing.',
          'Collaborate with developers to ensure design feasibility.',
          'Ensure designs are consistent with brand guidelines.',
        ],
        benefits: [
          'Competitive salary with performance-based incentives.',
          'Flexible work hours and remote work options.',
          'Access to advanced UI/UX tools and resources.',
          'Opportunities to work on high-impact projects.',
        ],
      },
    },
    motionGraphicsDesigner: {
      title: 'Motion Graphics Designer',
      description: 'Join our team as a Motion Graphics Designer and create engaging animations and visual effects for videos and digital media. This role requires expertise in animation and video editing tools.',
      image: '/images/motion-graphics.jpg',
      details: {
        experience: '2-4 Years',
        salary: '₹5-10 LPA',
        location: 'Remote/On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Bachelor’s degree in Animation, Design, or related field. Proficiency in motion graphics tools is required.',
        skills: ['After Effects', 'Premiere Pro', 'Cinema 4D', 'Animation', 'Video Editing'],
        responsibilities: [
          'Create motion graphics and animations for videos and digital media.',
          'Collaborate with the creative team to develop visual content.',
          'Edit and enhance video content with visual effects.',
          'Ensure animations align with project goals and brand guidelines.',
          'Stay updated with the latest trends in motion graphics.',
        ],
        benefits: [
          'Competitive salary with performance-based incentives.',
          'Flexible work hours and remote work options.',
          'Access to advanced animation and video editing tools.',
          'Opportunities to work on creative and innovative projects.',
        ],
      },
    },
    brandingDesigner: {
      title: 'Branding Designer',
      description: 'As a Branding Designer, you will create visual identities and branding materials for businesses. This role requires expertise in branding, typography, and design principles.',
      image: '/images/branding-designer.jpg',
      details: {
        experience: '2-5 Years',
        salary: '₹6-11 LPA',
        location: 'Remote/On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Bachelor’s degree in Graphic Design or related field. Experience in branding is required.',
        skills: ['Brand Identity', 'Typography', 'Logo Design', 'Print Design', 'Visual Communication'],
        responsibilities: [
          'Develop visual identities and branding materials for clients.',
          'Create logos, business cards, and other branding assets.',
          'Collaborate with clients to understand their branding needs.',
          'Ensure designs are consistent with brand guidelines.',
          'Stay updated with branding trends and best practices.',
        ],
        benefits: [
          'Competitive salary with performance-based incentives.',
          'Flexible work hours and remote work options.',
          'Access to advanced design tools and resources.',
          'Opportunities to work with diverse clients and industries.',
        ],
      },
    },
    webDesigner: {
      title: 'Web Designer',
      description: 'Join our team as a Web Designer and create visually appealing and user-friendly websites. This role requires expertise in web design tools and front-end development basics.',
      image: '/images/web-designer.jpg',
      details: {
        experience: '1-4 Years',
        salary: '₹5-9 LPA',
        location: 'Remote/On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Bachelor’s degree in Web Design, Computer Science, or related field. Proficiency in web design tools is required.',
        skills: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'Responsive Design'],
        responsibilities: [
          'Design and develop visually appealing websites.',
          'Collaborate with developers to ensure design feasibility.',
          'Optimize websites for responsiveness and performance.',
          'Ensure designs align with client requirements and brand guidelines.',
          'Stay updated with web design trends and technologies.',
        ],
        benefits: [
          'Competitive salary with performance-based incentives.',
          'Flexible work hours and remote work options.',
          'Access to advanced web design tools and resources.',
          'Opportunities to work on diverse and challenging projects.',
        ],
      },
    },
  };

  // Get the selected role data
  const roleData = roles[selectedRole];

  return (
    <div className="job-details">
      {/* Heading */}
      <h1>Graphic Design Jobs</h1>

      {/* Role Selection Dropdown */}
      <div className="role-selection">
        <label htmlFor="role">Select Job Role:</label>
        <select
          id="role"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="graphicDesigner">Graphic Designer</option>
          <option value="uiUxDesigner">UI/UX Designer</option>
          <option value="motionGraphicsDesigner">Motion Graphics Designer</option>
          <option value="brandingDesigner">Branding Designer</option>
          <option value="webDesigner">Web Designer</option>
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

export default GraphicDesign;