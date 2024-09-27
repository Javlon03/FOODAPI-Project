import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMealsByLetter } from "../redux/mealsSlice";
import MealCard from "./MealCard";

function MealList() {
  const dispatch = useDispatch();
  const { meals, status } = useSelector((state) => state.meals);

  useEffect(() => {
    dispatch(fetchMealsByLetter("a"));
  }, [dispatch]);

  return (
    <div className="meal-list">
      <h2>Latest Meals</h2>
      <div className="meal-grid">
        {status === "success" &&
          meals.map((meal) => <MealCard key={meal.idMeal} meal={meal} />)}
        {status === "failed" && <p>Failed to fetch meals.</p>}
      </div>
    </div>
  );
}

export default MealList;
