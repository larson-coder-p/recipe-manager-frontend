import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchRecipes } from "../api";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes()
      .then((data) => {
        console.log("Fetched Recipes:", data);
        setRecipes(data);
      })
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Recipe Collection</h2>

      {/* Recipe Grid */}
      <div className="row">
        {recipes.length === 0 ? (
          <p className="text-muted">No recipes available.</p>
        ) : (
          recipes.map((recipe) => (
            <div key={recipe.id} className="col-md-4">
              <div className="card shadow-sm mb-4">
                <img
                  src={recipe.image || "https://via.placeholder.com/300"}
                  alt={recipe.title}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{recipe.title}</h5>
                  <p className="card-text">{recipe.ingredients.substring(0, 50)}...</p>
                  <Link to={`/recipes/${recipe.id}`} className="btn btn-primary">
                    View Recipe
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RecipeList;
