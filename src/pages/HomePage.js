import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../api";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  // Fetch recipes from backend
  useEffect(() => {
    fetch(`${API_URL}/recipes`)
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Welcome to Recipe Manager</h1>

      {/* Hero Section */}
      <div className="hero bg-light text-center py-5 mb-4">
        <h2>Explore & Add Your Favorite Recipes</h2>
        <p>Delicious meals, easy steps. Get started now!</p>
        <Link to="/add-recipe" className="btn btn-primary">Add a Recipe</Link>
      </div>

      {/* Display Recipes */}
      <div className="row">
        {recipes.length > 0 ? (
          recipes.map((recipe) => {
            // Generate image path dynamically
            const imagePath = `/images/${recipe.title.toLowerCase().replace(/\s+/g, '-')}.jpg`;

            return (
              <div key={recipe.id} className="col-md-4 mb-4">
                <div className="card">
                  {/* Display Recipe Image */}
                  <img
                    src={imagePath}
                    alt={recipe.title}
                    className="card-img-top"
                    onError={(e) => (e.target.src = "/images/default-recipe.jpg")} // If image not found, use default
                  />
                  <div className="card-body">
                    <h5 className="card-title">{recipe.title}</h5>
                    <p className="card-text"><strong>Ingredients:</strong> {recipe.ingredients}</p>
                    <p className="card-text"><strong>Instructions:</strong> {recipe.instructions}</p>
                    <Link to={`/recipes/${recipe.id}`} className="btn btn-info">View Recipe</Link>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center">No recipes found. Start adding some!</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
