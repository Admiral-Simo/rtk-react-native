import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import { randomApi } from "./apis/randomApi";

export default configureStore({
  reducer: {
    counter: counterReducer,
    [randomApi.reducerPath]: randomApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(randomApi.middleware),
});
