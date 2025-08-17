import React, { useState } from 'react';
import './Psychology.css'; // Import the CSS file for styling

const Psychology = () => {
  // State to manage the selected role
  const [selectedRole, setSelectedRole] = useState('clinicalPsychology');

  // Role-specific data
  const roles = {
    clinicalPsychology: {
      title: 'Clinical Psychology Internship',
      description: 'Gain hands-on experience in clinical psychology, including patient assessment, therapy sessions, and mental health interventions.',
      image: '/images/clinical-psychology.jpg',
      details: {
        duration: '8 Weeks',
        stipend: '₹7000/month',
        location: 'On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Psychology students or graduates with an interest in clinical psychology.',
        skills: ['Patient Assessment', 'Therapy Techniques', 'Mental Health Interventions', 'Diagnostic Tools', 'Counseling'],
        responsibilities: [
          'Assist in conducting patient assessments and evaluations.',
          'Observe and support therapy sessions under supervision.',
          'Participate in mental health intervention programs.',
          'Maintain patient records and confidentiality.',
        ],
      },
    },
    counselingPsychology: {
      title: 'Counseling Psychology Internship',
      description: 'Work on counseling psychology projects, including individual and group counseling, crisis intervention, and client support.',
      image: '/images/counseling-psychology.jpg',
      details: {
        duration: '10 Weeks',
        stipend: '₹8000/month',
        location: 'On-site (Delhi, Mumbai, Chennai)',
        eligibility: 'Psychology students or graduates with an interest in counseling psychology.',
        skills: ['Individual Counseling', 'Group Counseling', 'Crisis Intervention', 'Client Support', 'Active Listening'],
        responsibilities: [
          'Assist in providing individual and group counseling sessions.',
          'Support crisis intervention and client support programs.',
          'Develop and implement counseling strategies.',
          'Maintain client records and ensure confidentiality.',
        ],
      },
    },
    childPsychology: {
      title: 'Child Psychology Internship',
      description: 'Learn about child psychology, including developmental assessments, behavioral interventions, and child counseling.',
      image: '/images/child-psychology.jpg',
      details: {
        duration: '6 Weeks',
        stipend: '₹6000/month',
        location: 'On-site (Delhi, Mumbai)',
        eligibility: 'Psychology students or graduates with an interest in child psychology.',
        skills: ['Developmental Assessments', 'Behavioral Interventions', 'Child Counseling', 'Play Therapy', 'Parental Guidance'],
        responsibilities: [
          'Assist in conducting developmental assessments for children.',
          'Support behavioral intervention programs.',
          'Participate in child counseling sessions.',
          'Provide guidance to parents and caregivers.',
        ],
      },
    },
    organizationalPsychology: {
      title: 'Organizational Psychology Internship',
      description: 'Gain experience in organizational psychology, including employee well-being, workplace assessments, and organizational development.',
      image: '/images/organizational-psychology.jpg',
      details: {
        duration: '8 Weeks',
        stipend: '₹7500/month',
        location: 'On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Psychology students or graduates with an interest in organizational psychology.',
        skills: ['Employee Well-being', 'Workplace Assessments', 'Organizational Development', 'Team Building', 'Stress Management'],
        responsibilities: [
          'Assist in conducting workplace assessments and surveys.',
          'Support employee well-being and stress management programs.',
          'Participate in organizational development initiatives.',
          'Collaborate on team-building activities.',
        ],
      },
    },
    researchPsychology: {
      title: 'Research Psychology Internship',
      description: 'Work on psychology research projects, including data collection, analysis, and publication of findings.',
      image: '/images/research-psychology.jpg',
      details: {
        duration: '12 Weeks',
        stipend: '₹9000/month',
        location: 'Remote/On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Psychology students or graduates with an interest in research psychology.',
        skills: ['Data Collection', 'Statistical Analysis', 'Research Design', 'Publication Writing', 'Ethical Research Practices'],
        responsibilities: [
          'Assist in designing and conducting psychology research studies.',
          'Collect and analyze data using statistical tools.',
          'Support the publication of research findings.',
          'Ensure compliance with ethical research practices.',
        ],
      },
    },
  };

  // Testimonials data
  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Clinical Psychology Intern',
      testimonial: 'This internship gave me practical exposure to clinical psychology. I worked on real cases and learned from experienced psychologists. Highly recommended!',
      image: '/images/rahul.jpg',
    },
    {
      name: 'Priya Singh',
      role: 'Counseling Psychology Intern',
      testimonial: 'I got the opportunity to work on counseling projects. The experience was eye-opening and helped me grow as a professional.',
      image: '/images/priya.jpg',
    },
    {
      name: 'Ankit Patel',
      role: 'Child Psychology Intern',
      testimonial: 'Working on child psychology projects was an incredible learning experience. The mentorship was top-notch.',
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
      <h1>Psychology Internship Program</h1>

      {/* Role Selection Dropdown */}
      <div className="role-selection">
        <label htmlFor="role">Select Role:</label>
        <select
          id="role"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="clinicalPsychology">Clinical Psychology Intern</option>
          <option value="counselingPsychology">Counseling Psychology Intern</option>
          <option value="childPsychology">Child Psychology Intern</option>
          <option value="organizationalPsychology">Organizational Psychology Intern</option>
          <option value="researchPsychology">Research Psychology Intern</option>
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

export default Psychology;