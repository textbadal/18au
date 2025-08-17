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
  { name: 'Mayank Jha', role: 'Software Developer', imageUrl: 'images/Mayank.WebP' },
  { name: 'Ankit Pandey', role: 'Architect', imageUrl: 'images/Ankitt.jpg'},
  { name: 'Manvi Verma', role: 'Java Developer', imageUrl: 'images/manvi.WebP'},
  { name: 'Harsh Verma', role: 'Quantity Surveyor', imageUrl: 'images/Harsh.WebP'},
  { name: 'Madhu Kumari', role: 'Recruitment Specialist', imageUrl: 'images/madhu.jpg'},
  { name: 'Garima Bajaj', role: 'Graphic Designer', imageUrl: 'images/Garima.jpg'},
];

const TeamMember = ({ member }) => (
  <div className="team-member">
    <div className="team-member-photo">
      <img src={member.imageUrl} alt={member.name} loading="lazy" />
    </div>
    <div className="team-member-info">
      <h3>{member.name}</h3>
      <p className="role">{member.role}</p>
      <p className="team-member-bio">{member.bio}</p>
    </div>
  </div>
);

const AboutUs = () => (
  <div className="about-us">
    <Helmet>
      <title>About Us - InternCourse</title>
      <meta name="description" content="Learn more about InternCourse, our mission, vision, team, and journey." />
    </Helmet>

    <section className="mission-vision">
      <div className="container">
        <h2>Our Purpose</h2>
        <div className="mission-vision-grid">
          <div className="mission-vision-card">
            <div className="card-icon"><FaRocket className="icon" /></div>
            <h3>Mission</h3>
            <p>Offer affordable, quality education that empowers learners to meet their career goals.</p>
          </div>
          <div className="mission-vision-card">
            <div className="card-icon"><FaGlobe className="icon" /></div>
            <h3>Vision</h3>
            <p>Make quality education accessible to everyone, everywhere.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="values">
      <div className="container">
        <h2>Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon"><FaGraduationCap className="icon" /></div>
            <h3>Quality</h3>
            <p>Delivering industry-relevant, high-quality content for learners.</p>
          </div>
          <div className="value-card">
            <div className="value-icon"><FaUsers className="icon" /></div>
            <h3>Student Focused</h3>
            <p>We prioritize student success, growth, and experience.</p>
          </div>
          <div className="value-card">
            <div className="value-icon"><FaLightbulb className="icon" /></div>
            <h3>Innovation</h3>
            <p>Using the latest tech and methods to enhance learning.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="team-section">
      <div className="container">
        <h2>Meet Our Team</h2>
        <p className="section-subtitle">The driving force behind InternCourse</p>
        <div className="team-grid">
          {teamMembers.map((member, i) => <TeamMember key={i} member={member} />)}
        </div>
      </div>
    </section>
  </div>
);

export default AboutUs;
