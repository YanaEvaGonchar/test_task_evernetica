import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import apiMiddleware from "./apiMiddleware";
import countries from "../reducers/countriesReducer";

const combinedReducer = combineReducers({
  countries,
});

const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiMiddleware),
});
