import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "9bb3b5cd33ee4875f007bd584fa0f40c";

export const getWeather = createAsyncThunk(
  "weather/fetchWeather",
  async ({ lat, lon }: { lat: number; lon: number }) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: { data: null, status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getWeather.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default weatherSlice.reducer;
