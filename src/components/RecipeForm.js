import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createRecipe } from "../api";

const RecipeForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    instructions: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createRecipe(formData);
      setMessage("Recipe added successfully!");
      setFormData({
        title: "",
        ingredients: "",
        instructions: "",
      });
    } catch (error) {
      setMessage("Failed to add recipe. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Add a New Recipe</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
            {message && (
              <div
                className={`alert ${
                  message.includes("success") ? "alert-success" : "alert-danger"
                }`}
                role="alert"
              >
                {message}
              </div>
            )}
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Recipe Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter recipe title"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="ingredients" className="form-label">
                Ingredients
              </label>
              <textarea
                id="ingredients"
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                className="form-control"
                placeholder="List ingredients, separated by commas"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="instructions" className="form-label">
                Instructions
              </label>
              <textarea
                id="instructions"
                name="instructions"
                value={formData.instructions}
                onChange={handleChange}
                className="form-control"
                placeholder="Describe the preparation steps"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Add Recipe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecipeForm;
