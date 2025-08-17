// src/pages/Home.js
import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink for routing
import './Home.css';
import CertificateSample from '../components/CertificateSample';
import { Helmet } from 'react-helmet';
import Internship from "./internship"; // Ensure the correct import path
import Courses from "./Courses"; // Ensure the correct import path
import Enroll from "./enroll";

import { FaGraduationCap, FaLaptopCode, FaBriefcase, FaPalette, FaChartLine, FaUserTie, FaGlobe, FaHandshake, FaBookOpen, FaCertificate, FaClock } from 'react-icons/fa';
import { IoMdRocket } from 'react-icons/io';
import { GiSkills } from 'react-icons/gi';
import { MdScience, MdEngineering, MdBusinessCenter, MdDesignServices } from 'react-icons/md';



const Home = () => {
  const videoRef = useRef(null);

  // Toggle Play/Pause for the video
  const toggleVideo = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  useEffect(() => {
    const courseList = document.getElementById('courseList');
    // Pause the scroll on hover
    const pauseScroll = () => {
      courseList.style.animationPlayState = 'paused';
    };

    const resumeScroll = () => {
      courseList.style.animationPlayState = 'running';
    };

    courseList.addEventListener('mouseover', pauseScroll);
    courseList.addEventListener('mouseout', resumeScroll);

    return () => {
      courseList.removeEventListener('mouseover', pauseScroll);
      courseList.removeEventListener('mouseout', resumeScroll);
    };
  }, []);

  return (
    <div className="home">
      <Helmet>
        {/* Basic Meta Tags */}
        <title>InternCourse Pvt. Ltd.</title>
        <meta name="description" content="InternCourse is the leading platform for online learning, offering affordable and high-quality courses in software development, web development, Java, Python, and more. Start learning today!" />
        <meta name="keywords" content="InternCourse, Intern Course, Course Intern, Internship, Internship Certificates, online learning, e-learning, software development, Java courses, Python courses, web development, digital education, learn programming online" />
        <meta name="google-adsense-account" content="ca-pub-3362077298392685" />

        {/* Open Graph Meta Tags (for social media) */}
        <meta property="og:title" content="InternCourse - Learn Software Development & More Online" />
        <meta property="og:description" content="InternCourse offers top-quality online courses in software development, web development, Java, Python, and other tech skills. Start your learning journey today!" />
        <meta property="og:image" content="https://interncourse.online/images/head.WebP" />
        <meta property="og:url" content="https://interncourse.online" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="InternCourse" />

        {/* Twitter Card Meta Tags (for Twitter sharing) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="InternCourse - Affordable Online Courses for All" />
        <meta name="twitter:description" content="Learn software development, Java, Python, web development, and more with InternCourse. Start your online learning journey today!" />
        <meta name="twitter:image" content="https://interncourse.online/images/head.WebP" />
        <meta name="twitter:site" content="@InternCourse" />

        {/* Canonical Link (to prevent duplicate content) */}
        <link rel="canonical" href="https://interncourse.online" />

        {/* Structured Data (for rich snippets) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "InternCourse",
            "url": "https://interncourse.online",
            "logo": "https://interncourse.online/images/logo.png",
            "sameAs": [
              "https://www.facebook.com/InternCourse",
              "https://www.instagram.com/InternCourse",
              "https://twitter.com/InternCourse",
              "https://www.linkedin.com/company/interncourse"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9304245362",
              "contactType": "customer service",
              "areaServed": "IN",
              "availableLanguage": "en"
            }
          })}
        </script>
      </Helmet>


{/* Enhanced Hero Section with Icons */}
<section className="hero">
  <div className="hero-content">
    <div className="hero-image">
      <img src="/images/intern.jpg" alt="InternCourse" className="floating-image" />
      <div className="highlight-badge">
        <IoMdRocket className="badge-icon" />
        <span>12000+ Students Empowered</span>
      </div>
    </div>
    <div className="hero-text">
      <h1>Transform Your <span className="highlight">Career Path</span> with Industry Internships</h1>
      <p className="hero-subtitle">
        <FaGraduationCap className="inline-icon" /> At <strong>InternCourse</strong>, we bridge the gap between education and employment through immersive internships across 12+ high-demand fields.
      </p>
      <div className="hero-buttons">
        <a href="https://forms.gle/o8QdBoNqJfKvZoaU9" target="_blank" rel="noopener noreferrer" className="cta-button">
          <span>Apply Now</span>
          <FaHandshake className="button-icon" />
        </a>
        <a href="#fields" className="secondary-button">
          <span>Explore Programs</span>
          <FaBookOpen className="button-icon" />
        </a>
      </div>
      <div className="trust-badges">
        <div className="badge">
          <div className="icon-circle"><FaCertificate /></div>
          <span>Industry Certified</span>
        </div>
        <div className="badge">
          <div className="icon-circle"><FaUserTie /></div>
          <span>1:1 Mentorship</span>
        </div>
        <div className="badge">
          <div className="icon-circle"><FaClock /></div>
          <span>Flexible Duration</span>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Enhanced Fields Section with Icons */}
<section className="fields-section" id="fields">
  <div className="section-header">
    <h2 className="section-title">Our <span className="text-gradient">Internship Programs</span></h2>
    <p className="section-description">
      <GiSkills className="section-icon" /> Choose from specialized programs designed to give you practical, employable skills
    </p>
  </div>

  <div className="fields-grid">
    <div className="field-card">
      <div className="card-icon medical">
        <MdScience />
      </div>
      <h3>Medical & Healthcare</h3>
      <p>Clinical research, medical writing, hospital administration, and lab training programs</p>
      <ul className="card-features">
        <li><FaChartLine /> Hospital Placement Assistance</li>
        <li><FaBookOpen /> Research Publication Support</li>
        <li><MdScience /> Practical Lab Sessions</li>
      </ul>
      <a href="#contact" className="card-cta">Get Details <FaHandshake /></a>
    </div>

    <div className="field-card">
      <div className="card-icon engineering">
        <MdEngineering />
      </div>
      <h3>Engineering & Tech</h3>
      <p>Full-stack development, AI/ML, IoT, Cybersecurity, and Data Science intensive programs</p>
      <ul className="card-features">
        <li><FaLaptopCode /> Real-world Tech Projects</li>
        <li><FaGlobe /> AI Startup Challenges</li>
        <li><FaBriefcase /> Portfolio Development</li>
      </ul>
      <a href="#contact" className="card-cta">Get Details <FaHandshake /></a>
    </div>

    <div className="field-card featured">
      <div className="featured-badge">Most Popular</div>
      <div className="card-icon business">
        <MdBusinessCenter />
      </div>
      <h3>Business & Management</h3>
      <p>Digital marketing, financial analysis, HR strategies, and entrepreneurship programs</p>
      <ul className="card-features">
        <li><FaChartLine /> Live Case Studies</li>
        <li><IoMdRocket /> Startup Incubation</li>
        <li><FaGlobe /> Global Business Sims</li>
      </ul>
      <a href="#contact" className="card-cta">Get Details <FaHandshake /></a>
    </div>

    <div className="field-card">
      <div className="card-icon design">
        <MdDesignServices />
      </div>
      <h3>Creative & Design</h3>
      <p>UI/UX design, graphic design, motion graphics, and branding specialization</p>
      <ul className="card-features">
        <li><FaPalette /> Adobe Creative Suite</li>
        <li><GiSkills /> Design Thinking Workshops</li>
        <li><FaLaptopCode /> App Design Challenges</li>
      </ul>
      <a href="#contact" className="card-cta">Get Details <FaHandshake /></a>
    </div>
  </div>
</section>

{/* Enhanced Why Choose Section with Icons */}
<section className="why-best">
  <div className="section-header">
    <h2 className="section-title">Why <span className="text-gradient">InternCourse</span>?</h2>
    <p className="section-description">
      <FaGraduationCap className="section-icon" /> We don't just offer internships - we create career transformation experiences
    </p>
  </div>

  <div className="features-grid">
    <div className="feature-card">
      <div className="feature-icon"><FaLaptopCode /></div>
      <h3>Project-Based Learning</h3>
      <p>Work on real client projects that solve actual business problems, not just theoretical exercises.</p>
    </div>
    
    <div className="feature-card">
      <div className="feature-icon"><FaUserTie /></div>
      <h3>Industry Mentor Matching</h3>
      <p>Get paired with a mentor currently working in your target role at top companies.</p>
    </div>
    
    <div className="feature-card">
      <div className="feature-icon"><FaBriefcase /></div>
      <h3>Career Accelerator</h3>
      <p>Includes resume workshops, LinkedIn optimization, and mock interviews with HR professionals.</p>
    </div>
    
    <div className="feature-card">
      <div className="feature-icon"><FaGlobe /></div>
      <h3>Global Recognition</h3>
      <p>Our certificates are recognized by 100+ employers worldwide with verification portal access.</p>
    </div>
    
    <div className="feature-card">
      <div className="feature-icon"><FaHandshake /></div>
      <h3>Job Pipeline</h3>
      <p>Top performers get referred to our hiring partners with priority consideration.</p>
    </div>
    
    <div className="feature-card">
      <div className="feature-icon"><FaClock /></div>
      <h3>Lifetime Access</h3>
      <p>Continue accessing updated resources and our alumni network even after completion.</p>
    </div>
  </div>
</section>



{/* Courses Section */}
<section className="courses">
<h2>
    <a href="courses">Popular Courses</a>
  </h2>
  <div className="course-list" id="courseList">
    {/* Web Development */}
    <div className="course-item">
      <img src="/images/webdev.jpg" alt="Web Development" className="course-image" />
      <h4>Web Development</h4>
      <p>Duration: 08 Weeks</p>
      <p className="old-price">₹1499</p>
      <p className="new-price">₹899</p>
      <a href="/course-details/web-development" className="details-link">More Details</a>
    </div>

    {/* Revit */}
    <div className="course-item">
      <img src="/images/revit.jpg" alt="Revit" className="course-image" />
      <h4>Revit</h4>
      <p>Duration: 08 Weeks</p>
      <p className="old-price">₹1499</p>
      <p className="new-price">₹899</p>
      <a href="/course-details/revit" className="details-link">More Details</a>
    </div>

    {/* SCADA */}
    <div className="course-item">
      <img src="/images/scada.jpg" alt="SCADA" className="course-image" />
      <h4>SCADA</h4>
      <p>Duration: 08 Weeks</p>
      <p className="old-price">₹1499</p>
      <p className="new-price">₹899</p>
      <a href="/course-details/scada" className="details-link">More Details</a>
    </div>

    {/* ANSYS */}
    <div className="course-item">
      <img src="/images/ansys.jpg" alt="ANSYS" className="course-image" />
      <h4>ANSYS</h4>
      <p>Duration: 08 Weeks</p>
      <p className="old-price">₹1499</p>
      <p className="new-price">₹899</p>
      <a href="/course-details/ansys" className="details-link">More Details</a>
    </div>

    {/* Chatbot */}
    <div className="course-item">
      <img src="/images/chat.jpg" alt="Chatbot" className="course-image" />
      <h4>Chatbot</h4>
      <p>Duration: 06 Weeks</p>
      <p className="old-price">₹1499</p>
      <p className="new-price">₹899</p>
      <a href="/course-details/chatbot" className="details-link">More Details</a>
    </div>

    {/* Data Science */}
    <div className="course-item">
      <img src="/images/data.WebP" alt="Data Science" className="course-image" />
      <h4>Data Science</h4>
      <p>Duration: 08 Weeks</p>
      <p className="old-price">₹1499</p>
      <p className="new-price">₹899</p>
      <a href="/course-details/data-science" className="details-link">More Details</a>
    </div>

    {/* Artificial Intelligence */}
    <div className="course-item">
      <img src="/images/ai.jpg" alt="Artificial Intelligence" className="course-image" />
      <h4>Artificial Intelligence</h4>
      <p>Duration: 08 Weeks</p>
      <p className="old-price">₹1499</p>
      <p className="new-price">₹899</p>
      <a href="/course-details/artificial-intelligence" className="details-link">More Details</a>
    </div>

    {/* Cybersecurity */}
    <div className="course-item">
      <img src="/images/cyber.jpg" alt="Cybersecurity" className="course-image" />
      <h4>Cybersecurity</h4>
      <p>Duration: 08 Weeks</p>
      <p className="old-price">₹1499</p>
      <p className="new-price">₹899</p>
      <a href="/course-details/cybersecurity" className="details-link">More Details</a>
    </div>

    {/* Database Management */}
    <div className="course-item">
      <img src="/images/base.jpg" alt="Database Management" className="course-image" />
      <h4>Database Management</h4>
      <p>Duration: 08 Weeks</p>
      <p className="old-price">₹1499</p>
      <p className="new-price">₹899</p>
      <a href="/course-details/database-management" className="details-link">More Details</a>
    </div>

    {/* Python */}
    <div className="course-item">
      <img src="/images/python.jpg" alt="Python" className="course-image" />
      <h4>Python</h4>
      <p>Duration: 08 Weeks</p>
      <p className="old-price">₹1499</p>
      <p className="new-price">₹899</p>
      <a href="/course-details/python" className="details-link">More Details</a>
    </div>

    {/* Java */}
    <div className="course-item">
      <img src="/images/java.jpg" alt="Java" className="course-image" />
      <h4>Java</h4>
      <p>Duration: 08 Weeks</p>
      <p className="old-price">₹1499</p>
      <p className="new-price">₹899</p>
      <a href="/course-details/java" className="details-link">More Details</a>
    </div>

    {/* C++ */}
    <div className="course-item">
      <img src="/images/cp.jpg" alt="C++" className="course-image" />
      <h4>C++</h4>
      <p>Duration: 08 Weeks</p>
      <p className="old-price">₹1499</p>
      <p className="new-price">₹899</p>
      <a href="/course-details/cpp" className="details-link">More Details</a>
    </div>

    {/* C Programming */}
    <div className="course-item">
      <img src="/images/c.jpg" alt="C Programming" className="course-image" />
      <h4>C Programming</h4>
      <p>Duration: 08 Weeks</p>
      <p className="old-price">₹1499</p>
      <p className="new-price">₹899</p>
      <a href="/course-details/c-programming" className="details-link">More Details</a>
    </div>

    {/* JavaScript */}
    <div className="course-item">
      <img src="/images/script.jpg" alt="JavaScript" className="course-image" />
      <h4>JavaScript</h4>
      <p>Duration: 08 Weeks</p>
      <p className="old-price">₹1499</p>
      <p className="new-price">₹899</p>
      <a href="/course-details/javascript" className="details-link">More Details</a>
    </div>

    {/* STAAD PRO */}
    <div className="course-item">
      <img src="/images/staad.jpg" alt="STAAD PRO" className="course-image" />
      <h4>STAAD PRO</h4>
      <p>Duration: 08 Weeks</p>
      <p className="old-price">₹1499</p>
      <p className="new-price">₹899</p>
      <a href="/course-details/staad-pro" className="details-link">More Details</a>
    </div>

    {/* ETABS */}
    <div className="course-item">
      <img src="/images/etabs.jpg" alt="ETABS" className="course-image" />
      <h4>ETABS</h4>
      <p>Duration: 08 Weeks</p>
      <p className="old-price">₹1499</p>
      <p className="new-price">₹899</p>
      <a href="/course-details/etabs" className="details-link">More Details</a>
    </div>

    {/* BIM */}
    <div className="course-item">
      <img src="/images/bim.jpg" alt="BIM" className="course-image" />
      <h4>BIM</h4>
      <p>Duration: 08 Weeks</p>
      <p className="old-price">₹1499</p>
      <p className="new-price">₹899</p>
      <a href="/course-details/bim" className="details-link">More Details</a>
    </div>

    {/* AutoCAD */}
    <div className="course-item">
      <img src="/images/autocad-2016-1.jpg" alt="AutoCAD" className="course-image" />
      <h4>AutoCAD</h4>
      <p>Duration: 08 Weeks</p>
      <p className="old-price">₹1499</p>
      <p className="new-price">₹899</p>
      <a href="/course-details/autocad" className="details-link">More Details</a>
    </div>

    {/* MATLAB */}
    <div className="course-item">
      <img src="/images/mat.jpg" alt="MATLAB" className="course-image" />
      <h4>MATLAB</h4>
      <p>Duration: 08 Weeks</p>
      <p className="old-price">₹1499</p>
      <p className="new-price">₹899</p>
      <a href="/course-details/matlab" className="details-link">More Details</a>
    </div>

    {/* IOT */}
    <div className="course-item">
      <img src="/images/iot.jpg" alt="IOT" className="course-image" />
      <h4>IOT</h4>
      <p>Duration: 08 Weeks</p>
      <p className="old-price">₹1499</p>
      <p className="new-price">₹899</p>
      <a href="/course-details/iot" className="details-link">More Details</a>
    </div>

    {/* HVAC */}
    <div className="course-item">
      <img src="/images/hvac.jpg" alt="HVAC" className="course-image" />
      <h4>HVAC</h4>
      <p>Duration: 08 Weeks</p>
      <p className="old-price">₹1499</p>
      <p className="new-price">₹899</p>
      <a href="/course-details/hvac" className="details-link">More Details</a>
    </div>

    {/* CATIA */}
    <div className="course-item">
      <img src="/images/catia.jpg" alt="CATIA" className="course-image" />
      <h4>CATIA</h4>
      <p>Duration: 08 Weeks</p>
      <p className="old-price">₹1499</p>
      <p className="new-price">₹899</p>
      <a href="/course-details/catia" className="details-link">More Details</a>
    </div>

    {/* SOLIDWORKS */}
    <div className="course-item">
      <img src="/images/solid.jpg" alt="SOLIDWORKS" className="course-image" />
      <h4>SOLIDWORKS</h4>
      <p>Duration: 08 Weeks</p>
      <p className="old-price">₹1499</p>
      <p className="new-price">₹899</p>
      <a href="/course-details/solidworks" className="details-link">More Details</a>
    </div>
  </div>
</section>




<Internship />





 <section className="demo-classes-section">
  <h2 className="demo-classes-title">Demo Classes</h2>
  <div className="demo-classes-container">
    <div className="demo-class-card">
      <div className="video-wrapper">
        <video className="demo-class-video" ref={videoRef} controls>
          <source src="/videos/demo1.mp4" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      <p className="demo-class-name">Class 0: Introduction to ANSYS</p>
      <button className="demo-class-button" onClick={toggleVideo}>
        Play/Pause
      </button>
    </div>
    <div className="demo-class-card">
      <div className="video-wrapper">
        <video className="demo-class-video" ref={videoRef} controls>
          <source src="/videos/demo2.mp4" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      <p className="demo-class-name">Class 0: Introduction to STAAD.PRO</p>
      <button className="demo-class-button" onClick={toggleVideo}>
        Play/Pause
      </button>
    </div>
  </div>
</section>




<Enroll />

    

{/* Add the Courses Section Here */}
<Courses />


    <section className="circular-images-section">
      <h2>Registered </h2> {/* Optional heading */}
      <div className="circular-images-container">
        <div className="circular-image">
          <img src="images/AICTE.jpg" alt="AICTE" />
        </div>
        <div className="circular-image">
          <img src="images/MCA.jpg" alt="MCA" />
        </div>
        <div className="circular-image">
          <img src="images/BIHAR.jpg" alt="BIHAR STARTUP" />
        </div>
        <div className="circular-image">
          <img src="images/startupind.png" alt="STARTUP INDIA" />
        </div>


        <div className="circular-image">
          <img src="images/ISO.jpg" alt="ISO" />
        </div>
        <div className="circular-image">
          <img src="images/MSME.jpg" alt="MSME" />
      
        </div>
        {/* Add more circular images as needed */}
      </div>
    </section>



      
    </div>
  );
};

export default Home;
