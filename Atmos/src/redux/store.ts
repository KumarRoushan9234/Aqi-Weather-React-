import { configureStore } from "@reduxjs/toolkit";
import airQualityReducer from "./airQualitySlice";
import weatherReducer from "./weatherSlice";

export const store = configureStore({
  reducer: {
    airQuality: airQualityReducer,
    weather: weatherReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
