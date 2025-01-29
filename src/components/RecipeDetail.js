import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipeById } from "../api";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetchRecipeById(id)
      .then(setRecipe)
      .catch(console.error);
  }, [id]);

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mt-5">
      {/* Recipe Image */}
      <img
        src={recipe.image || "https://via.placeholder.com/600"}
        alt={recipe.title}
        className="img-fluid mb-4"
        style={{ borderRadius: "8px" }}
      />

      {/* Recipe Title */}
      <h2 className="text-center">{recipe.title}</h2>

      {/* Ingredients */}
      <div className="mt-4 p-3 bg-light rounded">
        <h4>Ingredients</h4>
        <ul>
          {recipe.ingredients.split(",").map((item, index) => (
            <li key={index}>{item.trim()}</li>
          ))}
        </ul>
      </div>

      {/* Instructions */}
      <div className="mt-4 p-3 bg-white shadow-sm rounded">
        <h4>Instructions</h4>
        <p>{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;
