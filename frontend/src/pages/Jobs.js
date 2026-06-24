import React from 'react';
import styles from './Jobs.module.css';

const Jobs = () => {
  const jobList = [
    {
      title: 'Campus Ambassador',
      description: 'We are looking for passionate and energetic students to promote our brand on their campus. The ideal candidate will be responsible for organizing campus events and online campaigns to increase brand awareness.',
      location: 'Campus (Remote work available)',
      type: 'Part-Time / Student Program',
      responsibilities: [
        'Promote our services on campus and social media platforms',
        'Organize workshops, events, and webinars for students',
        'Increase brand awareness and drive signups through student activities'
      ],
      qualifications: [
        'Enrolled in an active university program (undergraduate or graduate)',
        'Strong communication skills and active social media presence',
        'Outgoing, friendly, and passionate about promoting educational tech'
      ]
    },
    {
      title: 'Full Stack Developer',
      description: 'We are looking for a Full Stack Developer with experience in both front-end and back-end technologies. The ideal candidate will have knowledge of React, Node.js, MongoDB, and RESTful APIs. Knowledge of Agile methodologies is a plus.',
      location: 'Remote',
      type: 'Full-Time',
      responsibilities: [
        'Develop new user-facing features using React.js workflows',
        'Build reusable components and front-end architectural libraries',
        'Ensure the technical feasibility and optimization of UI/UX designs',
        'Collaborate with product stakeholders and design teams'
      ],
      qualifications: [
        'Bachelor’s degree in Computer Science or equivalent practical experience',
        'Proficiency with front-end technologies: React, HTML5, CSS3, ES6+',
        'Strong experience with back-end technologies like Node.js and MongoDB'
      ]
    },
    {
      title: 'UI/UX Designer',
      description: 'We are looking for a UI/UX Designer with a strong portfolio of design work and proficiency in design tools like Sketch, Figma, or Adobe XD. Experience in designing user interfaces for web and mobile applications is required.',
      location: 'Office (Patna, Bihar)',
      type: 'Full-Time / In-Office',
      responsibilities: [
        'Create and design intuitive, production-ready user interfaces',
        'Collaborate with product managers and developers to map user flows',
        'Conduct user research and prototyping to optimize the design pipeline'
      ],
      qualifications: [
        'Proven experience with interactive wireframing and responsive prototyping',
        'Advanced proficiency in Figma, Sketch, or Adobe XD workflows',
        'Strong understanding of clean, user-centered accessibility guidelines'
      ]
    },
    {
      title: 'Mobile App Developer',
      description: 'Join our team as a Mobile App Developer. We are looking for someone experienced in Android and iOS app development with a focus on user experience and performance.',
      location: 'Remote',
      type: 'Full-Time',
      responsibilities: [
        'Develop high-quality mobile applications for both iOS and Android frameworks',
        'Work closely with design and backend teams to implement native APIs',
        'Ensure clean performance, quality rendering, and responsive application engines'
      ],
      qualifications: [
        'Experience in cross-platform mobile development using React Native or Flutter',
        'Proficiency in building, profiling, and deploying builds to App Stores',
        'Solid foundation using modern version control systems like Git'
      ]
    },
    {
      title: 'Marketing Executive',
      description: 'We are seeking a Marketing Executive who will develop and execute marketing campaigns to promote our services and enhance our brand visibility.',
      location: 'Remote',
      type: 'Full-Time',
      responsibilities: [
        'Plan and execute organic and paid digital marketing campaigns',
        'Monitor and optimize conversion metrics across social media, email, and SEO',
        'Analyze marketing trends and consumer performance loops to refine metrics'
      ],
      qualifications: [
        'Bachelor’s degree in Marketing, Business Administration, or related field',
        'Hands-on experience managing social, organic SEO, and automated email channels',
        'Strong analytical skills with modern marketing analytics dashboards'
      ]
    },
    {
      title: 'Social Media Marketing Specialist',
      description: 'We are looking for a Social Media Marketing Specialist to manage and grow our presence across various social media platforms. The ideal candidate will create engaging content, run campaigns, and track performance.',
      location: 'Remote',
      type: 'Full-Time',
      responsibilities: [
        'Create and curate engaging visual content across structural corporate handles',
        'Develop and deploy specialized strategies to boost community visibility',
        'Monitor, analyze, and generate technical reports on user engagement loops',
        'Moderate channels and directly engage with user feedback loops'
      ],
      qualifications: [
        'Bachelor’s degree in Marketing, Communications, or adjacent programs',
        'Proven history managing multi-channel growth loops and live tracking asset campaigns',
        'Excellent visual writing, content staging, and messaging skills',
        'Familiarity with analytics engines or distribution panels (Google Analytics, Hootsuite)'
      ]
    }
  ];

  const handleApply = (jobTitle) => {
    const email = 'info@interncourse.online';
    const subject = `Application for ${jobTitle} Position`;
    const body = `Dear Hiring Team,\n\nI am writing to apply for the ${jobTitle} position at InternCourse. Please find my resume and portfolio links attached.\n\nBest regards,\n[Your Name]`;
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className={styles['jobs-container']}>
      <header className={styles['jobs-header']}>
        <h1 className={styles['jobs-title']}>Careers at InternCourse</h1>
        <p className={styles['jobs-subtitle']}>
          Join us in empowering the next generation of tech professionals. Explore our open positions below.
        </p>
      </header>

      <div className={styles['job-list']}>
        {jobList.map((job, index) => (
          <div key={index} className={styles['job-card']}>
            <div className={styles['job-card-header']}>
              <h2 className={styles['job-title']}>{job.title}</h2>
              <div className={styles['job-meta-tags']}>
                <span className={styles['tag-location']}>📍 {job.location}</span>
                <span className={styles['tag-type']}>💼 {job.type}</span>
              </div>
            </div>
            
            <p className={styles['job-description']}>{job.description}</p>
            
            <div className={styles['job-details-grid']}>
              <div className={styles['job-section']}>
                <h3>Key Responsibilities</h3>
                <ul>
                  {job.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className={styles['job-section']}>
                <h3>Requirements & Qualifications</h3>
                <ul>
                  {job.qualifications.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles['job-footer-cta']}>
              <button className={styles['apply-btn']} onClick={() => handleApply(job.title)}>
                Apply via Email Client
              </button>
              <span className={styles['alternative-cta']}>
                Or send your resume manually to: <strong>info@interncourse.online</strong>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;