import React, { useState } from 'react';
import './Media.css'; // Import the CSS file for styling

const Media = () => {
  // State to manage the selected role
  const [selectedRole, setSelectedRole] = useState('journalism');

  // Role-specific data
  const roles = {
    journalism: {
      title: 'Journalism Internship',
      description: 'Gain hands-on experience in news reporting, article writing, and media ethics.',
      image: '/images/journalism.jpg',
      details: {
        duration: '8 Weeks',
        stipend: '₹7000/month',
        location: 'On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Students or graduates with an interest in journalism and media.',
        skills: ['News Reporting', 'Article Writing', 'Interviewing', 'Media Ethics', 'Research'],
        responsibilities: [
          'Assist in researching and writing news articles.',
          'Conduct interviews and gather information.',
          'Support in editing and proofreading content.',
          'Collaborate with senior journalists on stories.',
        ],
      },
    },
    contentWriting: {
      title: 'Content Writing Internship',
      description: 'Learn about content creation, SEO writing, and digital marketing.',
      image: '/images/content-writing.jpg',
      details: {
        duration: '6 Weeks',
        stipend: '₹6000/month',
        location: 'Remote/On-site (Delhi, Mumbai)',
        eligibility: 'Students or graduates with an interest in content writing.',
        skills: ['Content Creation', 'SEO Writing', 'Blogging', 'Editing', 'Digital Marketing'],
        responsibilities: [
          'Write and edit blog posts, articles, and web content.',
          'Optimize content for SEO and digital platforms.',
          'Conduct research for content ideas.',
          'Collaborate with the marketing team on campaigns.',
        ],
      },
    },
    socialMediaManagement: {
      title: 'Social Media Management Internship',
      description: 'Work on social media strategies, content creation, and analytics.',
      image: '/images/social-media.jpg',
      details: {
        duration: '8 Weeks',
        stipend: '₹7500/month',
        location: 'Remote/On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Students or graduates with an interest in social media management.',
        skills: ['Social Media Strategy', 'Content Creation', 'Analytics', 'Community Management', 'Campaign Planning'],
        responsibilities: [
          'Assist in managing social media accounts.',
          'Create and schedule posts for various platforms.',
          'Analyze social media performance and generate reports.',
          'Collaborate with the marketing team on campaigns.',
        ],
      },
    },
    videoProduction: {
      title: 'Video Production Internship',
      description: 'Gain experience in video editing, scriptwriting, and production.',
      image: '/images/video-production.jpg',
      details: {
        duration: '10 Weeks',
        stipend: '₹8000/month',
        location: 'On-site (Delhi, Mumbai, Chennai)',
        eligibility: 'Students or graduates with an interest in video production.',
        skills: ['Video Editing', 'Scriptwriting', 'Cinematography', 'Post-Production', 'Storyboarding'],
        responsibilities: [
          'Assist in video shooting and editing.',
          'Support in scriptwriting and storyboarding.',
          'Collaborate on post-production tasks.',
          'Work with the production team on projects.',
        ],
      },
    },
    publicRelations: {
      title: 'Public Relations Internship',
      description: 'Learn about PR strategies, media relations, and event management.',
      image: '/images/public-relations.jpg',
      details: {
        duration: '12 Weeks',
        stipend: '₹9000/month',
        location: 'On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Students or graduates with an interest in public relations.',
        skills: ['PR Strategies', 'Media Relations', 'Event Management', 'Crisis Communication', 'Press Releases'],
        responsibilities: [
          'Assist in drafting press releases and media kits.',
          'Support in organizing events and press conferences.',
          'Build and maintain media relationships.',
          'Collaborate with the PR team on campaigns.',
        ],
      },
    },
  };

  // Testimonials data
  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Journalism Intern',
      testimonial: 'This internship gave me practical exposure to news reporting and article writing. I worked on real stories and learned from industry experts. Highly recommended!',
      image: '/images/rahul.jpg',
    },
    {
      name: 'Priya Singh',
      role: 'Content Writing Intern',
      testimonial: 'I got the opportunity to write blogs and optimize content for SEO. The experience was eye-opening and helped me grow as a professional.',
      image: '/images/priya.jpg',
    },
    {
      name: 'Ankit Patel',
      role: 'Social Media Intern',
      testimonial: 'Working on social media campaigns was an incredible learning experience. The mentorship was top-notch.',
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
      <h1>Media Internship Program</h1>

      {/* Role Selection Dropdown */}
      <div className="role-selection">
        <label htmlFor="role">Select Role:</label>
        <select
          id="role"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="journalism">Journalism Intern</option>
          <option value="contentWriting">Content Writing Intern</option>
          <option value="socialMediaManagement">Social Media Management Intern</option>
          <option value="videoProduction">Video Production Intern</option>
          <option value="publicRelations">Public Relations Intern</option>
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

export default Media;
