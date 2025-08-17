import React, { useState } from 'react';
import './BE.css'; // Import the CSS file for styling

const BE = () => {
  // State to manage the selected role
  const [selectedRole, setSelectedRole] = useState('software');

  // Role-specific data
  const roles = {
    software: {
      title: 'Software Engineering Internship',
      description: 'Gain hands-on experience in software development, including backend, frontend, and full-stack development.',
      image: '/images/software.jpg',
      details: {
        duration: '8 Weeks',
        stipend: '₹8000/month',
        location: 'Remote/On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'BE/BTech/MTech students or graduates with an interest in software development.',
        skills: ['Java', 'Python', 'JavaScript', 'React', 'Node.js', 'SQL'],
        responsibilities: [
          'Develop and maintain software applications.',
          'Collaborate with teams to design and implement features.',
          'Write clean, scalable, and efficient code.',
          'Debug and fix software issues.',
        ],
      },
    },
    dataScience: {
      title: 'Data Science Internship',
      description: 'Work on real-world data science projects, including data analysis, machine learning, and predictive modeling.',
      image: '/images/datascience.jpg',
      details: {
        duration: '10 Weeks',
        stipend: '₹9000/month',
        location: 'Remote/On-site (Delhi, Bangalore, Hyderabad)',
        eligibility: 'BE/BTech/MTech students or graduates with an interest in data science.',
        skills: ['Python', 'R', 'Machine Learning', 'Data Visualization', 'SQL', 'Pandas'],
        responsibilities: [
          'Analyze and interpret complex datasets.',
          'Build and deploy machine learning models.',
          'Create data visualizations and reports.',
          'Collaborate with teams to solve business problems.',
        ],
      },
    },
    artificialIntelligence: {
      title: 'Artificial Intelligence Internship',
      description: 'Learn about AI technologies, including natural language processing, computer vision, and deep learning.',
      image: '/images/ai.jpg',
      details: {
        duration: '12 Weeks',
        stipend: '₹10000/month',
        location: 'Remote/On-site (Delhi, Mumbai, Chennai)',
        eligibility: 'BE/BTech/MTech students or graduates with an interest in AI.',
        skills: ['Python', 'TensorFlow', 'Keras', 'NLP', 'Computer Vision', 'Deep Learning'],
        responsibilities: [
          'Develop AI models for real-world applications.',
          'Work on NLP and computer vision projects.',
          'Optimize and fine-tune AI algorithms.',
          'Collaborate with researchers and engineers.',
        ],
      },
    },
    cybersecurity: {
      title: 'Cybersecurity Internship',
      description: 'Gain experience in securing systems, networks, and applications from cyber threats.',
      image: '/images/cybersecurity.jpg',
      details: {
        duration: '8 Weeks',
        stipend: '₹8500/month',
        location: 'Remote/On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'BE/BTech/MTech students or graduates with an interest in cybersecurity.',
        skills: ['Ethical Hacking', 'Network Security', 'Penetration Testing', 'Encryption', 'Firewalls'],
        responsibilities: [
          'Identify and fix security vulnerabilities.',
          'Conduct penetration testing and security audits.',
          'Implement encryption and secure communication protocols.',
          'Monitor and respond to cyber threats.',
        ],
      },
    },
    iot: {
      title: 'Internet of Things (IoT) Internship',
      description: 'Work on IoT projects, including device connectivity, data collection, and automation.',
      image: '/images/iot.jpg',
      details: {
        duration: '10 Weeks',
        stipend: '₹9000/month',
        location: 'Remote/On-site (Delhi, Bangalore, Hyderabad)',
        eligibility: 'BE/BTech/MTech students or graduates with an interest in IoT.',
        skills: ['Arduino', 'Raspberry Pi', 'MQTT', 'Cloud Integration', 'Sensor Networks'],
        responsibilities: [
          'Develop and deploy IoT devices.',
          'Integrate IoT devices with cloud platforms.',
          'Collect and analyze sensor data.',
          'Automate processes using IoT technologies.',
        ],
      },
    },
    robotics: {
      title: 'Robotics Internship',
      description: 'Gain hands-on experience in robotics, including robot design, programming, and automation.',
      image: '/images/robotics.jpg',
      details: {
        duration: '12 Weeks',
        stipend: '₹10000/month',
        location: 'Remote/On-site (Delhi, Mumbai, Chennai)',
        eligibility: 'BE/BTech/MTech students or graduates with an interest in robotics.',
        skills: ['ROS', 'Python', 'C++', 'Robot Design', 'Automation'],
        responsibilities: [
          'Design and build robotic systems.',
          'Program robots for specific tasks.',
          'Test and optimize robotic algorithms.',
          'Collaborate with teams on automation projects.',
        ],
      },
    },
    cloudComputing: {
      title: 'Cloud Computing Internship',
      description: 'Learn about cloud platforms, including deployment, scaling, and managing cloud resources.',
      image: '/images/cloud.jpg',
      details: {
        duration: '8 Weeks',
        stipend: '₹8500/month',
        location: 'Remote/On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'BE/BTech/MTech students or graduates with an interest in cloud computing.',
        skills: ['AWS', 'Azure', 'GCP', 'Cloud Deployment', 'Serverless Architecture'],
        responsibilities: [
          'Deploy and manage applications on cloud platforms.',
          'Implement serverless architectures.',
          'Monitor and optimize cloud resource usage.',
          'Collaborate with teams for cloud-based solutions.',
        ],
      },
    },
    blockchain: {
      title: 'Blockchain Internship',
      description: 'Work on blockchain technologies, including smart contracts, decentralized applications, and cryptography.',
      image: '/images/blockchain.jpg',
      details: {
        duration: '10 Weeks',
        stipend: '₹9500/month',
        location: 'Remote/On-site (Delhi, Bangalore, Hyderabad)',
        eligibility: 'BE/BTech/MTech students or graduates with an interest in blockchain.',
        skills: ['Solidity', 'Ethereum', 'Smart Contracts', 'Cryptography', 'Decentralized Apps'],
        responsibilities: [
          'Develop and deploy smart contracts.',
          'Build decentralized applications (DApps).',
          'Work on blockchain security and cryptography.',
          'Collaborate with teams on blockchain projects.',
        ],
      },
    },
  };

  // Testimonials data
  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Software Engineering Intern',
      testimonial: 'This internship gave me practical exposure to software development. I worked on real projects and learned from industry experts. Highly recommended!',
      image: '/images/rahul.jpg',
    },
    {
      name: 'Priya Singh',
      role: 'Data Science Intern',
      testimonial: 'I got the opportunity to work on real-world data science projects. The experience was eye-opening and helped me grow as a data scientist.',
      image: '/images/priya.jpg',
    },
    {
      name: 'Ankit Patel',
      role: 'AI Intern',
      testimonial: 'Working on AI models and algorithms was an incredible learning experience. The mentorship was top-notch.',
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
      <h1>BE/BTech/MTech Internship Program</h1>

      {/* Role Selection Dropdown */}
      <div className="role-selection">
        <label htmlFor="role">Select Role:</label>
        <select
          id="role"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="software">Software Engineering Intern</option>
          <option value="dataScience">Data Science Intern</option>
          <option value="artificialIntelligence">Artificial Intelligence Intern</option>
          <option value="cybersecurity">Cybersecurity Intern</option>
          <option value="iot">IoT Intern</option>
          <option value="robotics">Robotics Intern</option>
          <option value="cloudComputing">Cloud Computing Intern</option>
          <option value="blockchain">Blockchain Intern</option>
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

export default BE;