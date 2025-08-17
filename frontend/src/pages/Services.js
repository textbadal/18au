import React from 'react';
import './services.css';  // Ensure this is correct

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      
      <div className="services-intro">
        <p className="services-description">
          At InternCourse, we provide a comprehensive suite of professional services designed to empower businesses in the digital landscape. Our team of seasoned experts delivers customized solutions tailored to your unique requirements. Discover how we can help you achieve your goals.
        </p>
      </div>

      <div className="services-list">
        {/* Web Development Service */}
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-laptop-code"></i> {/* Web development icon */}
          </div>
          <h2 className="service-title">Web Development</h2>
          <p className="service-description">
            We specialize in creating responsive, high-performance websites that align with your business objectives. From sleek personal portfolios to robust enterprise platforms, our solutions are built with cutting-edge technologies to ensure scalability, security, and an exceptional user experience.
          </p>
          <ul className="service-benefits">
            <li>Fully Responsive Design</li>
            <li>SEO-Optimized Architecture</li>
            <li>Custom Functionality Development</li>
            <li>Advanced Security Protocols</li>
            <li>Performance Optimization</li>
          </ul>
        </div>

        {/* App Development Service */}
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-mobile-alt"></i> {/* Mobile app development icon */}
          </div>
          <h2 className="service-title">App Development</h2>
          <p className="service-description">
            Our mobile app development services cater to both iOS and Android platforms, delivering intuitive and feature-rich applications. We prioritize seamless functionality, user-centric design, and cross-platform compatibility to bring your vision to life.
          </p>
          <ul className="service-benefits">
            <li>Native and Hybrid App Development</li>
            <li>User-Centric Interface Design</li>
            <li>Third-Party API Integration</li>
            <li>Ongoing Maintenance and Support</li>
            <li>Scalable and Future-Proof Solutions</li>
          </ul>
        </div>

        {/* Digital Marketing Service */}
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-bullhorn"></i> {/* Digital marketing icon */}
          </div>
          <h2 className="service-title">Digital Marketing</h2>
          <p className="service-description">
            Elevate your brand’s online presence with our data-driven digital marketing strategies. From search engine optimization (SEO) to targeted social media campaigns, we help you attract, engage, and convert your audience into loyal customers.
          </p>
          <ul className="service-benefits">
            <li>Comprehensive SEO Strategies</li>
            <li>Pay-Per-Click (PPC) Campaign Management</li>
            <li>Social Media Marketing and Advertising</li>
            <li>Content Creation and Marketing</li>
            <li>Performance Analytics and Reporting</li>
          </ul>
        </div>

        {/* UI/UX Design Service */}
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-paint-brush"></i> {/* UI/UX design icon */}
          </div>
          <h2 className="service-title">UI/UX Design</h2>
          <p className="service-description">
            We craft visually stunning and user-friendly interfaces that enhance user engagement and satisfaction. Our design process combines creativity with functionality, ensuring your digital products are both aesthetically pleasing and easy to navigate.
          </p>
          <ul className="service-benefits">
            <li>Wireframing and Prototyping</li>
            <li>User Research and Testing</li>
            <li>Interactive and Engaging Designs</li>
            <li>Branding and Visual Identity</li>
            <li>Mobile and Web Interface Design</li>
          </ul>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials">
        <h2 className="testimonials-title">Client Testimonials</h2>
        <div className="testimonial-card">
          <p className="testimonial-text">
            "The team at [Your Company Name] delivered a website that perfectly aligned with our vision. Their attention to detail and commitment to quality were exceptional."
          </p>
          <span className="testimonial-author">- Priyanshu Gupta, CEO of TheVacay.in</span>
        </div>
        <div className="testimonial-card">
          <p className="testimonial-text">
            "Their app development expertise transformed our business. The app is fast, intuitive, and has significantly improved our customer engagement."
          </p>
          <span className="testimonial-author">- Sumit Saurav, Marketing Director</span>
        </div>
      </div>

      <div className="cta-container">
  <h2 className="cta-title">Let’s Build Something Great Together</h2>
  <p className="cta-text">
    Ready to take your business to the next level? Contact us today to discuss your project and discover how we can help you achieve your goals with innovative digital solutions.
  </p>
  <a
    href="https://wa.me/+919304245362?text=Hi%20there!%20I%20would%20like%20to%20schedule%20a%20consultation."
    target="_blank"
    rel="noopener noreferrer"
    className="cta-button"
  >
    Schedule a Consultation
  </a>
</div>
    </div>
  );
};

export default Services;