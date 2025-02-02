import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero.jpg";
import "../styles/HomePage.css";
import { fetchRecipes } from "../api";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes()
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  return (
    <>
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

      <div className="container mt-4">
        <div className="row">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <div key={recipe.id} className="col-md-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{recipe.title}</h5>
                    <p className="card-text">Ingredients: {recipe.ingredients}</p>
                    <Link to={`/recipes/${recipe.id}`} className="btn btn-primary">
                      View Recipe
                    </Link>
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
