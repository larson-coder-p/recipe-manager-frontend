import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import RecipeForm from "./components/RecipeForm";
import About from "./components/About";
import Contacts from "./components/Contacts";
import LandingPage from "./pages/LandingPage";
import RecipeDetail from "./components/RecipeDetail";

import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/recipes" element={<HomePage />} />
        <Route path="/add-recipe" element={<RecipeForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />

      </Routes>
    </Router>
  );
}

export default App;
