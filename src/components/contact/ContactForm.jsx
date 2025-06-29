import { useState } from "react";
import Button from "../common/Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container-fluid bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h1 className="fw-bold">
              SEND US A <span className="highlight">MESSAGE</span>
            </h1>
            <p className="lead">Have a project in mind? We'd love to discuss it with you!</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-5">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label
                        htmlFor="name"
                        className="form-label fw-bold"
                      >
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{ borderRadius: 0, padding: "12px" }}
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label
                        htmlFor="email"
                        className="form-label fw-bold"
                      >
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{ borderRadius: 0, padding: "12px" }}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label
                        htmlFor="phone"
                        className="form-label fw-bold"
                      >
                        PHONE NUMBER
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        style={{ borderRadius: 0, padding: "12px" }}
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label
                        htmlFor="subject"
                        className="form-label fw-bold"
                      >
                        SUBJECT
                      </label>
                      <select
                        className="form-control"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        style={{ borderRadius: 0, padding: "12px" }}
                      >
                        <option value="">Select a service</option>
                        <option value="cabinet-making">Cabinet Making</option>
                        <option value="custom-joinery">Custom Joinery</option>
                        <option value="vanities">Vanities</option>
                        <option value="tv-units">TV Units</option>
                        <option value="hair-salons">Hair Salons / Barber Shops</option>
                        <option value="shop-fitouts">Shop Fit Outs</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="form-label fw-bold"
                    >
                      MESSAGE *
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      style={{ borderRadius: 0, padding: "12px" }}
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <div className="text-center">
                    <Button
                      text="SEND MESSAGE"
                      style={{ fontSize: "1.25rem", paddingLeft: "3rem", paddingRight: "3rem" }}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
