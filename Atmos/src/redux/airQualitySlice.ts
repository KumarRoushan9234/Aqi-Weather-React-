import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "9bb3b5cd33ee4875f007bd584fa0f40c";

export const getAQI = createAsyncThunk(
  "airQuality/fetchAQI",
  async ({ lat, lon }: { lat: number; lon: number }) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );
    return response.data;
  }
);

const airQualitySlice = createSlice({
  name: "airQuality",
  initialState: { data: null, status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAQI.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAQI.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getAQI.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default airQualitySlice.reducer;
