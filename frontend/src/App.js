import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const location = useLocation();

  // Define navLinks here
  const navLinks = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'About Us',
      path: '/about',
    },
    {
      title: 'Internship',
      path: '/internship',
    
      subLinks: [
        { title: 'BE/BTech/MTech', path: '/internship/BE/BTech/MTech' },
        { title: 'BCA/MCA', path: '/internship/BCA/MCA' },
        { title: 'BBA/MBA', path: '/internship/BBA/MBA' },
        { title: 'BCom/MCom', path: '/internship/BCom/MCom' },
        { title: 'BA/BSc/MA/MSc', path: '/internship/BA/MA/BSc/MSc' },
        { title: 'Pharmacy', path: '/internship/Pharmacy' },
        { title: 'Medical', path: '/internship/Medical' },
        { title: 'Law', path: '/internship/Law' },
        { title: 'Architecture', path: '/internship/Architecture' },
        { title: 'Hospitality and Tourism', path: '/internship/Hospitality and Tourism' },
        { title: 'Media and Journalism', path: '/internship/Media and Journalism' },
        { title: 'Psychology', path: '/internship/Psychology' },
        { title: 'Agriculture', path: '/internship/Agriculture' },
        { title: 'See More', path: '/internship' },
      ],
    },
    {
      title: 'Services',
      path: '/services',
      subLinks: [
        { title: 'Web Development', path: '/services/web-development' },
        { title: 'App Development', path: '/services/app-development' },
        { title: 'Digital Marketing', path: '/services/digital-marketing' },
      ],
    },
    {
      title: 'Jobs',
      path: '/jobs',
      subLinks: [
        { title: 'Developer Jobs', path: '/jobs/Developer Jobs' },
        { title: 'Architectural Jobs', path: '/jobs/Architectural Jobs' },
        { title: 'Marketing Jobs', path: '/jobs/Marketing Jobs' },
        { title: 'HR Jobs', path: '/jobs/HR Jobs' },
        { title: 'Content Writing Jobs', path: '/jobs/Content Writing Jobs' },
        { title: 'Graphic Design Jobs', path: '/jobs/Graphic Design Jobs' },
      ],
    },
    {
      "title": "Courses",
    
      "subLinks": [
        { "title": "Certification Courses", "path": "/courses" },
        { "title": "Web Development", "path": "/courses/WebDevelopment" },
        { "title": "Programming with Python", "path": "/courses/PythonProgramming" },
        { "title": "Digital Marketing", "path": "/courses/DigitalMarketing" },
        { "title": "Machine Learning", "path": "/courses/MachineLearning" },
        { "title": "Advanced Excel", "path": "/courses/AdvancedExcel" },
        { "title": "AutoCAD", "path": "/courses/AutoCAD" },
        { "title": "Data Science", "path": "/courses/DataScience" },
        { "title": "Programming with C and C++", "path": "/courses/CCPPProgramming" },
        { "title": "Full Stack Development Course", "path": "/courses/FullStackDevelopment" },
        { "title": "Cyber Security", "path": "/courses/CyberSecurity" },
        { "title": "Human Resource Management Course", "path": "/courses/HRManagement" },
        { "title": "Digital Marketing Course", "path": "/courses/DigitalMarketing" },
        { "title": "Electric Vehicle Course", "path": "/courses/ElectricVehicle" },
        { "title": "UI/UX Design Course", "path": "/courses/UIUXDesign" },
        { "title": "Product Management Course", "path": "/courses/ProductManagement" },
        { "title": "Financial Modelling Course", "path": "/courses/FinancialModelling" },
        { "title": "Supply Chain Logistics Course", "path": "/courses/SupplyChainLogistics" },
        { "title": "View More", "path": "/courses" }
      ]
    
    },
    {
      title: 'Verification',
      path: '/certificate-verification',
    },
    {
      title: 'Contact Us',
      path: '/contact',
    },
    {
      title: 'Login',
      path: '/login',
    },
    {
      title: 'Sign Up',
      path: '/signup',
    },
    {
      title: 'Enroll Now',
      path: '/enroll',
    },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setActiveSubMenu(null); // Reset sub-menu when toggling the main menu
  };

  const handleSubMenu = (index) => {
    setActiveSubMenu(activeSubMenu === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
    setMenuOpen(false); // Close the menu when the route changes
    setActiveSubMenu(null); // Reset sub-menu when the route changes
  }, [location.pathname]);

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src="/logo512.png" alt="InternCourse Logo" className="logo-img" />
        </div>

        {/* Nav Links */}
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link, index) => (
            <div key={index} className="nav-item">
              <Link
                to={link.path}
                className="nav-link"
                onClick={() => {
                  setMenuOpen(false);
                  if (!link.subLinks) setActiveSubMenu(null);
                }}
                onMouseEnter={() => link.subLinks && handleSubMenu(index)}
              >
                {link.title}
                {link.subLinks && (
                  <i
                    className="fas fa-caret-down dropdown-icon"
                    style={{ marginLeft: '5px', fontSize: '14px' }}
                  ></i>
                )}
              </Link>
              {link.subLinks && activeSubMenu === index && (
                <div className="sub-menu">
                  {link.subLinks.map((subLink, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subLink.path}
                      className="sub-link"
                      onClick={() => {
                        setMenuOpen(false);
                        setActiveSubMenu(null);
                      }}
                    >
                      {subLink.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Hamburger Menu */}
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-expanded={menuOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
      </nav>

     
     
     {/* Content Area */}
<Outlet />
<div className="contact-actions">
  {/* WhatsApp Icon */}
  <a
    href="https://wa.me/+919304245362"
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-icon"
    aria-label="Chat with us on WhatsApp"
  >
    <i className="fab fa-whatsapp"></i> {/* FontAwesome WhatsApp icon */}
    <span className="tooltip">Chat with us</span> {/* Tooltip */}
  </a>
</div>



{/* Footer */}
<footer className="footer">
  <div className="footer-container">
    {/* Footer Logo and Description */}
    <div className="footer-brand">
      <img src="/logo512.png" alt="InternCourse Logo" className="footer-logo" />
      <p className="footer-description">
        Empowering professionals with quality online courses. Learn from industry experts, build in-demand skills, and achieve your career goals.
      </p>
      <div className="footer-newsletter">
        <h4>Stay Updated</h4>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>

    {/* Footer Links */}
    <div className="footer-links">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="/about">About Us</a></li>
        <li><a href="/courses">Our Courses</a></li>
        <li><a href="/contact">Contact Us</a></li>
        <li><a href="/blogs">Blogs</a></li>
        <li><a href="/feedback">Testimonials</a></li>
        <li><a href="/faq">FAQs</a></li>
        <li><a href="/terms">Terms of Service</a></li>
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/jobs">Career Opportunities</a></li>
      </ul>
    </div>

    {/* Footer Resources */}
    <div className="footer-resources">
      <h4>Resources</h4>
      <ul>
        <li><a href="/certification">Certification Programs</a></li>
        <li><a href="/webinars">Webinars</a></li>
        <li><a href="/Report">E-Books</a></li>
        <li><a href="/partner">Our Partners</a></li>
        <li><a href="/ReferralProgram">Referral Program</a></li>
      </ul>
    </div>

    {/* Footer Contact */}
    <div className="footer-contact">
      <h4>Contact Us</h4>
      <div className="contact-info">
        <div className="contact-item">
          <i className="fas fa-phone-alt"></i>
          <span>+91 93042 45362</span>
        </div>
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <span>info@interncourse.online</span>
        </div>
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          <span>Saguna More, Danapur, Patna, Bihar 801503, India</span>
        </div>
      </div>
      <div className="social-links">
        <h5>Follow Us</h5>
        <div className="social-icons">
          <a href="https://x.com/07InternCourse" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/interncourse/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/interncourse/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.facebook.com/interncourse/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.youtube.com/interncourse" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="footer-bottom">
    <p>© 2025 InternCourse. All rights reserved.</p>
    <p>
      Designed by <a href="https://interncourse.online" target="_blank" rel="noopener noreferrer">InternCourse Team</a>
    </p>
  </div>
</footer>



    </div>
  );
}

export default App;
