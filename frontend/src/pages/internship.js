import React, { useRef, useEffect, useState } from 'react'; 
import styles from './Internship.module.css';
import { Helmet } from 'react-helmet';

// Your component code continues...


const Internship = () => {
  const internshipListRef = useRef(null);
    const internshipList = [
        {
          title: 'Python Programming',
          courseDuration: '04/06/08/12 weeks',
          image: '/images/lapin.jpg',
          registeredStudents: '4400+',
          projects: 13,
          inCharge: 'William Davis',
        },
        {
          title: 'Cyber Security Internship',
          courseDuration: '04/06/08/12 weeks',
          image: '/images/webin.jpg',
          registeredStudents: '3800+',
          projects: 10,
        },
        {
          title: 'Web Development Internship',
          courseDuration: '04/06/08/12 weeks',
          image: '/images/webint.jpg',
          registeredStudents: '5200+',
          projects: 15,
        },
        {
          title: 'App Development Internship',
          courseDuration: '04/06/08/12 weeks',
          image: '/images/appin.jpg',
          registeredStudents: '4100+',
          projects: 12,
        },
        {
          title: 'Data Science Internship',
          courseDuration: '04/06/08/12 weeks',
          image: '/images/tog.jpg',
          registeredStudents: '4700+',
          projects: 18,
        },
        {
          title: 'Machine Learning Internship',
          courseDuration: '04/06/08/12 weeks',
          image: '/images/machint.jpg',
          registeredStudents: '4500+',
          projects: 16,
        },
        {
          title: 'Artificial Intelligence',
          courseDuration: '04/06/08/12 weeks',
          image: '/images/ai.jpg',
          registeredStudents: '4000+',
          projects: 14,
        },
        {
          title: 'Graphic Design Internship',
          courseDuration: '04/06/08/12 weeks',
          image: '/images/grapin.jpg',
          registeredStudents: '3500+',
          projects: 8,
        },
        {
          title: 'UI/UX Design Internship',
          courseDuration: '04/06/08/12 weeks',
          image: '/images/ui.png',
          registeredStudents: '3700+',
          projects: 9,
        },
        {
          title: 'Digital Marketing Internship',
          courseDuration: '04/06/08/12 weeks',
          image: '/images/digital.WebP',
          registeredStudents: '3900+',
          projects: 11,
        },
        {
          title: 'Blockchain Development',
          courseDuration: '04/06/08/12 weeks',
          image: '/images/blo.jpg',
          registeredStudents: '3000+',
          projects: 7,
        },
        {
          title: 'Cloud Computing Internship',
          courseDuration: '04/06/08/12 weeks',
          image: '/images/clo.jpg',
          registeredStudents: '3400+',
          projects: 10,
        },
        {
          title: 'Big Data Internship',
          courseDuration: '04/06/08/12 weeks',
          image: '/images/bigd.png',
          registeredStudents: '3100+',
          projects: 8,
        },

        {
          title: 'Game Development Internship',
          courseDuration: '04/06/08/12 weeks',
          image: '/images/gam.jpg',
          registeredStudents: '2800+',
          projects: 6,
        },

        {
          title: 'IoT (Internet of Things)',
          courseDuration: '04/06/08/12 weeks',
          image: '/images/iot.jpg',
          registeredStudents: '3200+',
          projects: 10,
        },
        {
          title: 'Robotics Internship',
          courseDuration: '04/06/08/12 weeks',
          image: '/images/rob.jpg',
          registeredStudents: '2500+',
          projects: 5,
        },
        {
          title: 'Full-Stack Development',
          courseDuration: '04/06/08/12 weeks',
          image: '/images/full.png',
          registeredStudents: '4800+',
          projects: 20,
        },
        {
          title: 'DevOps Internship',
          courseDuration: '04/06/08/12 weeks',
          image: '/images/de.png',
          registeredStudents: '3300+',
          projects: 9,
        },
        {
          title: 'Network Engineering',
          courseDuration: '04/06/08/12 weeks',
          image: '/images/net.jpg',
          registeredStudents: '2700+',
          projects: 7,
        },
        {
          title: 'Video Editing Internship',
          courseDuration: '04/06/08/12 weeks',
          image: '/images/vi.png',
          registeredStudents: '2200+',
          projects: 6,
        },
      ];




      const testimonials = [
        {
            name: 'Ananya Sharma',
            feedback:
                'The Web Development internship was an amazing experience! I got hands-on experience and learned a lot about frontend and backend technologies.',
            profilePic: '/images/student1.jpg',
        },
        {
            name: 'Rahul Verma',
            feedback:
                'The Python Programming course exceeded my expectations. The projects were challenging but fun, and the instructor was very supportive.',
            profilePic: '/images/student2.jpg',
        },
        {
            name: 'Sneha Roy',
            feedback:
                'The Cyber Security internship gave me insights into securing networks and ethical hacking. I highly recommend it!',
            profilePic: '/images/student3.jpg',
        },
    ];




    // Sample Certificate Data
    const certificateSamples = [
      {
          title: 'Offer Letter',
          image: '/images/Offer.WebP',
      },
      {
          title: 'Internship Certificate',
          image: '/images/sus.WebP',
      },

  ];


  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);


  useEffect(() => {
    // Add click event listener to all faq cards
    document.querySelectorAll('.faq-card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('open');
        });
    });

    // Cleanup event listeners on component unmount
    return () => {
        document.querySelectorAll('.faq-card').forEach(card => {
            card.removeEventListener('click', () => {
                card.classList.toggle('open');
            });
        });
    };
}, []);
      
    return (

      
      <div className="internship-container">



<Helmet>
        <title>Internships at InternCourse - Gain Real-World Experience</title>
        <meta name="description" content="Apply for internships at InternCourse and gain hands-on experience in software development, web development, Java, Python, and more. Kickstart your career with real-world projects!" />
        <meta name="keywords" content="InternCourse internship, software development internship, web development internship, Java internship, Python internship, online internships, remote internships" />

        {/* Open Graph Meta Tags (For Social Media) */}
        <meta property="og:title" content="InternCourse - Apply for Internships & Gain Experience" />
        <meta property="og:description" content="Join our internship programs at InternCourse and work on real projects in software development, web development, Java, Python, and more." />
        <meta property="og:image" content="https://interncourse.online/images/vi.png" />
        <meta property="og:url" content="https://interncourse.online/internship" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Internships at InternCourse - Apply Now!" />
        <meta name="twitter:description" content="Looking for internships in tech? InternCourse offers hands-on experience in software and web development. Apply now!" />
        <meta name="twitter:image" content="https://interncourse.online/images/vi.png" />
        <meta name="twitter:site" content="@InternCourse" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://interncourse.online/internship" />

        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOccupationalProgram",
            "name": "Internship Program",
            "provider": {
              "@type": "Organization",
              "name": "InternCourse",
              "logo": {
                "@type": "ImageObject",
                "url": "https://interncourse.online/images/logo.png"
              }
            },
            "url": "https://interncourse.online/internship",
            "description": "Apply for internships at InternCourse and gain hands-on experience in software development, web development, Java, Python, and more.",
            "occupationalCategory": "Software Development",
            "educationalProgramMode": "online"
          })}
        </script>
      </Helmet>
      
      <h1 className={styles['internship-title']}>Available Internship Positions</h1>
      <div className={styles['internship-list']} ref={internshipListRef}>
        {internshipList.map((internship, index) => (
          <div key={index} className={styles['internship-card']}>
            <div className={styles['card-image-container']}>
              <img
                className={styles['internship-image']}
                src={internship.image}
                alt={internship.title}
              />
              <div className={styles['image-overlay']}>
                <span className={styles['overlay-text']}>Learn More</span>
              </div>
            </div>
            <div className={styles['card-content']}>
              <h2 className={styles['internship-heading']}>{internship.title}</h2>
              {internship.courseDuration && (
                <p className={styles['course-duration']}>
                  <strong>Course Duration:</strong> {internship.courseDuration}
                </p>
              )}
              <a
                href="https://forms.gle/o8QdBoNqJfKvZoaU9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={styles['register-btn']}>Register Now</button>
              </a>
            </div>
            <div className={styles['info-corner']}>
              <div className={styles['info-item']}>
                <strong>{internship.registeredStudents} students</strong>
              </div>
              <div className={styles['info-item']}>
                <strong>{internship.projects} projects</strong>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonials Section */}
      <div className={styles['testimonials-section']}>
        <h2 className={styles['testimonial-title']}>Reviews from Students</h2>
        <div className={styles['testimonials']}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles['testimonial-card']}>
              <img
                className={styles['testimonial-image']}
                src={testimonial.profilePic}
                alt={testimonial.name}
              />
              <p className={styles['testimonial-feedback']}>"{testimonial.feedback}"</p>
              <h3 className={styles['testimonial-name']}>- {testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Samples Section */}
      <div className={styles['certificate-section']}>
        <h2 className={styles['certificate-title']}>AICTE Approved Certificate</h2>
        <div className={styles['certificate-gallery']}>
          {certificateSamples.map((certificate, index) => (
            <div key={index} className={styles['certificate-card']}>
              <img
                className={styles['certificate-image']}
                src={certificate.image}
                alt={certificate.title}
              />
              <p className={styles['certificate-title']}>{certificate.title}</p>
            </div>
          ))}
        </div>
      </div>
   {/* FAQ Section */}
   <div className={styles['faq-section']}>
        <h2 className={styles['faq-title']}>Frequently Asked Questions</h2>
        <div className={styles['faqs']}>
          <div
            className={`${styles['faq-card']} ${isOpen1 ? styles.open : ''}`}
            onClick={() => setIsOpen1(!isOpen1)}
          >
            <h3 className={styles['faq-question']}>
              What is the duration of the internships?
              <span className={styles['arrow']}>{isOpen1 ? '▲' : '▼'}</span>
            </h3>
            {isOpen1 && (
              <p className={styles['faq-answer']}>
                Our internships typically last for 4, 6, 8, or 12 weeks, depending on your selected course.
              </p>
            )}
          </div>
          <div
            className={`${styles['faq-card']} ${isOpen2 ? styles.open : ''}`}
            onClick={() => setIsOpen2(!isOpen2)}
          >
            <h3 className={styles['faq-question']}>
              Do I get a certificate after completing the internship?
              <span className={styles['arrow']}>{isOpen2 ? '▲' : '▼'}</span>
            </h3>
            {isOpen2 && (
              <p className={styles['faq-answer']}>
                Yes, all participants will receive an AICTE-approved certificate upon successful completion of the internship.
              </p>
            )}
          </div>
          <div
            className={`${styles['faq-card']} ${isOpen3 ? styles.open : ''}`}
            onClick={() => setIsOpen3(!isOpen3)}
          >
            <h3 className={styles['faq-question']}>
              Are the internships online or offline?
              <span className={styles['arrow']}>{isOpen3 ? '▲' : '▼'}</span>
            </h3>
            {isOpen3 && (
              <p className={styles['faq-answer']}>
                All our internships are conducted online, allowing you to learn from the comfort of your home.
              </p>
            )}
          </div>
          <div
            className={`${styles['faq-card']} ${isOpen4 ? styles.open : ''}`}
            onClick={() => setIsOpen4(!isOpen4)}
          >
            <h3 className={styles['faq-question']}>
              Is there any prior knowledge required?
              <span className={styles['arrow']}>{isOpen4 ? '▲' : '▼'}</span>
            </h3>
            {isOpen4 && (
              <p className={styles['faq-answer']}>
                Basic knowledge in the relevant field is helpful but not mandatory. Our courses cover all necessary concepts.
              </p>
            )}
          </div>
          <div
            className={`${styles['faq-card']} ${isOpen5 ? styles.open : ''}`}
            onClick={() => setIsOpen5(!isOpen5)}
          >
            <h3 className={styles['faq-question']}>
              How can I register for an internship?
              <span className={styles['arrow']}>{isOpen5 ? '▲' : '▼'}</span>
            </h3>
            {isOpen5 && (
              <p className={styles['faq-answer']}>
                You can register by clicking the "Register Now" button under your desired internship and filling out the form.
              </p>
            )}
          </div>
        </div>
      </div>



      {/* Circular Images Section */}
      <section className={styles['circular-images-section']}>
        <h2>Registered</h2>
        <div className={styles['circular-images-container']}>
          <div className={styles['circular-image']}>
            <img src="images/AICTE.jpg" alt="AICTE" />
          </div>
          <div className={styles['circular-image']}>
            <img src="images/MCA.jpg" alt="MCA" />
          </div>
          <div className={styles['circular-image']}>
            <img src="images/BIHAR.jpg" alt="BIHAR STARTUP" />
          </div>
          <div className={styles['circular-image']}>
            <img src="images/startupind.png" alt="STARTUP INDIA" />
          </div>
          <div className={styles['circular-image']}>
            <img src="images/ISO.jpg" alt="ISO" />
          </div>
          <div className={styles['circular-image']}>
            <img src="images/MSME.jpg" alt="MSME" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Internship;