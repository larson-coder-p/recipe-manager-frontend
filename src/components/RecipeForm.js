import React, { useState } from "react";
import { createRecipe } from "../api";

function RecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const newRecipe = {
        title,
        ingredients,
        instructions,
      };
      await createRecipe(newRecipe); // API call to add recipe
      alert("Recipe added successfully!");
      setTitle(""); // Reset form fields
      setIngredients("");
      setInstructions("");
    } catch (error) {
      console.error("Error adding recipe:", error);
      alert("Failed to add recipe.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input
          type="text"
          id="title"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="ingredients" className="form-label">Ingredients</label>
        <textarea
          id="ingredients"
          className="form-control"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="instructions" className="form-label">Instructions</label>
        <textarea
          id="instructions"
          className="form-control"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Recipe</button>
    </form>
  );
}

export default RecipeForm;
