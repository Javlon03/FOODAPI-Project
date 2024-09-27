import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MealDetail() {
  const { idMeal } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then((response) => {
        setMeal(response.data.meals[0]);
      })
      .catch((error) => {
        console.error("Error fetching meal details:", error);
      });
  }, [idMeal]);

  if (!meal) {
    return <p>Meal not found.</p>;
  }

  return (
    <div className="meal-detail">
      <h2>{meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={meal.strMeal} className="meal-image" />
      <div className="meal-info">
        <p>
          <strong>Category:</strong> {meal.strCategory}
        </p>
        <p>
          <strong>Area:</strong> {meal.strArea}
        </p>
        <p>
          <strong>Instructions:</strong> {meal.strInstructions}
        </p>
        <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer">
          Watch on YouTube
        </a>
      </div>
    </div>
  );
}

export default MealDetail;
