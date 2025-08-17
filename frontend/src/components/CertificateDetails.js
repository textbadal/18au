import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./CertificateDetails.css";

// Reusable component for displaying each certificate
const CertificateCard = ({ certificate }) => (
  <div className="certificate-card">
    <p>
      <strong>Certificate ID:</strong> {certificate.certificateID}
    </p>
    <p>
      <strong>Student Name:</strong> {certificate.studentName}
    </p>
    <p>
      <strong>Registration No:</strong> {certificate.regNo}
    </p>
    <p>
      <strong>College:</strong> {certificate.college}
    </p>
    <p>
      <strong>Course Name:</strong> {certificate.courseName}
    </p>
    <p>
      <strong>Marks Obtained:</strong> {certificate.marks}
    </p>
    <p>
      <strong>Issued:</strong>{" "}
      {new Date(certificate.issueDate).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })}
    </p>
  </div>
);

// Reusable component for circular images
const CircularImages = () => (
  <section className="circular-images-section">
    <h2>Registered</h2>
    <div className="circular-images-container">
      {[
        { src: "images/AICTE.jpg", alt: "AICTE" },
        { src: "images/MCA.jpg", alt: "MCA" },
        { src: "images/BIHAR.jpg", alt: "BIHAR STARTUP" },
        { src: "images/ISO.jpg", alt: "ISO" },
        { src: "images/MSME.jpg", alt: "MSME" },
      ].map((img, index) => (
        <div key={index} className="circular-image">
          <img src={img.src} alt={img.alt} />
        </div>
      ))}
    </div>
  </section>
);

const CertificateDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [certificates, setCertificates] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Extract certificate IDs from query params
  const query = new URLSearchParams(location.search);
  const idsQuery = query.get("ids");

  useEffect(() => {
    const fetchCertificates = async () => {
      if (!idsQuery) {
        setError("No certificate IDs provided.");
        setLoading(false);
        return;
      }

      try {
        const idsArray = idsQuery.split(",");
        const response = await axios.post(
          "https://backend-51k4.onrender.com/api/certificates/verify",
          { certificateIDs: idsArray }
        );

        if (Array.isArray(response.data) && response.data.length > 0) {
          setCertificates(response.data);
        } else {
          setError("No certificates found for the provided IDs.");
        }
      } catch (err) {
        setError("Error fetching certificate data. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, [idsQuery]);

  return (
    <div className="certificate-details-container">
      <h2>Certificate Details</h2>

      {loading && <p className="loading-message">Loading...</p>}

      {error && !loading && <p className="error-message">{error}</p>}

      {!loading && !error && certificates.length > 0 && (
        certificates.map((cert, index) => (
          <CertificateCard key={index} certificate={cert} />
        ))
      )}

      <button
        className="back-btn"
        onClick={() => navigate("/certificate-verification")}
      >
        Go Back
      </button>

      <CircularImages />
    </div>
  );
};

export default CertificateDetails;
