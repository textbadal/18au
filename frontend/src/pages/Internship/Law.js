import React, { useState } from 'react';
import './Law.css'; // Import the CSS file for styling

const Law = () => {
  // State to manage the selected role
  const [selectedRole, setSelectedRole] = useState('corporate');

  // Role-specific data
  const roles = {
    corporate: {
      title: 'Corporate Law Internship',
      description: 'Gain hands-on experience in corporate law, including contract drafting, mergers and acquisitions, and compliance.',
      image: '/images/corporatelaw.jpg',
      details: {
        duration: '8 Weeks',
        stipend: '₹6000/month',
        location: 'Remote/On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Law students or graduates with an interest in corporate law.',
        skills: ['Contract Drafting', 'Mergers & Acquisitions', 'Corporate Compliance', 'Legal Research'],
        responsibilities: [
          'Assist in drafting and reviewing contracts.',
          'Conduct legal research on corporate laws.',
          'Support in mergers and acquisitions processes.',
          'Ensure compliance with regulatory requirements.',
        ],
      },
    },
    criminal: {
      title: 'Criminal Law Internship',
      description: 'Work on real criminal cases, assist in court proceedings, and learn about criminal defense and prosecution.',
      image: '/images/criminallaw.png',
      details: {
        duration: '6 Weeks',
        stipend: '₹5000/month',
        location: 'On-site (Delhi, Mumbai)',
        eligibility: 'Law students or graduates with an interest in criminal law.',
        skills: ['Criminal Defense', 'Case Analysis', 'Court Proceedings', 'Legal Documentation'],
        responsibilities: [
          'Assist in preparing case briefs and legal documents.',
          'Attend court proceedings and hearings.',
          'Conduct research on criminal laws and precedents.',
          'Support senior lawyers in case preparation.',
        ],
      },
    },
    humanRights: {
      title: 'Human Rights Internship',
      description: 'Contribute to human rights advocacy, research, and policy development with NGOs and legal organizations.',
      image: '/images/humanrightslaw.jpg',
      details: {
        duration: '10 Weeks',
        stipend: '₹4000/month',
        location: 'Remote/On-site (Delhi, Bangalore)',
        eligibility: 'Law students or graduates passionate about human rights.',
        skills: ['Human Rights Advocacy', 'Policy Research', 'Legal Writing', 'NGO Collaboration'],
        responsibilities: [
          'Conduct research on human rights issues.',
          'Assist in drafting policy documents and reports.',
          'Collaborate with NGOs on advocacy campaigns.',
          'Support in organizing workshops and seminars.',
        ],
      },
    },
    intellectualProperty: {
      title: 'Intellectual Property Law Internship',
      description: 'Learn about patents, trademarks, copyrights, and intellectual property rights while working with legal experts.',
      image: '/images/iplaw.jpg',
      details: {
        duration: '8 Weeks',
        stipend: '₹5500/month',
        location: 'Remote/On-site (Delhi, Hyderabad)',
        eligibility: 'Law students or graduates with an interest in intellectual property law.',
        skills: ['Patent Law', 'Trademark Registration', 'Copyright Law', 'IP Litigation'],
        responsibilities: [
          'Assist in drafting patent and trademark applications.',
          'Conduct research on intellectual property laws.',
          'Support in IP litigation and dispute resolution.',
          'Review and analyze IP-related contracts.',
        ],
      },
    },
    environmentalLaw: {
      title: 'Environmental Law Internship',
      description: 'Work on environmental law cases, policy research, and sustainability initiatives with legal organizations.',
      image: '/images/environmentallaw.jpg',
      details: {
        duration: '12 Weeks',
        stipend: '₹4500/month',
        location: 'Remote/On-site (Delhi, Mumbai, Chennai)',
        eligibility: 'Law students or graduates passionate about environmental law.',
        skills: ['Environmental Policy', 'Sustainability Advocacy', 'Legal Research', 'Case Analysis'],
        responsibilities: [
          'Conduct research on environmental laws and policies.',
          'Assist in drafting legal documents for environmental cases.',
          'Support in sustainability advocacy initiatives.',
          'Collaborate with NGOs and government agencies.',
        ],
      },
    },
    familyLaw: {
      title: 'Family Law Internship',
      description: 'Gain experience in family law, including divorce, child custody, and inheritance cases.',
      image: '/images/familylaw.jpg',
      details: {
        duration: '6 Weeks',
        stipend: '₹5000/month',
        location: 'On-site (Delhi, Mumbai)',
        eligibility: 'Law students or graduates with an interest in family law.',
        skills: ['Divorce Law', 'Child Custody', 'Inheritance Law', 'Mediation'],
        responsibilities: [
          'Assist in drafting legal documents for family law cases.',
          'Conduct research on family law precedents.',
          'Support in mediation and dispute resolution.',
          'Attend court proceedings and hearings.',
        ],
      },
    },
  };

  // Testimonials data
  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Corporate Law Intern',
      testimonial: 'This internship gave me practical exposure to corporate law. I worked on real contracts and learned from industry experts. Highly recommended!',
      image: '/images/rahul.jpg',
    },
    {
      name: 'Priya Singh',
      role: 'Human Rights Intern',
      testimonial: 'I got the opportunity to work with an NGO on human rights cases. The experience was eye-opening and helped me grow as a legal professional.',
      image: '/images/priya.jpg',
    },
    {
      name: 'Ankit Patel',
      role: 'Criminal Law Intern',
      testimonial: 'Assisting in court proceedings and working on criminal cases was an incredible learning experience. The mentorship was top-notch.',
      image: '/images/ankiti.jpg',
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
      <h1>Law Internship Program</h1>

      {/* Role Selection Dropdown */}
      <div className="role-selection">
        <label htmlFor="role">Select Role:</label>
        <select
          id="role"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="corporate">Corporate Law Intern</option>
          <option value="criminal">Criminal Law Intern</option>
          <option value="humanRights">Human Rights Intern</option>
          <option value="intellectualProperty">Intellectual Property Law Intern</option>
          <option value="environmentalLaw">Environmental Law Intern</option>
          <option value="familyLaw">Family Law Intern</option>
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

export default Law;