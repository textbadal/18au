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

  // ✅ Automatically detect backend (local or deployed)
  const API_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3002/api/certificates/verify"
      : "https://backend-51k4.onrender.com/api/certificates/verify";

  const handleVerify = async () => {
    setError(null);

    const trimmedID = certificateID.trim();
    if (!trimmedID) {
      setError("⚠️ Please enter a valid certificate ID.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        API_URL,
        { certificateIDs: [trimmedID] },
        {
          headers: { "Content-Type": "application/json" },
          timeout: 15000, // 15 seconds
        }
      );

      const data = response.data;

      if (Array.isArray(data) && data.length > 0) {
        navigate(`/details?ids=${trimmedID}`, {
          state: { certificates: data },
        });
      } else {
        setError(`❌ No certificate found with ID: ${trimmedID}`);
      }
    } catch (err) {
      console.error("Verification error:", err);
      const errorMessage =
        err.response?.data?.message ||
        "⚠️ Unable to verify certificate. Please try again later.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleVerify();
  };

  return (
    <div className="certificate-verification-container">
      <Helmet>
        <title>InternCourse - Certificate Verification</title>
        <meta
          name="description"
          content="Verify your InternCourse Internship certificate by entering the certificate ID. Check authenticity instantly."
        />
        <meta
          name="keywords"
          content="certificate verification, InternCourse certificate, verify certificate, online verification"
        />
        <meta name="author" content="InternCourse" />
        <meta property="og:title" content="Certificate Verification" />
        <meta
          property="og:description"
          content="Verify your certificate details by entering the certificate ID."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://interncourse.online/certificate-verification"
        />
        <meta
          property="og:image"
          content="https://interncourse.online/images/logo.png"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Certificate Verification",
            description:
              "Verify your InternCourse Internship certificate details by entering the certificate ID.",
            url: "https://interncourse.online/certificate-verification",
            image: "https://interncourse.online/images/logo.png",
          })}
        </script>
      </Helmet>

      <div className="verification-card">
        <h1 className="heading">Certificate Verification</h1>
        <p className="description">
          Enter your certificate ID below to verify its authenticity and view
          details.
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
              <path
                fill="currentColor"
                d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 
                0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 
                0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 
                0 0,1 12,20Z"
              />
            </svg>
            {error}
          </div>
        )}
      </div>

      <section className="certificate-features">
        <div className="feature">
          <div className="feature-icon">🔒</div>
          <h3>Secure Verification</h3>
          <p>Your certificate details are safely verified on our servers.</p>
        </div>
        <div className="feature">
          <div className="feature-icon">⚡</div>
          <h3>Instant Results</h3>
          <p>Get real-time verification results instantly.</p>
        </div>
        <div className="feature">
          <div className="feature-icon">📱</div>
          <h3>Mobile Friendly</h3>
          <p>Verify certificates from any device with ease.</p>
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
            { src: "images/MSME.jpg", alt: "MSME" },
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
            <p>
              Enter your certificate ID above and click “Verify Certificate.” You’ll
              instantly see your certificate details.
            </p>
          </div>
          <div className="faq-card">
            <h3>What if my certificate is not found?</h3>
            <p>
              Double-check your ID for typos. If still not found, contact our
              support team with your certificate details.
            </p>
          </div>
          <div className="faq-card">
            <h3>Is my data secure during verification?</h3>
            <p>Yes, all data is encrypted and securely processed.</p>
          </div>
          <div className="faq-card">
            <h3>Can I verify multiple certificates?</h3>
            <p>
              Currently, single ID verification is supported. For bulk checks,
              please contact our support.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificateVerification;
