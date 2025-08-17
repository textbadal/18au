import React, { useState } from 'react';
import './Hr.css'; // Import the CSS file for styling

const Hr = () => {
  // State to manage the selected role
  const [selectedRole, setSelectedRole] = useState('hrGeneralist');

  // Role-specific data
  const roles = {
    hrGeneralist: {
      title: 'HR Generalist',
      description: 'Join our team as an HR Generalist and play a key role in managing HR operations, including recruitment, employee relations, and performance management. This is a full-time position with opportunities for growth and development.',
      image: '/images/hr-generalist.jpg',
      details: {
        experience: '2-5 Years',
        salary: '₹6-10 LPA',
        location: 'On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Bachelor’s degree in HR or related field. Strong communication and organizational skills are essential.',
        skills: ['Recruitment', 'Employee Relations', 'Performance Management', 'HR Policies', 'Compliance'],
        responsibilities: [
          'Manage end-to-end recruitment processes, from job posting to onboarding.',
          'Handle employee relations, including conflict resolution and grievance management.',
          'Oversee performance management systems and conduct appraisals.',
          'Ensure compliance with labor laws and company HR policies.',
          'Maintain employee records and HR databases.',
        ],
        benefits: [
          'Competitive salary and performance-based bonuses.',
          'Health insurance and wellness programs.',
          'Opportunities for professional development and training.',
          'Collaborative and inclusive work environment.',
        ],
      },
    },
    recruitmentSpecialist: {
      title: 'Recruitment Specialist',
      description: 'As a Recruitment Specialist, you will be responsible for sourcing, screening, and onboarding top talent. This role requires excellent communication skills and a passion for connecting people with the right opportunities.',
      image: '/images/recruitment-specialist.jpg',
      details: {
        experience: '1-3 Years',
        salary: '₹4-8 LPA',
        location: 'On-site (Delhi, Mumbai, Hyderabad)',
        eligibility: 'Bachelor’s degree in HR or related field. Prior experience in recruitment is preferred.',
        skills: ['Talent Acquisition', 'Sourcing', 'Screening', 'Onboarding', 'Interviewing'],
        responsibilities: [
          'Source and attract candidates through various channels, including job portals and social media.',
          'Screen resumes and conduct initial interviews to shortlist candidates.',
          'Coordinate with hiring managers to schedule interviews and assessments.',
          'Manage the onboarding process for new hires.',
          'Maintain a pipeline of qualified candidates for future openings.',
        ],
        benefits: [
          'Competitive salary with incentives for meeting hiring targets.',
          'Flexible work hours and remote work options.',
          'Access to recruitment tools and resources.',
          'Opportunities to work with top-tier companies and candidates.',
        ],
      },
    },
    trainingAndDevelopment: {
      title: 'Training & Development Manager',
      description: 'As a Training & Development Manager, you will design and implement programs to enhance employee skills and performance. This role is ideal for someone passionate about employee growth and organizational development.',
      image: '/images/training-development.jpg',
      details: {
        experience: '3-7 Years',
        salary: '₹8-12 LPA',
        location: 'On-site (Delhi, Mumbai, Pune)',
        eligibility: 'Bachelor’s degree in HR or related field. Experience in training and development is required.',
        skills: ['Training Program Design', 'Employee Development', 'Workshop Facilitation', 'Skill Assessment', 'Leadership Training'],
        responsibilities: [
          'Design and implement employee training programs aligned with organizational goals.',
          'Conduct workshops and skill development sessions for employees.',
          'Assess training needs through surveys and performance evaluations.',
          'Develop leadership and management training modules.',
          'Evaluate the effectiveness of training programs and make improvements.',
        ],
        benefits: [
          'Competitive salary with annual performance reviews.',
          'Opportunities to attend industry conferences and workshops.',
          'Access to the latest training tools and technologies.',
          'Collaborative and innovative work culture.',
        ],
      },
    },
    compensationAndBenefits: {
      title: 'Compensation & Benefits Manager',
      description: 'Join our team as a Compensation & Benefits Manager and oversee employee compensation, benefits, and payroll processes. This role requires strong analytical skills and attention to detail.',
      image: '/images/compensation-benefits.jpg',
      details: {
        experience: '4-8 Years',
        salary: '₹10-15 LPA',
        location: 'On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Bachelor’s degree in HR or related field. Experience in compensation and benefits is required.',
        skills: ['Compensation Management', 'Benefits Administration', 'Payroll Processing', 'Salary Benchmarking', 'Employee Incentives'],
        responsibilities: [
          'Design and manage compensation structures, including salary bands and bonuses.',
          'Administer employee benefits programs, such as health insurance and retirement plans.',
          'Oversee payroll processing and ensure compliance with tax regulations.',
          'Conduct salary benchmarking and market analysis to ensure competitiveness.',
          'Develop and implement employee incentive programs.',
        ],
        benefits: [
          'Competitive salary with annual bonuses.',
          'Comprehensive health and wellness benefits.',
          'Opportunities for professional growth and development.',
          'Work in a dynamic and fast-paced environment.',
        ],
      },
    },
    hrAnalytics: {
      title: 'HR Analytics Specialist',
      description: 'As an HR Analytics Specialist, you will analyze HR data to provide insights and support decision-making. This role is ideal for someone with a strong background in data analysis and HR metrics.',
      image: '/images/hr-analytics.jpg',
      details: {
        experience: '2-5 Years',
        salary: '₹7-11 LPA',
        location: 'Remote/On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Bachelor’s degree in HR, Data Science, or related field. Proficiency in data analysis tools is required.',
        skills: ['Data Analysis', 'HR Metrics', 'Dashboard Creation', 'Predictive Analytics', 'Data Visualization'],
        responsibilities: [
          'Analyze HR data to identify trends and insights.',
          'Create dashboards and reports for HR metrics, such as employee turnover and retention.',
          'Support decision-making with predictive analytics and data-driven insights.',
          'Collaborate with HR teams to improve processes and policies.',
          'Ensure data accuracy and integrity in HR systems.',
        ],
        benefits: [
          'Competitive salary with performance-based incentives.',
          'Flexible work hours and remote work options.',
          'Access to advanced analytics tools and technologies.',
          'Opportunities to work on high-impact projects.',
        ],
      },
    },
  };

  // Get the selected role data
  const roleData = roles[selectedRole];

  return (
    <div className="job-details">
      {/* Heading */}
      <h1>Human Resource (HR) Management Jobs</h1>

      {/* Role Selection Dropdown */}
      <div className="role-selection">
        <label htmlFor="role">Select Job Role:</label>
        <select
          id="role"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="hrGeneralist">HR Generalist</option>
          <option value="recruitmentSpecialist">Recruitment Specialist</option>
          <option value="trainingAndDevelopment">Training & Development Manager</option>
          <option value="compensationAndBenefits">Compensation & Benefits Manager</option>
          <option value="hrAnalytics">HR Analytics Specialist</option>
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

export default Hr;