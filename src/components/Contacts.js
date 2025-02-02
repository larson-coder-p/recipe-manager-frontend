import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We’ll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Contact Us</h1>
      <div className="row mt-4">
        {/* Contact Form */}
        <div className="col-md-6">
          <h4>Send Us a Message</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control"
                placeholder="Write your message here"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info and Social Media */}
        <div className="col-md-6">
          <h4>Get in Touch</h4>
          <p>Email: contact@recipemanager.com</p>
          <p>Phone: +254 769 216 414</p>
          <p>Address: 123 Food Lane, Varsityville,Nairobi</p>

          <h4>Follow Us</h4>
          <div className="d-flex justify-content-start">
            {/* Social Media Buttons */}
            <button className="btn btn-link me-3" onClick={() => alert("Facebook coming soon!")}>
              <i className="fab fa-facebook fa-2x"></i>
            </button>
            <button className="btn btn-link me-3" onClick={() => alert("Twitter coming soon!")}>
              <i className="fab fa-twitter fa-2x"></i>
            </button>
            <button className="btn btn-link" onClick={() => alert("Instagram coming soon!")}>
              <i className="fab fa-instagram fa-2x"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
