import React, { useState } from 'react';
import './ContentWriting.css'; // Import the CSS file for styling

const ContentWriting = () => {
  // State to manage the selected role
  const [selectedRole, setSelectedRole] = useState('contentWriter');

  // Role-specific data
  const roles = {
    contentWriter: {
      title: 'Content Writer',
      description: 'Join our team as a Content Writer and create engaging, high-quality content for various platforms. This role requires excellent writing skills, creativity, and attention to detail.',
      image: '/images/content-writer.jpg',
      details: {
        experience: '1-3 Years',
        salary: '₹3-6 LPA',
        location: 'Remote/On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Bachelor’s degree in English, Journalism, or related field. Strong writing and editing skills are essential.',
        skills: ['Content Creation', 'SEO Writing', 'Editing', 'Research', 'Social Media'],
        responsibilities: [
          'Write and edit blog posts, articles, and web content.',
          'Conduct research to ensure content accuracy and relevance.',
          'Optimize content for SEO and audience engagement.',
          'Collaborate with the marketing team for content strategy.',
          'Ensure content aligns with brand voice and guidelines.',
        ],
        benefits: [
          'Competitive salary with performance-based incentives.',
          'Flexible work hours and remote work options.',
          'Opportunities to work on diverse and creative projects.',
          'Access to writing tools and resources.',
        ],
      },
    },
    technicalWriter: {
      title: 'Technical Writer',
      description: 'As a Technical Writer, you will create clear and concise documentation for technical products and processes. This role requires strong technical knowledge and excellent writing skills.',
      image: '/images/technical-writer.jpg',
      details: {
        experience: '2-5 Years',
        salary: '₹5-9 LPA',
        location: 'Remote/On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Bachelor’s degree in Technical Writing, Computer Science, or related field. Proficiency in technical documentation tools is required.',
        skills: ['Technical Documentation', 'API Writing', 'User Manuals', 'Editing', 'Research'],
        responsibilities: [
          'Create user manuals, guides, and technical documentation.',
          'Collaborate with developers and engineers to understand products.',
          'Simplify complex technical concepts for non-technical audiences.',
          'Ensure documentation is accurate, clear, and up-to-date.',
          'Review and edit existing documentation for clarity and consistency.',
        ],
        benefits: [
          'Competitive salary with performance-based incentives.',
          'Flexible work hours and remote work options.',
          'Opportunities to work with cutting-edge technologies.',
          'Access to advanced documentation tools.',
        ],
      },
    },
    copywriter: {
      title: 'Copywriter',
      description: 'Join our team as a Copywriter and craft compelling copy for advertisements, marketing campaigns, and branding materials. This role requires creativity, persuasion, and a flair for language.',
      image: '/images/copywriter.jpg',
      details: {
        experience: '1-4 Years',
        salary: '₹4-8 LPA',
        location: 'Remote/On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Bachelor’s degree in Marketing, English, or related field. Experience in advertising or marketing is preferred.',
        skills: ['Copywriting', 'Advertising', 'Branding', 'Editing', 'Creative Writing'],
        responsibilities: [
          'Write persuasive copy for ads, emails, and social media.',
          'Develop brand messaging and tone of voice.',
          'Collaborate with designers and marketers for campaign materials.',
          'Edit and proofread copy for accuracy and impact.',
          'Ensure copy aligns with brand guidelines and objectives.',
        ],
        benefits: [
          'Competitive salary with performance-based incentives.',
          'Flexible work hours and remote work options.',
          'Opportunities to work on high-profile campaigns.',
          'Creative and collaborative work environment.',
        ],
      },
    },
    seoContentWriter: {
      title: 'SEO Content Writer',
      description: 'As an SEO Content Writer, you will create content optimized for search engines to drive organic traffic. This role requires expertise in SEO, keyword research, and content strategy.',
      image: '/images/seo-content-writer.jpg',
      details: {
        experience: '1-3 Years',
        salary: '₹4-7 LPA',
        location: 'Remote/On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Bachelor’s degree in Marketing, English, or related field. Proficiency in SEO tools and techniques is required.',
        skills: ['SEO Writing', 'Keyword Research', 'Content Strategy', 'Analytics', 'Editing'],
        responsibilities: [
          'Write SEO-optimized blog posts, articles, and web content.',
          'Conduct keyword research to identify content opportunities.',
          'Optimize existing content for better search engine rankings.',
          'Analyze content performance using SEO tools.',
          'Collaborate with the marketing team for content planning.',
        ],
        benefits: [
          'Competitive salary with performance-based incentives.',
          'Flexible work hours and remote work options.',
          'Access to advanced SEO tools and analytics.',
          'Opportunities to work on high-impact projects.',
        ],
      },
    },
    scriptWriter: {
      title: 'Script Writer',
      description: 'Join our team as a Script Writer and create engaging scripts for videos, podcasts, and other media. This role requires storytelling skills, creativity, and attention to detail.',
      image: '/images/script-writer.jpg',
      details: {
        experience: '2-5 Years',
        salary: '₹5-10 LPA',
        location: 'Remote/On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Bachelor’s degree in Film, Media, or related field. Experience in scriptwriting is required.',
        skills: ['Scriptwriting', 'Storytelling', 'Editing', 'Research', 'Creative Writing'],
        responsibilities: [
          'Write scripts for videos, podcasts, and other media.',
          'Develop engaging storylines and dialogues.',
          'Collaborate with directors and producers for script development.',
          'Edit and revise scripts based on feedback.',
          'Ensure scripts align with project goals and audience preferences.',
        ],
        benefits: [
          'Competitive salary with performance-based incentives.',
          'Flexible work hours and remote work options.',
          'Opportunities to work on creative and innovative projects.',
          'Collaborative and dynamic work environment.',
        ],
      },
    },
  };

  // Get the selected role data
  const roleData = roles[selectedRole];

  return (
    <div className="job-details">
      {/* Heading */}
      <h1>Content Writing Jobs</h1>

      {/* Role Selection Dropdown */}
      <div className="role-selection">
        <label htmlFor="role">Select Job Role:</label>
        <select
          id="role"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="contentWriter">Content Writer</option>
          <option value="technicalWriter">Technical Writer</option>
          <option value="copywriter">Copywriter</option>
          <option value="seoContentWriter">SEO Content Writer</option>
          <option value="scriptWriter">Script Writer</option>
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

export default ContentWriting;