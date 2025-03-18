import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAirQuality = createAsyncThunk(
  "airQuality/fetchAirQuality",
  async ({ lat, lon }: { lat: number; lon: number }) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=YOUR_API_KEY`
    );
    const data = await response.json();
    return data;
  }
);

const airQualitySlice = createSlice({
  name: "airQuality",
  initialState: {
    data: null,
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAirQuality.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAirQuality.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchAirQuality.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default airQualitySlice.reducer;
