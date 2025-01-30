// Base URL for your backend API
const API_URL = "https://recipe-manager-backend-gpy3.onrender.com"; // Replace with your backend Render URL

/**
 * Fetch all recipes from the API.
 * @returns {Promise<Array>} Array of recipes.
 */
export async function fetchRecipes() {
  const response = await fetch(`${API_URL}/recipes`);
  if (!response.ok) {
    throw new Error("Failed to fetch recipes");
  }
  return response.json();
}

/**
 * Add a new recipe to the API.
 * @param {Object} recipeData - The recipe data to be added.
 * @param {string} recipeData.title - The title of the recipe.
 * @param {string} recipeData.ingredients - The ingredients of the recipe.
 * @param {string} recipeData.instructions - The instructions for the recipe.
 * @returns {Promise<Object>} The added recipe.
 */
export async function createRecipe(recipeData) {
  const response = await fetch(`${API_URL}/recipes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipeData),
  });
  if (!response.ok) {
    throw new Error("Failed to add recipe");
  }
  return response.json();
}

/**
 * Fetch details of a specific recipe by ID.
 * @param {number} id - The ID of the recipe.
 * @returns {Promise<Object>} Recipe details.
 */
export async function fetchRecipeById(id) {
  const response = await fetch(`${API_URL}/recipes/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch recipe with ID: ${id}`);
  }
  return response.json();
}

/**
 * Delete a recipe by ID.
 * @param {number} id - The ID of the recipe to delete.
 * @returns {Promise<void>}
 */
export async function deleteRecipe(id) {
  const response = await fetch(`${API_URL}/recipes/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(`Failed to delete recipe with ID: ${id}`);
  }
}

/**
 * Update an existing recipe by ID.
 * @param {number} id - The ID of the recipe to update.
 * @param {Object} recipeData - The updated recipe data.
 * @param {string} recipeData.title - The title of the recipe.
 * @param {string} recipeData.ingredients - The ingredients of the recipe.
 * @param {string} recipeData.instructions - The instructions for the recipe.
 * @returns {Promise<Object>} The updated recipe.
 */
export async function updateRecipe(id, recipeData) {
  const response = await fetch(`${API_URL}/recipes/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipeData),
  });
  if (!response.ok) {
    throw new Error(`Failed to update recipe with ID: ${id}`);
  }
  return response.json();
}
