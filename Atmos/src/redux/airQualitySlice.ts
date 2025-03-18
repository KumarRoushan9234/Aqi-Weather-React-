import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAQI } from "../api/airQualityAPI";

interface AQIState {
  data: any;
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: AQIState = { data: null, status: "idle" };

export const getAQI = createAsyncThunk("airQuality/getAQI", async ({ lat, lon }: { lat: number; lon: number }) => {
  return await fetchAQI(lat, lon);
});

const airQualitySlice = createSlice({
  name: "airQuality",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAQI.pending, (state) => { state.status = "loading"; })
      .addCase(getAQI.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getAQI.rejected, (state) => { state.status = "failed"; });
  },
});

export default airQualitySlice.reducer;
