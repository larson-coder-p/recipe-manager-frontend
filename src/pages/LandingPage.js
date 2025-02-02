import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="landing-overlay">
        <div className="text-center text-white">
          <h1 className="display-4">Welcome to Recipe Manager</h1>
          <p className="lead">Discover and share your favorite recipes in one place.</p>
          <Link to="/recipes" className="btn btn-light btn-lg mt-3">Explore Recipes</Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;