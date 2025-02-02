import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage"; // Home page now points to Recipe List
import RecipeForm from "./components/RecipeForm";
import About from "./components/About";
import Contacts from "./components/Contacts";
import LandingPage from "./pages/LandingPage";
import "@fortawesome/fontawesome-free/css/all.min.css";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/recipes" element={<HomePage />} /> {/* Fix: Home page now shows recipes */}
        <Route path="/add-recipe" element={<RecipeForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;
