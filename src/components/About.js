import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">About Recipe Manager</h1>
      <div className="row">
        <div className="col-md-6">
          <h3>What is Recipe Manager?</h3>
          <p>
            Recipe Manager is your ultimate companion for discovering, sharing,
            and managing recipes. Whether you're a home cook or a professional
            chef, this platform makes it easy to save your favorite recipes and
            explore new ones.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src="/assets/about.jpg"
            alt="About Recipe Manager"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-4 text-center">
          <i className="fas fa-book fa-3x text-primary mb-3"></i>
          <h4>Organize Recipes</h4>
          <p>Save and categorize recipes for quick access.</p>
        </div>
        <div className="col-md-4 text-center">
          <i className="fas fa-users fa-3x text-primary mb-3"></i>
          <h4>Share with Others</h4>
          <p>Share your recipes with friends and the community.</p>
        </div>
        <div className="col-md-4 text-center">
          <i className="fas fa-search fa-3x text-primary mb-3"></i>
          <h4>Discover New Ideas</h4>
          <p>Find fresh and exciting recipes from all over the world.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
