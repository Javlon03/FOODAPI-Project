import React from "react";
import { FaHome, FaSearch, FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://www.themealdb.com/images/logo-small.png"
          alt="MealDB Logo"
        />
        <h1>TheMealDB</h1>
      </div>
      <nav className="nav">
        <Link to="/">
          <FaHome /> Home
        </Link>
        <a href="#">
          <FaBook /> API
        </a>
        <div className="search-bar">
          <input type="text" placeholder="Search for a meal..." />
          <button>
            <FaSearch />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
