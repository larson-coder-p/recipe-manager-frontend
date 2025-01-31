import React, { useState } from "react";
import { createRecipe } from "../api";

function RecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newRecipe = {
      title,
      ingredients,
      instructions,
    };

    try {
      await createRecipe(newRecipe);
      setTitle("");
      setIngredients("");
      setInstructions("");
      setSuccess("Recipe added successfully!");
      setError("");
    } catch (err) {
      setError("Failed to add recipe. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add a New Recipe</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ingredients" className="form-label">
            Ingredients
          </label>
          <textarea
            className="form-control"
            id="ingredients"
            rows="3"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="instructions" className="form-label">
            Instructions
          </label>
          <textarea
            className="form-control"
            id="instructions"
            rows="3"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default RecipeForm;
