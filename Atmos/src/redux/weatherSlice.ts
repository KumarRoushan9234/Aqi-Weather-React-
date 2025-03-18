import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchWeather } from "../api/weatherAPI";

interface WeatherState {
  data: any;
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: WeatherState = { data: null, status: "idle" };

export const getWeather = createAsyncThunk("weather/getWeather", async ({ lat, lon }: { lat: number; lon: number }) => {
  return await fetchWeather(lat, lon);
});

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state) => { state.status = "loading"; })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getWeather.rejected, (state) => { state.status = "failed"; });
  },
});

export default weatherSlice.reducer;
