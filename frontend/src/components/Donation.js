import React, { useState } from 'react';
import './Donation.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaHandHoldingHeart, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const Donation = () => {
  // FAQ state management
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Where exactly will my money go?",
      answer: "100% of your donation goes directly toward educational resources including textbooks, school supplies, tuition assistance, and skill-building programs for underprivileged students. We maintain complete transparency through detailed financial reports and regular updates showing exactly how funds are allocated."
    },
    {
      question: "How can I verify the legitimacy of this initiative?",
      answer: "We are a registered nonprofit with full financial accountability. You can view our registration documents, meet our team, and review our track record of successful student support cases. All donations receive official receipts, and we welcome any questions about our operations."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards, UPI payments, net banking, and digital wallets. For larger donations, we can also arrange bank transfers. All payment methods are secure and encrypted."
    },
    {
      question: "Will I get a receipt for my donation?",
      answer: "Yes, immediately after your donation is processed, you'll receive an official receipt via email that you can use for tax purposes. For recurring donations, you'll receive a consolidated receipt at the end of the financial year."
    }
  ];

  const imageSliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
    cssEase: 'linear'
  };

  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false
  };

  const sliderImages = [
    "/images/don.jpg",
    "/images/dono.jpg",
    "/images/donation3.jpg",
    "/images/donation4.jpg",
  ];

  return (
    <div className="donation-container">
  <div className="hero-section">
    <Slider {...imageSliderSettings} className="top-image-slider">
      {sliderImages.map((src, index) => (
        <div key={index} className="slider-slide">
          <img src={src} alt={`Donation ${index + 1}`} className="slider-image" />
          <div className="slider-overlay" />
          <div className="slider-caption">
           <a  href="https://forms.gle/vYqiToAXPdHEWKdE7" className="cta-button">
              Donate Now <FiArrowRight />
            </a>
          </div>
        </div>
      ))}
    </Slider>
  </div>

      <section className="why-donate">
        <div className="section-header">
          <h2>Why Donate?</h2>
          <p className="section-subtitle">Your contribution makes a real difference</p>
        </div>
        <div className="reasons">
          <div className="reason-box">
            <div className="reason-icon">
              <FaShieldAlt />
            </div>
            <h3>100% Transparent</h3>
            <p>Your funds go directly to student needs like books, classes, and mentorship with complete financial transparency.</p>
          </div>
          <div className="reason-box">
            <div className="reason-icon">
              <FaHandHoldingHeart />
            </div>
            <h3>Verified Cases</h3>
            <p>We thoroughly verify each student's background and needs before approving any support requests.</p>
          </div>
          <div className="reason-box">
            <div className="reason-icon">
              <FaChartLine />
            </div>
            <h3>Impact Reports</h3>
            <p>Receive personalized updates showing exactly how your donation helped change a student's life.</p>
          </div>
        </div>
      </section>

      <section className="goal-progress">
        <div className="section-header">
          <h2>Our Current Campaign</h2>
          <p className="section-subtitle">Help us reach our goal to support student education</p>
        </div>
        <div className="progress-container">
          <div className="progress-stats">
            <div className="raised-amount">
              <span className="amount">₹68,000</span>
              <span className="label">Raised</span>
            </div>
            <div className="target-amount">
              <span className="amount">₹1,00,000</span>
              <span className="label">Goal</span>
            </div>
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar-fill" style={{ width: "68%" }}>
              <span className="progress-text">68% Complete</span>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="section-header">
          <h2>What Our Donors Say</h2>
          <p className="section-subtitle">Hear from those who've made an impact</p>
        </div>
        <Slider {...testimonialSettings} className="testimonial-slider">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="quote-icon">"</div>
              <p>“Supporting this cause was one of the best decisions I made. I got regular updates and felt truly involved in a student's journey.”</p>
              <div className="donor-info">
                <h4>Riya Sharma</h4>
                <span className="donor-role">Monthly Donor</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="quote-icon">"</div>
              <p>“I loved how transparent and easy the donation process was. Highly recommend to anyone looking to make a real impact.”</p>
              <div className="donor-info">
                <h4>Arjun Patel</h4>
                <span className="donor-role">First-time Donor</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="quote-icon">"</div>
              <p>“Within weeks, I received an email showing how my donation was used. It's rare to see this level of honesty.”</p>
              <div className="donor-info">
                <h4>Sneha Verma</h4>
                <span className="donor-role">Corporate Sponsor</span>
              </div>
            </div>
          </div>
        </Slider>
      </section>

    

      <section className="impact-section">
        <div className="section-header">
          <h2>Your Impact in Numbers</h2>
          <p className="section-subtitle">See what we've achieved together with donor support</p>
        </div>
        <div className="impact-stats">
          <div className="stat-item">
            <div className="stat-number">142+</div>
            <div className="stat-label">Students Supported</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">₹3.8L+</div>
            <div className="stat-label">Raised to Date</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Success Rate</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24</div>
            <div className="stat-label">Schools Reached</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donation;