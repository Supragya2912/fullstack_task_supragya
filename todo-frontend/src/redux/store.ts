import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index";
import { useSelector, TypedUseSelectorHook } from "react-redux";

// Configure the Redux store
const store = configureStore({
  reducer: rootReducer,
});

// Create a type for the RootState
export type RootState = ReturnType<typeof store.getState>;

// Create a typed version of useSelector for use in your components
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
