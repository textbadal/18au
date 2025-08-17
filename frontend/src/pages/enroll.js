import React from 'react';
import styles from './Enroll.module.css'; // Correct CSS module import
import { Helmet } from 'react-helmet'; // Import Helmet for SEO
const Enroll = () => {
  // Sample data for internship programs
  const internshipPrograms = [

  
    
    {
      id: 1,
      title: 'BE/BTech/MTech Internship Program',
      description: 'Gain hands-on experience in software development, AI, and IoT projects.',
      available: 15,
      enrollLink: 'https://forms.gle/6nJ3ZRq2EHZ6Gdqv8',
      image: '/images/intern.jpg',
    },
    {
      id: 2,
      title: 'BCA/MCA Internship Program',
      description: 'Master full-stack development, cloud computing, and database management.',
      available: 10,
      enrollLink: 'https://forms.gle/TjcnyCpskHGGieo29',
      image: '/images/internship.webp',
    },
    {
      id: 3,
      title: 'BBA/MBA Internship Program',
      description: 'Enhance your business acumen with marketing, finance, and strategy insights.',
      available: 8,
      enrollLink: 'https://forms.gle/zoAojDMHC4Hz4NsXA',
      image: '/images/mba.png',
    },
    {
      id: 4,
      title: 'BCom/MCom Internship Program',
      description: 'Develop expertise in accounting, taxation, and financial analysis.',
      available: 12,
      enrollLink: 'https://forms.gle/4Ciu8PMpnJvViw376',
      image: '/images/bcom.jpg',
    },
    {
      id: 5,
      title: 'BA/BSc/MA/MSc Internship Program',
      description: 'Explore opportunities in research, content writing, and academic projects.',
      available: 20,
      enrollLink: 'https://forms.gle/G3JJ3e5A5NrspQnJ8',
      image: '/images/content.jpg',
    },
    {
      id: 7,
      title: 'Medical Internship Program',
      description: 'Gain clinical experience and work on real-world healthcare projects.',
      available: 20,
      enrollLink: 'https://forms.gle/8z6fWPJRd5wum1bv5',
      image: '/images/medical.jpg',
    },

    {
      id: 6,
      title: 'Pharmacy Internship Program',
      description: 'Work on pharmaceutical research, drug formulation, and medical trials.',
      available: 20,
      enrollLink: 'https://forms.gle/uPquouyFs9UULsTh7',
      image: '/images/pharmacy.webp',
    },
    {
      id: 8,
      title: 'Law Internship Program',
      description: 'Understand legal drafting, case research, and corporate law.',
      available: 20,
      enrollLink: 'https://forms.gle/sZADYAVrQh61zMjZA',
      image: '/images/law.jpg',
    },
    {
      id: 9,
      title: 'Architecture Internship Program',
      description: 'Gain hands-on experience in architectural design, drafting, and 3D visualization using AutoCAD and SketchUp.',
      available: 20,
      enrollLink: 'https://forms.gle/S2geZoutc5G1BdkT7',
      image: '/images/architectural.webp',
    },
    {
      id: 10,
      title: 'Hospitality and Tourism Internship Program',
      description: 'Learn hotel management, customer service, and tourism operations while gaining industry insights.',
      available: 20,
      enrollLink: 'https://forms.gle/DY9TjL3xC5sQB4fPA',
      image: '/images/Hospitality.png',
    },
    {
      id: 11,
      title: 'Media and Journalism Internship Program',
      description: 'Develop reporting, content creation, and digital media skills with practical journalism training.',
      available: 20,
      enrollLink: 'https://forms.gle/5FxcoUKVc2U73rQe9',
      image: '/images/Journalism.png',
    },
    {
      id: 12,
      title: 'Psychology Internship Program',
      description: 'Explore human behavior, counseling techniques, and mental health research in a real-world setting.',
      available: 20,
      enrollLink: 'https://forms.gle/8v4diZZgzRCQ3bdo9',
      image: '/images/psychology.jpeg',
    },
    {
      id: 13,
      title: 'Agriculture Internship Program',
      description: 'Work on sustainable farming, agribusiness, and modern agricultural techniques to improve productivity.',
      available: 20,
      enrollLink: 'https://forms.gle/nTDYBs9pB1Q2QcCA8',
      image: '/images/Agriculture.jpg',
    },
  ];






  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Internship Programs",
    "url": "https://interncourse.online/enroll",
    "description": "Join our internship programs for hands-on experience in various fields, including technology, business, and healthcare.",
    "offers": internshipPrograms.map(program => ({
      "@type": "EducationalOccupationalProgram",
      "name": program.title,
      "description": program.description,
      "provider": {
        "@type": "EducationalOrganization",
        "name": "InternCourse"
      }
    }))
  };






  

  return (
    <div className={styles.enrollContainer}>









<Helmet>
        <title>Join Our Internship Programs - Apply Now</title>
        <meta name="description" content="Apply for internship programs in software development, business, healthcare, and more. Gain hands-on experience and boost your career!" />
        <meta name="keywords" content="internship programs, IT internship, business internship, software development, hands-on learning, apply for internship" />
        <meta property="og:title" content="Join Our Internship Programs - Apply Now" />
        <meta property="og:description" content="Apply for internship programs in various fields and gain industry experience." />
        <meta property="og:image" content="https://yourwebsite.com/images/internship-banner.jpg" />
        <meta property="og:url" content="https://interncourse.online/enroll" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>






      <div className={styles.enrollContent}>
        <h1 className={styles.enrollTitle}>Join Our Internship Programs</h1>
        <p className={styles.enrollDescription}>
          Unlock your potential with hands-on experience in industry-relevant skills. Start your journey with us today!
        </p>

        {/* List of internship programs */}
        <div className={styles.programsList}>
          {internshipPrograms.map((program) => (
            <div key={program.id} className={styles.programCard}>
              {/* Program Image */}
              <div className={styles.programImageContainer}>
                <img src={program.image} alt={program.title} className={styles.programImage} />
              </div>
              <h2 className={styles.programTitle}>{program.title}</h2>
              <p className={styles.programDescription}>{program.description}</p>
              <p className={styles.programAvailability}>
                Internships Available: <span>{program.available}</span>
              </p>
              <a
                href={program.enrollLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.enrollButton}
              >
                Enroll Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Enroll;
