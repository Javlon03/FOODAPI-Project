import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMealsByLetter = createAsyncThunk(
  "meals/fetchMealsByLetter",
  async (letter) => {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=a`
    );
    return response.data.meals;
  }
);

const mealsSlice = createSlice({
  name: "meals",
  initialState: {
    meals: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMealsByLetter.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMealsByLetter.fulfilled, (state, action) => {
        state.meals = action.payload;
        state.status = "success";
      })
      .addCase(fetchMealsByLetter.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default mealsSlice.reducer;
