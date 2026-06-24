import React from 'react';
import { Helmet } from 'react-helmet';
import './AboutUs.css';
import { 
  FaRocket, 
  FaGlobe, 
  FaGraduationCap, 
  FaUsers, 
  FaLightbulb,
} from 'react-icons/fa';

const teamMembers = [
  { name: 'Mayank Jha', role: 'Software Developer', imageUrl: 'images/Mayank.WebP', bio: 'Specializes in crafting scalable web applications and intuitive user interfaces.' },
  { name: 'Ankit Pandey', role: 'Architect', imageUrl: 'images/Ankitt.jpg', bio: 'Designs the core foundational architecture of our platform integrations.' },
  { name: 'Manvi Verma', role: 'Java Developer', imageUrl: 'images/manvi.WebP', bio: 'Engineers robust, secure, and highly efficient back-end systems.' },
  { name: 'Harsh Verma', role: 'Quantity Surveyor', imageUrl: 'images/Harsh.WebP', bio: 'Manages program estimations and operational resource allocations.' },
  { name: 'Madhu Kumari', role: 'Recruitment Specialist', imageUrl: 'images/madhu.jpg', bio: 'Connects industry talent with optimal roles to build our growing ecosystem.' },
  { name: 'Garima Bajaj', role: 'Graphic Designer', imageUrl: 'images/Garima.jpg', bio: 'Shapes the visual identity and creative media standards of the brand.' },
];

const TeamMember = ({ member }) => (
  <div className="team-card">
    <div className="team-member-photo">
      <img src={member.imageUrl} alt={member.name} loading="lazy" />
    </div>
    <div className="team-member-info">
      <h3>{member.name}</h3>
      <span className="role-badge">{member.role}</span>
      <p className="team-member-bio">{member.bio}</p>
    </div>
  </div>
);

const AboutUs = () => (
  <div className="about-us-page">
    <Helmet>
      <title>About Us - InternCourse</title>
      <meta name="description" content="Learn more about InternCourse, our mission, vision, team, and journey." />
    </Helmet>

    {/* Professional Hero Section */}
    <header className="about-hero">
      <div className="hero-container">
        <h1>Empouring the Next Generation of Professionals</h1>
        <p>Bridging the gap between traditional education and industry-readiness through innovative training ecosystems.</p>
      </div>
    </header>

    {/* Mission & Vision */}
    <section className="purpose-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Purpose</h2>
          <div className="accent-line"></div>
        </div>
        <div className="purpose-grid">
          <div className="purpose-card">
            <div className="icon-wrapper"><FaRocket className="icon" /></div>
            <h3>Our Mission</h3>
            <p>Offer affordable, quality education that empowers learners to reach their ultimate career milestones and unlock full potential.</p>
          </div>
          <div className="purpose-card">
            <div className="icon-wrapper"><FaGlobe className="icon" /></div>
            <h3>Our Vision</h3>
            <p>Make quality education universally accessible to everyone, everywhere, fostering equality in industry preparedness.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Core Values */}
    <section className="values-section">
      <div className="container">
        <div className="section-header">
          <h2>Core Values</h2>
          <div className="accent-line"></div>
        </div>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon"><FaGraduationCap className="icon" /></div>
            <h3>Quality</h3>
            <p>Delivering premium, industry-vetted content built to match current corporate demands.</p>
          </div>
          <div className="value-card">
            <div className="value-icon"><FaUsers className="icon" /></div>
            <h3>Student Focused</h3>
            <p>We systematically prioritize long-term student success, community, and career placement.</p>
          </div>
          <div className="value-card">
            <div className="value-icon"><FaLightbulb className="icon" /></div>
            <h3>Innovation</h3>
            <p>Leveraging bleeding-edge interactive platforms to maximize concept retention.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Team Section */}
    <section className="team-section">
      <div className="container">
        <div className="section-header">
          <h2>Meet Our Team</h2>
          <p className="section-subtitle">The driving force behind InternCourse innovation</p>
          <div className="accent-line"></div>
        </div>
        <div className="team-grid">
          {teamMembers.map((member) => <TeamMember key={member.name} member={member} />)}
        </div>
      </div>
    </section>
  </div>
);

export default AboutUs;