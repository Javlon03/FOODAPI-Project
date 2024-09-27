import { configureStore } from "@reduxjs/toolkit";
import mealsReducer from "../redux/mealsSlice";

export default configureStore({
  reducer: {
    meals: mealsReducer,
  },
});
