const API_URL = "https://recipe-manager-backend-gpy3.onrender.com";

export async function fetchRecipes() {
  const response = await fetch(`${API_URL}/recipes`);
  return response.json();
}

export async function fetchRecipeById(id) {
  const response = await fetch(`${API_URL}/recipes/${id}`);
  if (!response.ok) {
    throw new Error(`Error fetching recipe with ID ${id}`);
  }
  return response.json();
}

export async function createRecipe(recipeData) {
  const response = await fetch(`${API_URL}/recipes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(recipeData),
  });
  return response.json();
}
