const API_URL = "https://recipe-manager-backend-gpy3.onrender.com";

// Fetch all recipes
export async function fetchRecipes() {
  const response = await fetch(`${API_URL}/recipes`);
  if (!response.ok) {
    throw new Error("Failed to fetch recipes");
  }
  return response.json();
}

// Fetch recipe by ID
export async function fetchRecipeById(id) {
  const response = await fetch(`${API_URL}/recipes/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch recipe details");
  }
  return response.json();
}

// Create a new recipe
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

export { API_URL };
