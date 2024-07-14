import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index";
import { useSelector, TypedUseSelectorHook } from "react-redux";

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
