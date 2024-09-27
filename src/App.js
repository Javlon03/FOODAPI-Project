import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MealList from "./components/MealList";
import MealDetail from "./components/MealDetail";
import MainBanner from "./components/MainBanner";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  return (
    <Router>
      <Header />
      <MainBanner />
      <Routes>
        <Route path="/" element={<MealList />} />
        <Route path="/meal/:idMeal" element={<MealDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
