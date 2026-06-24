import React, { useState } from 'react';
import styles from './Services.module.css';

const Services = () => {
  // State to filter services by category
  const [activeTab, setActiveTab] = useState('all');

  const servicesData = [
    // === STUDENT & CAREER ACCELERATORS (B2C) ===
    {
      id: 'corp-sim',
      category: 'students',
      icon: '🚀',
      title: 'Virtual Corporate Simulations',
      description: 'Move past generic, flat tutorials. Complete a structured 4-week industry sprint working inside simulated production environments featuring live Jira boards, GitHub pull requests, and mandatory manager review gates.',
      benefits: [
        'Production Code Collaboration Workflow',
        'Jira Sprint & Agile Management Tickets',
        'Meets University Internship Criteria',
        'Constructive Technical Peer Reviews'
      ],
      tag: 'Most Popular',
      whatsappMessage: 'Hi! I want to know more about the Virtual Corporate Simulations service.'
    },
    {
      id: 'portfolio-audit',
      category: 'students',
      icon: '🔍',
      title: 'Expert Portfolio & Project Audits',
      description: 'Get your live GitHub projects, Figma files, or technical resume directly analyzed by seasoned tech mentors currently active in enterprise companies. Uncover missing key architectural parameters.',
      benefits: [
        'Line-by-Line Code Cleanliness Assessment',
        'Figma to Production Architecture Checkups',
        'Direct Actionable Optimization Checklist',
        'Resume ATS Optimization Tuning'
      ],
      tag: 'Career Ready',
      whatsappMessage: 'Hi! I want to schedule an Expert Portfolio and Project Audit.'
    },
    
    // === CORE CORE WEB & SYSTEMS ENGINEERING ===
    {
      id: 'web-dev',
      category: 'tech',
      icon: '💻',
      title: 'Web Engineering Solutions',
      description: 'We develop robust, responsive web ecosystems engineered for peak scalability, advanced core security protocols, and optimal asset delivery tailored completely around user conversion goals.',
      benefits: [
        'Clean Component React/Next Architecture',
        'SEO-Optimized Crawling Infrastructure',
        'Fully Configured Database Architectures',
        'Interactive Responsive Screen Layouts'
      ],
      tag: 'Agency Core',
      whatsappMessage: 'Hi! I want to discuss a Web Development project with your team.'
    },
    {
      id: 'app-dev',
      category: 'tech',
      icon: '📱',
      title: 'Mobile Application Engineering',
      description: 'Deploying high-performance native and cross-platform mobile environments targeting iOS and Android platforms with fluid visual response times and robust structural rendering.',
      benefits: [
        'React Native & Flutter Hybrid Workflows',
        'Optimized Local Device Memory Caching',
        'Secure Native Device API Bridges',
        'App Store & Play Store Deployment Setup'
      ],
      tag: 'Agency Core',
      whatsappMessage: 'Hi! I want to discuss a Mobile App Development project.'
    },

    // === BUSINESS ENTERPRISE SOLUTIONS (B2B) ===
    {
      id: 'talent-pipeline',
      category: 'business',
      icon: '🤝',
      title: 'Pre-Vetted Intern Talent Pipelines',
      description: 'Skip traditional, expensive hiring overhead and sourcing bottlenecks. Secure immediate access to our top-tier 5% star graduates, fully pre-trained in production workflows and collaborative engines.',
      benefits: [
        'Immediate Access to Active Tech Achievers',
        'Eliminates Basic Developer Onboarding Times',
        'Trained in Git, Agile, and Team Environments',
        'Cost-Efficient Scalable Human Infrastructure'
      ],
      tag: 'Enterprise',
      whatsappMessage: 'Hi! We are looking to hire or partner for Pre-Vetted Intern Pipelines.'
    },
    {
      id: 'managed-outsourcing',
      category: 'business',
      icon: '🏢',
      title: 'Managed Project Outsourcing',
      description: 'Have software MVPs (Minimum Viable Products), operational dashboards, or marketing frameworks built under the strict, hands-on supervision of our senior staff engineers utilizing vetted tech talent.',
      benefits: [
        'Senior Engineer Architect Level Guidance',
        'Highly Competitive, Adaptive Project Rates',
        'Milestone-Driven Sprint Deliverables',
        'Full Transparent Progress Logs & Access'
      ],
      tag: 'Enterprise',
      whatsappMessage: 'Hi! I would like to explore outsourcing a software project to your managed teams.'
    }
  ];

  // Logic to handle category separation dynamically
  const filteredServices = activeTab === 'all'
    ? servicesData
    : servicesData.filter(service => service.category === activeTab);

  return (
    <div className={styles['services-page']}>
      {/* Hero Header Zone */}
      <header className={styles['services-header']}>
        <h1 className={styles['services-title']}>Our Services & Ecosystem</h1>
        <p className={styles['services-subtitle']}>
          At InternCourse, we bridge the gap between education and execution. Explore our interactive student simulators, core engineering solutions, and corporate talent pipelines.
        </p>
      </header>

      {/* Advanced Layout Filter Controls */}
      <div className={styles['filter-tabs']}>
        <button 
          className={`${styles['tab-btn']} ${activeTab === 'all' ? styles['tab-active'] : ''}`}
          onClick={() => setActiveTab('all')}
        >
          All Offerings
        </button>
        <button 
          className={`${styles['tab-btn']} ${activeTab === 'students' ? styles['tab-active'] : ''}`}
          onClick={() => setActiveTab('students')}
        >
          For Students
        </button>
        <button 
          className={`${styles['tab-btn']} ${activeTab === 'tech' ? styles['tab-active'] : ''}`}
          onClick={() => setActiveTab('tech')}
        >
          Tech Solutions
        </button>
        <button 
          className={`${styles['tab-btn']} ${activeTab === 'business' ? styles['tab-active'] : ''}`}
          onClick={() => setActiveTab('business')}
        >
          For Businesses
        </button>
      </div>

      {/* Dynamic Grid Layout Display */}
      <main className={styles['services-container']}>
        <div className={styles['services-grid']}>
          {filteredServices.map((service) => (
            <div key={service.id} className={styles['service-card']}>
              <div className={styles['card-accent-bar']} />
              
              <div className={styles['card-top-header']}>
                <div className={styles['service-icon-box']}>
                  <span className={styles['service-emoji']}>{service.icon}</span>
                </div>
                <span className={styles['service-tag']}>{service.tag}</span>
              </div>

              <h2 className={styles['card-title']}>{service.title}</h2>
              <p className={styles['card-description']}>{service.description}</p>
              
              <div className={styles['benefits-section']}>
                <h3>Deliverables & Expectations</h3>
                <ul className={styles['benefits-list']}>
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className={styles['benefit-item']}>
                      <span className={styles['checkmark']}>✓</span> {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href={`https://wa.me/+919304245362?text=${encodeURIComponent(service.whatsappMessage)}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles['card-action-btn']}
              >
                Inquire About Service
              </a>
            </div>
          ))}
        </div>
      </main>

      {/* Client Testimonials Matrix Block */}
      <section className={styles['testimonials-section']}>
        <h2 className={styles['testimonials-section-title']}>Validated by Industry Leaders</h2>
        <div className={styles['testimonials-grid']}>
          <div className={styles['testimonial-card']}>
            <p className={styles['testimonial-quote']}>
              "The team at InternCourse delivered a platform architectural layout that perfectly aligned with our scaling vision. Their active engineering execution was exceptional."
            </p>
            <div className={styles['author-meta']}>
              <strong className={styles['author-name']}>Priyanshu Gupta</strong>
              <span className={styles['author-role']}>CEO, TheVacay.in</span>
            </div>
          </div>

          <div className={styles['testimonial-card']}>
            <p className={styles['testimonial-quote']}>
              "Their custom talent pipeline and training cycles transformed our junior developer outreach metrics. The interns onboarding here are fast and optimized."
            </p>
            <div className={styles['author-meta']}>
              <strong className={styles['author-name']}>Sumit Saurav</strong>
              <span className={styles['author-role']}>Marketing Director</span>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Static Footer Action Banner */}
      <footer className={styles['cta-banner']}>
        <div className={styles['cta-content']}>
          <h2 className={styles['cta-heading']}>Let’s Build Something Great Together</h2>
          <p className={styles['cta-desc']}>
            Ready to scale your business operations or jumpstart your career framework? Connect with our development and mentoring management teams instantly via WhatsApp.
          </p>
          <a
            href="https://wa.me/+919304245362?text=Hi%20there!%20I%20would%20like%20to%20schedule%20a%20general%20consultation%20with%20InternCourse."
            target="_blank"
            rel="noopener noreferrer"
            className={styles['cta-primary-button']}
          >
            💬 Arrange an Optimization Consultation
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Services;