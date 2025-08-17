import React, { useState } from "react";
import "./RegistrationPopup.css";

const RegistrationPopup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrorMessage(""); // Clear error message on input
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.contact) {
      setErrorMessage("All fields are required.");
      return;
    }

    setIsFormSubmitted(true); // Set form as submitted

    // Create a hidden form
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "https://docs.google.com/forms/d/e/1FAIpQLSe8H2W3k0qkVYf1wT-hfIvHdVQyvHh_QzzfLJSyIp9FRCLMkA/formResponse";  // Replace with your form's action URL

    // Append form data fields
    const googleFormData = new FormData();
    googleFormData.append("entry.1000000", formData.name);  // Correct Name field ID
    googleFormData.append("entry.1000001", formData.email); // Correct Email field ID
    googleFormData.append("entry.1000002", formData.contact); // Correct Contact field ID

    for (let [key, value] of googleFormData.entries()) {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = value;
      form.appendChild(input);
    }

    // Create an invisible iframe to submit the form without redirect
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    // Append the form to the iframe and submit
    iframe.contentWindow.document.body.appendChild(form);
    form.submit();

    iframe.onload = () => {
      setFormData({ name: "", email: "", contact: "" });
      setSuccessMessage("Successfully Registered! Welcome aboard!");
      setTimeout(() => {
        onClose();
        document.body.removeChild(iframe); // Cleanup iframe
      }, 1000);
    };

    // Reset form after submission
    setFormData({ name: "", email: "", contact: "" });
    setSuccessMessage("Successfully Registered! Welcome aboard!");

    setTimeout(() => {
      onClose(); // Close popup after success
    }, 1000);
  };

  return (
    <>
      {successMessage && !isFormSubmitted && (
        <div className="success-message" role="alert" aria-live="polite">
          <h3>{successMessage}</h3>
        </div>
      )}

      <div
        className="popup-overlay"
        role="dialog"
        aria-labelledby="popup-title"
        aria-describedby="popup-desc"
      >
        <div className="popup-content" role="document">
          <button
            className="close-button"
            onClick={onClose}
            aria-label="Close Registration Popup"
          >
            &times;
          </button>
          <h2 id="popup-title">Register</h2>
          <form onSubmit={handleSubmit} aria-describedby="form-instructions">
            <p id="form-instructions">Please fill in the details below to register.</p>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact">Contact</label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                placeholder="Enter your contact number"
                required
              />
            </div>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <button
              type="submit"
              className="register-button"
              disabled={!formData.name || !formData.email || !formData.contact}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegistrationPopup;
