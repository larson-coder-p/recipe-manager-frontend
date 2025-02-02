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
      <h1 className="text-center mb-4">Contact Us</h1>
      <div className="row mt-4">
        {/* Contact Form */}
        <div className="col-md-6">
          <h4 className="mb-3">Send Us a Message</h4>
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
            <button type="submit" className="btn btn-primary w-100">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info and Social Media */}
        <div className="col-md-6">
          <h4 className="mb-3">Get in Touch</h4>
          <p>
            <strong>Email:</strong> contact@recipemanager.com
          </p>
          <p>
            <strong>Phone:</strong> +254 769 216 414
          </p>
          <p>
            <strong>Address:</strong> 123 Food Lane, Varsityville, Nairobi
          </p>

          <h4 className="mt-4">Follow Us</h4>
          <div className="d-flex mt-2">
            <button
              className="btn btn-link me-3"
              onClick={() => alert("Facebook coming soon!")}
              title="Visit our Facebook page"
            >
              <i className="fab fa-facebook fa-2x text-primary"></i>
            </button>
            <button
              className="btn btn-link me-3"
              onClick={() => alert("Twitter coming soon!")}
              title="Visit our Twitter page"
            >
              <i className="fab fa-twitter fa-2x text-info"></i>
            </button>
            <button
              className="btn btn-link"
              onClick={() => alert("Instagram coming soon!")}
              title="Visit our Instagram page"
            >
              <i className="fab fa-instagram fa-2x text-danger"></i>
            </button>
          </div>

          {/* Google Map */}
          <div className="mt-4">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7977.972812328751!2d36.95834043923426!3d-1.1700593186354311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4098156c0543%3A0xa9688a79915d27e7!2sVarsityville%20Estate!5e0!3m2!1ssw!2ske!4v1738515921922!5m2!1ssw!2ske"
              width="100%"
              height="300"
              style={{ border: "0", borderRadius: "10px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
