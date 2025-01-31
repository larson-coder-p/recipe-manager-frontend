import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RecipeList from "./components/RecipeList";
import RecipeForm from "./components/RecipeForm";
import About from "./components/About"; // Import About page
import Contacts from "./components/Contacts"; // Import Contacts page


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/add-recipe" element={<RecipeForm />} />
        <Route path="/about" element={<About />} /> {/* About route */}
        <Route path="/contacts" element={<Contacts />} /> {/* Contacts route */}
      </Routes>
    </Router>
  );
}

export default App;
