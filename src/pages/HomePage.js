import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero.jpg";
import "../styles/HomePage.css";


const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/api/recipes") // Adjust API URL if needed
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div
        className="hero"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <h2>Discover & Share Your Favorite Recipes</h2>
        <p>Find delicious meals, save your favorites, and share your own!</p>
        <Link to="/add-recipe" className="btn btn-light btn-lg">
          Add a Recipe
        </Link>
      </div>

      {/* Recipes Section */}
      <div className="container mt-4">
        <div className="row">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <div key={recipe.id} className="col-md-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{recipe.title}</h5>
                    <p className="card-text">{recipe.ingredients}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No recipes found. Start adding some!</p>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
