import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createRecipe } from "../api";

const RecipeForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    instructions: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createRecipe(formData);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
      <textarea name="ingredients" placeholder="Ingredients" value={formData.ingredients} onChange={handleChange} required />
      <textarea name="instructions" placeholder="Instructions" value={formData.instructions} onChange={handleChange} required />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;
