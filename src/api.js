const API_URL = "https://recipe-manager-backend-gpy3.onrender.com"; 



export async function fetchRecipes() {
  const response = await fetch(`${API_URL}/recipes`);
  if (!response.ok) {
    throw new Error("Failed to fetch recipes");
  }
  return response.json();
}

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

// Export API_URL to fix import issues
export { API_URL };
