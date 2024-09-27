import React from "react";
import { useNavigate } from "react-router-dom";

function MealCard({ meal }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/meal/${meal.idMeal}`);
  };

  return (
    <div className="meal-card" onClick={handleClick}>
      <h3>{meal.strMeal}</h3>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
    </div>
  );
}

export default MealCard;
