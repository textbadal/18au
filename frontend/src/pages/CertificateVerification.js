import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import "./CertificateVerification.css";

const CertificateVerification = () => {
  const [certificateID, setCertificateID] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleVerify = async () => {
    setError(null);

    if (!certificateID.trim()) {
      setError("Please enter a valid certificate ID.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "https://backend-51k4.onrender.com/api/certificates/verify",
        { certificateIDs: [certificateID.trim()] },
        {
          timeout: 1000000, // Add timeout for better error handling
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );

      if (response.data?.length > 0) {
        navigate(`/details?ids=${certificateID}`, {
          state: { certificates: response.data },
        });
      } else {
        setError(`No certificate found with ID: ${certificateID}. Please verify the ID and try again.`);
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 
                         error.message || 
                         "An error occurred. Please try again later.";
      setError(errorMessage);
      console.error("Verification error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleVerify();
    }
  };

  return (
    <div className="certificate-verification-container">
      <Helmet>
        <title>InternCourse - Certificate Verification</title>
        <meta
          name="description"
          content="Verify your InternCourse Internship certificate details by entering the certificate ID. Check the authenticity of your certificate online."
        />
        <meta
          name="keywords"
          content="certificate verification, verify certificate, check certificate, online certificate verification, InternCourse, InternCourse Online, internship"
        />
        <meta name="author" content="InternCourse" />
        <meta property="og:title" content="Certificate Verification" />
        <meta
          property="og:description"
          content="Verify your certificate details by entering the certificate ID."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://interncourse.online/certificate-verification" />
        <meta property="og:image" content="https://interncourse.online/images/logo.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Certificate Verification",
            "description": "Verify your InternCourse Internship certificate details by entering the certificate ID.",
            "url": "https://interncourse.online/certificate-verification",
            "image": "https://interncourse.online/images/logo.png"
          })}
        </script>
      </Helmet>

      <div className="verification-card">
        <h1 className="heading">Certificate Verification</h1>
        <p className="description">
          Enter your certificate ID below to verify its authenticity and view details.
        </p>

        <div className="input-group">
          <input
            type="text"
            placeholder="Enter Certificate ID (e.g., IC25/123456)"
            value={certificateID}
            onChange={(e) => setCertificateID(e.target.value)}
            onKeyPress={handleKeyPress}
            className="certificate-input"
            disabled={loading}
            aria-label="Certificate ID input"
          />
          <button
            onClick={handleVerify}
            disabled={loading || !certificateID.trim()}
            className={`verify-btn ${loading ? "loading" : ""}`}
            aria-busy={loading}
          >
            {loading ? (
              <>
                <span className="spinner" aria-hidden="true"></span>
                Verifying...
              </>
            ) : (
              "Verify Certificate"
            )}
          </button>
        </div>

        {error && (
          <div className="error-message" role="alert">
            <svg className="error-icon" viewBox="0 0 24 24">
              <path fill="currentColor" d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" />
            </svg>
            {error}
          </div>
        )}
      </div>

      <section className="certificate-features">
        <div className="feature">
          <div className="feature-icon">🔒</div>
          <h3>Secure Verification</h3>
          <p>Our system ensures your certificate details are protected</p>
        </div>
        <div className="feature">
          <div className="feature-icon">⚡</div>
          <h3>Instant Results</h3>
          <p>Get verification results in seconds</p>
        </div>
        <div className="feature">
          <div className="feature-icon">📱</div>
          <h3>Mobile Friendly</h3>
          <p>Verify certificates from any device</p>
        </div>
      </section>

      <section className="circular-images-section">
        <h2>Registered With</h2>
        <div className="circular-images-container">
          {[
            { src: "images/AICTE.jpg", alt: "AICTE" },
            { src: "images/MCA.jpg", alt: "MCA" },
            { src: "images/BIHAR.jpg", alt: "BIHAR STARTUP" },
            { src: "images/startupind.png", alt: "STARTUP INDIA" },
            { src: "images/ISO.jpg", alt: "ISO" },
            { src: "images/MSME.jpg", alt: "MSME" }
          ].map((img, index) => (
            <div className="circular-image" key={index}>
              <img 
                src={img.src} 
                alt={img.alt} 
                loading="lazy"
                width="100"
                height="100"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-card">
            <h3>How do I verify my certificate?</h3>
            <p>Enter your certificate ID in the input field above and click "Verify Certificate." You'll receive instant results showing your certificate details.</p>
          </div>
          <div className="faq-card">
            <h3>What if my certificate is not found?</h3>
            <p>Double-check the ID for typos. If the issue persists, contact our support team with your certificate details for assistance.</p>
          </div>
          <div className="faq-card">
            <h3>Is my data secure during verification?</h3>
            <p>Yes, we use secure protocols to protect your information during the verification process.</p>
          </div>
          <div className="faq-card">
            <h3>Can I verify multiple certificates at once?</h3>
            <p>Currently, our system supports single certificate verification. For bulk verification, please contact our support team.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificateVerification;