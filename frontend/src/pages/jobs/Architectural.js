import React, { useState } from 'react';
import './Architectural.css'; // Import the CSS file for styling

const Architectural = () => {
  // State to manage the selected role
  const [selectedRole, setSelectedRole] = useState('architect');

  // Role-specific data
  const roles = {
    architect: {
      title: 'Architect',
      description: 'Join our team as an Architect and design innovative, functional, and sustainable structures. This role requires expertise in architectural design, construction, and project management.',
      image: '/images/architect.jpg',
      details: {
        experience: '3-7 Years',
        salary: '₹8-15 LPA',
        location: 'On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Bachelor’s or Master’s degree in Architecture. Proficiency in design software and knowledge of building codes is required.',
        skills: ['Architectural Design', 'AutoCAD', 'Revit', 'Sustainable Design', 'Project Management'],
        responsibilities: [
          'Develop architectural designs and blueprints for projects.',
          'Collaborate with clients to understand their requirements and vision.',
          'Ensure designs comply with building codes and regulations.',
          'Oversee construction projects to ensure adherence to design specifications.',
          'Incorporate sustainable and eco-friendly design principles.',
        ],
        benefits: [
          'Competitive salary with performance-based incentives.',
          'Opportunities to work on diverse and innovative projects.',
          'Access to advanced design tools and technologies.',
          'Collaborative and creative work environment.',
        ],
      },
    },
    interiorDesigner: {
      title: 'Interior Designer',
      description: 'As an Interior Designer, you will create functional and aesthetically pleasing interior spaces. This role requires creativity, attention to detail, and expertise in interior design principles.',
      image: '/images/interior-designer.jpg',
      details: {
        experience: '2-5 Years',
        salary: '₹5-10 LPA',
        location: 'On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Bachelor’s degree in Interior Design or related field. Proficiency in design software is required.',
        skills: ['Space Planning', '3D Modeling', 'Material Selection', 'Color Theory', 'Client Communication'],
        responsibilities: [
          'Design interior spaces that meet client needs and preferences.',
          'Create 3D models and renderings for visualization.',
          'Select materials, furniture, and decor for projects.',
          'Collaborate with architects and contractors for seamless execution.',
          'Ensure designs are functional, safe, and aesthetically pleasing.',
        ],
        benefits: [
          'Competitive salary with performance-based incentives.',
          'Opportunities to work on high-profile projects.',
          'Access to the latest design tools and technologies.',
          'Creative and collaborative work culture.',
        ],
      },
    },
    urbanPlanner: {
      title: 'Urban Planner',
      description: 'Join our team as an Urban Planner and design sustainable and efficient urban spaces. This role requires expertise in urban design, zoning regulations, and community development.',
      image: '/images/urban-planner.jpg',
      details: {
        experience: '4-8 Years',
        salary: '₹10-18 LPA',
        location: 'On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Bachelor’s or Master’s degree in Urban Planning or related field. Knowledge of zoning laws and urban development is required.',
        skills: ['Urban Design', 'GIS', 'Zoning Regulations', 'Sustainability', 'Community Engagement'],
        responsibilities: [
          'Develop plans for land use and urban development.',
          'Analyze data and trends to inform planning decisions.',
          'Ensure compliance with zoning laws and regulations.',
          'Collaborate with government agencies and stakeholders.',
          'Promote sustainable and inclusive urban development.',
        ],
        benefits: [
          'Competitive salary with annual performance reviews.',
          'Opportunities to work on impactful urban projects.',
          'Access to advanced planning tools and technologies.',
          'Collaborative and innovative work environment.',
        ],
      },
    },
    landscapeArchitect: {
      title: 'Landscape Architect',
      description: 'As a Landscape Architect, you will design outdoor spaces that are functional, sustainable, and visually appealing. This role requires expertise in landscape design and environmental planning.',
      image: '/images/landscape-architect.jpg',
      details: {
        experience: '3-6 Years',
        salary: '₹7-12 LPA',
        location: 'On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Bachelor’s or Master’s degree in Landscape Architecture. Proficiency in design software is required.',
        skills: ['Landscape Design', 'Site Planning', 'Environmental Sustainability', 'Planting Design', 'Project Management'],
        responsibilities: [
          'Design outdoor spaces, including parks, gardens, and public areas.',
          'Develop site plans and planting designs.',
          'Ensure designs are environmentally sustainable and functional.',
          'Collaborate with architects and urban planners for integrated projects.',
          'Oversee the implementation of landscape projects.',
        ],
        benefits: [
          'Competitive salary with performance-based incentives.',
          'Opportunities to work on diverse and creative projects.',
          'Access to advanced design tools and technologies.',
          'Collaborative and innovative work culture.',
        ],
      },
    },
    constructionManager: {
      title: 'Construction Manager',
      description: 'Join our team as a Construction Manager and oversee the planning, execution, and completion of construction projects. This role requires expertise in construction management and coordination.',
      image: '/images/construction-manager.jpg',
      details: {
        experience: '5-10 Years',
        salary: '₹12-20 LPA',
        location: 'On-site (Delhi, Mumbai, Bangalore)',
        eligibility: 'Bachelor’s degree in Civil Engineering or Construction Management. Experience in construction projects is required.',
        skills: ['Project Management', 'Budgeting', 'Site Supervision', 'Risk Management', 'Team Coordination'],
        responsibilities: [
          'Plan and oversee construction projects from start to finish.',
          'Manage budgets, timelines, and resources effectively.',
          'Supervise on-site construction activities and ensure quality standards.',
          'Coordinate with architects, engineers, and contractors.',
          'Ensure compliance with safety regulations and building codes.',
        ],
        benefits: [
          'Competitive salary with performance-based incentives.',
          'Opportunities to work on large-scale construction projects.',
          'Access to advanced project management tools.',
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
      <h1>Architectural Jobs</h1>

      {/* Role Selection Dropdown */}
      <div className="role-selection">
        <label htmlFor="role">Select Job Role:</label>
        <select
          id="role"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="architect">Architect</option>
          <option value="interiorDesigner">Interior Designer</option>
          <option value="urbanPlanner">Urban Planner</option>
          <option value="landscapeArchitect">Landscape Architect</option>
          <option value="constructionManager">Construction Manager</option>
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

export default Architectural;