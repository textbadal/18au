import React from 'react';
import './Jobs.css';  // Ensure this is correctly linked to the jobs.css file

const Jobs = () => {
  const jobList = [
    {
      title: 'Campus Ambassador',
      description: 'We are looking for passionate and energetic students to promote our brand on their campus. The ideal candidate will be responsible for organizing campus events and online campaigns to increase brand awareness.',
      location: 'Campus (Remote work available)',
      responsibilities: [
        'Promote our services on campus and social media platforms',
        'Organize workshops, events, and webinars for students',
        'Increase brand awareness and drive signups through various student activities'
      ],
      qualifications: [
        'Enrolled in a university program (undergraduate or graduate)',
        'Strong communication skills and social media presence',
        'Outgoing, friendly, and passionate about promoting technology'
      ]
    },
    {
      title: 'Full Stack Developer',
      description: 'We are looking for a Full Stack Developer with experience in both front-end and back-end technologies. The ideal candidate will have knowledge of React, Node.js, MongoDB, and RESTful APIs. Knowledge of Agile methodologies is a plus.',
      location: 'Remote',
      responsibilities: [
        'Develop new user-facing features using React',
        'Build reusable components and front-end libraries for future use',
        'Ensure the technical feasibility of UI/UX designs',
        'Collaborate with other team members and stakeholders'
      ],
      qualifications: [
        'Bachelor’s degree in Computer Science or related field',
        'Experience with front-end technologies such as React, HTML5, CSS3, and JavaScript',
        'Strong experience with back-end technologies like Node.js and MongoDB'
      ]
    },
    {
      title: 'UI/UX Designer',
      description: 'We are looking for a UI/UX Designer with a strong portfolio of design work and proficiency in design tools like Sketch, Figma, or Adobe XD. Experience in designing user interfaces for web and mobile applications is required.',
      location: 'Office (Patna, Bihar)',
      responsibilities: [
        'Create and design intuitive user interfaces',
        'Collaborate with product managers and developers to define user experiences',
        'Conduct user research and testing to enhance the design process'
      ],
      qualifications: [
        'Experience in wireframing and prototyping',
        'Proficiency in Sketch, Figma, or Adobe XD',
        'Strong understanding of user-centered design principles'
      ]
    },
    {
      title: 'Mobile App Developer',
      description: 'Join our team as a Mobile App Developer. We are looking for someone experienced in Android and iOS app development with a focus on user experience and performance.',
      location: 'Remote',
      responsibilities: [
        'Develop high-quality mobile applications for both iOS and Android platforms',
        'Work closely with the design and backend teams to ensure a seamless user experience',
        'Ensure performance, quality, and responsiveness of applications'
      ],
      qualifications: [
        'Experience in mobile development using React Native or Swift/Kotlin',
        'Proficiency in building and deploying apps for iOS and Android',
        'Experience with version control systems like Git'
      ]
    },
    {
      title: 'Marketing Executive',
      description: 'We are seeking a Marketing Executive who will develop and execute marketing campaigns to promote our services and enhance our brand visibility.',
      location: 'Remote',
      responsibilities: [
        'Plan and execute digital marketing strategies',
        'Monitor and optimize campaigns across various channels (social media, email, SEO, SEM)',
        'Analyze marketing trends and customer feedback to refine strategies'
      ],
      qualifications: [
        'Bachelor’s degree in Marketing, Business, or related field',
        'Experience in digital marketing, including social media, SEO, and email marketing',
        'Strong analytical skills and experience using marketing analytics tools'
      ]
    },
    {
      title: 'Social Media Marketing Specialist',
      description: 'We are looking for a Social Media Marketing Specialist to manage and grow our presence across various social media platforms. The ideal candidate will create engaging content, run campaigns, and track performance.',
      location: 'Remote',
      responsibilities: [
        'Create and curate engaging content for social media platforms (Facebook, Instagram, Twitter, LinkedIn)',
        'Develop and implement social media strategies to increase brand awareness and engagement',
        'Monitor, analyze, and report on social media metrics and performance',
        'Manage social media accounts and respond to customer inquiries and comments'
      ],
      qualifications: [
        'Bachelor’s degree in Marketing, Communications, or related field',
        'Proven experience in social media marketing and managing campaigns',
        'Excellent writing and communication skills',
        'Experience with social media analytics tools like Google Analytics, Hootsuite, or Buffer'
      ]
    }
  ];

  // Function to handle the "Apply Now" button click
  const handleApply = (jobTitle) => {
    const email = 'info@interncourse.online'; // Replace with your company's email
    const subject = `Application for ${jobTitle} Position`;
    const body = `Dear Hiring Team,\n\nI am writing to apply for the ${jobTitle} position at InternCourse. Please find my resume and cover letter attached.\n\nBest regards,\n[Your Name]`;
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="jobs-container">
      <h1 className="jobs-title">Available Job Positions</h1>
      <div className="job-list">
        {jobList.map((job, index) => (
          <div key={index} className="job-card">
            <h2 className="job-title">{job.title}</h2>
            <p className="job-description">{job.description}</p>
            <p className="job-location"><strong>Location:</strong> {job.location}</p>
            
            <div className="job-section">
              <h3>Responsibilities:</h3>
              <ul>
                {job.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="job-section">
              <h3>Qualifications:</h3>
              <ul>
                {job.qualifications.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <button className="apply-btn" onClick={() => handleApply(job.title)}>
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;