import React, { useState } from "react";
import "./AccessPage.css";

function AccessPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    agreement: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    // We will connect this to your backend/email service later.
    alert("Your access request has been submitted.");
  };

  return (
    <div className="access-page">

      {/* TOP BAR */}
      <div className="access-top">
        <span className="access-brand-text">Biggeneration</span>

        <div className="device-switcher">
          <span className="desktop-icon">▣</span>
          Desktop
          <span className="down-arrow">⌄</span>
        </div>

        <button className="close-button" type="button">
          ×
        </button>
      </div>

      {/* PROMO AREA */}
      <section className="promo-section">

        <div className="promo-logo">
          <img
            src="/biggeneration-logo.png"
            alt="Big Generation"
          />
        </div>

        <button className="click-button">
          Click here
        </button>

      </section>

      {/* HEADLINE */}
      <section className="access-content">

        <h1>
          MASTER FACEBOOK &amp; TIKTOK ADVERTISING AND BUILD A SKILL YOU CAN
          USE TO CREATE INCOME OPPORTUNITIES
        </h1>

        {/* EMPTY SPACE / FORM HEADER */}
        <div className="content-placeholder"></div>

        {/* FORM CARD */}
        <div className="form-card">

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label className="agreement">

              <input
                type="checkbox"
                name="agreement"
                checked={formData.agreement}
                onChange={handleChange}
              />

              <span>
                Yes, I agree to receive emails from you
              </span>

            </label>

            <button
              type="submit"
              className="access-submit"
            >
              <strong>GET ACCESS NOW</strong>
              <span>for free</span>
            </button>

          </form>

        </div>

      </section>

    </div>
  );
}

export default AccessPage;