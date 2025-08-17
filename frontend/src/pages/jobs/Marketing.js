import React, { useState } from 'react';
import './Marketing.css'; // Import the CSS file for styling

const Marketing = () => {
  // State to manage the selected role
  const [selectedRole, setSelectedRole] = useState('digitalMarketing');

  // Role-specific data
  const roles = {
    digitalMarketing: {
      title: 'Digital Marketing Specialist',
      description: 'Join our team as a Digital Marketing Specialist and drive online marketing campaigns to increase brand awareness and generate leads. This role requires expertise in SEO, SEM, and social media marketing.',
      image: '/images/digital-marketing.jpg',
      details: {
        experience: '1-3 Years',
        salary: '₹4-8 LPA',
        location: 'Remote/On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Bachelor’s degree in Marketing or related field. Experience in digital marketing tools is required.',
        skills: ['SEO', 'SEM', 'Social Media Marketing', 'Content Marketing', 'Analytics'],
        responsibilities: [
          'Plan and execute digital marketing campaigns across various platforms.',
          'Optimize website content for SEO and manage paid search campaigns.',
          'Manage social media accounts and create engaging content.',
          'Analyze campaign performance and provide actionable insights.',
          'Collaborate with design and content teams for campaign materials.',
        ],
        benefits: [
          'Competitive salary with performance-based incentives.',
          'Flexible work hours and remote work options.',
          'Access to the latest digital marketing tools and resources.',
          'Opportunities for professional growth and development.',
        ],
      },
    },
    contentMarketing: {
      title: 'Content Marketing Manager',
      description: 'As a Content Marketing Manager, you will lead content creation and strategy to engage audiences and drive brand loyalty. This role is ideal for someone with a passion for storytelling and content creation.',
      image: '/images/content-marketing.jpg',
      details: {
        experience: '2-5 Years',
        salary: '₹6-10 LPA',
        location: 'Remote/On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Bachelor’s degree in Marketing, Journalism, or related field. Strong writing and editing skills are essential.',
        skills: ['Content Strategy', 'Copywriting', 'SEO', 'Social Media', 'Analytics'],
        responsibilities: [
          'Develop and execute content marketing strategies.',
          'Create and manage content calendars for blogs, social media, and email campaigns.',
          'Write, edit, and optimize content for SEO and engagement.',
          'Collaborate with design teams for visual content creation.',
          'Analyze content performance and refine strategies.',
        ],
        benefits: [
          'Competitive salary with annual performance reviews.',
          'Opportunities to work on creative and impactful projects.',
          'Access to content creation tools and resources.',
          'Collaborative and innovative work culture.',
        ],
      },
    },
    socialMediaManager: {
      title: 'Social Media Manager',
      description: 'As a Social Media Manager, you will oversee social media strategies and campaigns to enhance brand presence and engagement. This role requires creativity and expertise in social media platforms.',
      image: '/images/social-media.jpg',
      details: {
        experience: '2-4 Years',
        salary: '₹5-9 LPA',
        location: 'Remote/On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Bachelor’s degree in Marketing or related field. Experience in social media management is required.',
        skills: ['Social Media Strategy', 'Content Creation', 'Community Management', 'Analytics', 'Paid Social'],
        responsibilities: [
          'Develop and implement social media strategies.',
          'Create and schedule engaging content for various platforms.',
          'Monitor and respond to audience interactions and comments.',
          'Analyze social media performance and optimize campaigns.',
          'Manage paid social media advertising campaigns.',
        ],
        benefits: [
          'Competitive salary with performance-based incentives.',
          'Flexible work hours and remote work options.',
          'Access to social media management tools.',
          'Opportunities to work with top brands and influencers.',
        ],
      },
    },
    seoSpecialist: {
      title: 'SEO Specialist',
      description: 'Join our team as an SEO Specialist and optimize website content to improve search engine rankings and drive organic traffic. This role requires expertise in SEO tools and techniques.',
      image: '/images/seo-specialist.jpg',
      details: {
        experience: '1-3 Years',
        salary: '₹4-7 LPA',
        location: 'Remote/On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Bachelor’s degree in Marketing or related field. Proficiency in SEO tools is required.',
        skills: ['Keyword Research', 'On-Page SEO', 'Off-Page SEO', 'Technical SEO', 'Analytics'],
        responsibilities: [
          'Conduct keyword research and optimize website content.',
          'Perform on-page and off-page SEO activities.',
          'Monitor website performance and identify areas for improvement.',
          'Collaborate with content and development teams for SEO implementation.',
          'Analyze SEO metrics and provide actionable insights.',
        ],
        benefits: [
          'Competitive salary with performance-based incentives.',
          'Flexible work hours and remote work options.',
          'Access to advanced SEO tools and resources.',
          'Opportunities to work on high-impact projects.',
        ],
      },
    },
    brandManager: {
      title: 'Brand Manager',
      description: 'As a Brand Manager, you will oversee brand strategy and positioning to ensure consistent messaging and brand identity. This role requires strong leadership and communication skills.',
      image: '/images/brand-manager.jpg',
      details: {
        experience: '3-6 Years',
        salary: '₹8-12 LPA',
        location: 'On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Bachelor’s degree in Marketing or related field. Experience in brand management is required.',
        skills: ['Brand Strategy', 'Market Research', 'Campaign Management', 'Brand Positioning', 'Analytics'],
        responsibilities: [
          'Develop and execute brand strategies and campaigns.',
          'Conduct market research to identify brand opportunities.',
          'Collaborate with marketing and design teams for brand materials.',
          'Monitor brand performance and ensure consistency across channels.',
          'Analyze market trends and adjust strategies accordingly.',
        ],
        benefits: [
          'Competitive salary with annual bonuses.',
          'Opportunities to work with top-tier brands.',
          'Access to brand management tools and resources.',
          'Collaborative and innovative work culture.',
        ],
      },
    },
  };

  // Get the selected role data
  const roleData = roles[selectedRole];

  return (
    <div className="job-details">
      {/* Heading */}
      <h1>Marketing Jobs</h1>

      {/* Role Selection Dropdown */}
      <div className="role-selection">
        <label htmlFor="role">Select Job Role:</label>
        <select
          id="role"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="digitalMarketing">Digital Marketing Specialist</option>
          <option value="contentMarketing">Content Marketing Manager</option>
          <option value="socialMediaManager">Social Media Manager</option>
          <option value="seoSpecialist">SEO Specialist</option>
          <option value="brandManager">Brand Manager</option>
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

export default Marketing;