import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../api";

const RecipeDetail = () => {
  const { id } = useParams(); 
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const response = await fetch(`${API_URL}/recipes/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch recipe details");
        }
        const data = await response.json();
        setRecipe(data);
      } catch (err) {
        console.error("Error fetching recipe:", err);
        setError("Failed to load recipe details.");
      }
    }

    fetchRecipe();
  }, [id]);

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  }

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center">{recipe.title}</h2>
      <div className="mt-4 p-3 bg-light rounded">
        <h4>Ingredients</h4>
        <ul>
          {recipe.ingredients.split(",").map((item, index) => (
            <li key={index}>{item.trim()}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4 p-3 bg-white shadow-sm rounded">
        <h4>Instructions</h4>
        <p>{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;
