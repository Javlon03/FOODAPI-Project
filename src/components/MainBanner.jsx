import React from "react";
import { useLocation } from "react-router-dom";

const MainBanner = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <>
      {isHomePage && (
        <div className="main-banner">
          <div className="banner-content">
            <img
              className="dish-img"
              src="https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg"
              alt="Dish"
            />
            <h2>Welcome to TheMealDB</h2>
            <p>
              Welcome to TheMealDB: An open, crowd-sourced database of Recipes
              from around the world. We also offer a{" "}
              <a
                href="https://www.themealdb.com/api.php"
                target="_blank"
                rel="noreferrer"
              >
                free recipe API
              </a>{" "}
              for anyone wanting to use it, with additional features for
              subscribers.
            </p>
            <button className="paypal-btn">PayPal</button>
            <p>
              Click button above to upgrade free Recipe API to premium. $3 a
              month and cancel anytime.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default MainBanner;
