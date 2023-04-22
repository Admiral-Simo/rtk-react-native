import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./features/orderSlice";
import { randomApi } from "./apis/randomApi";

export default configureStore({
  reducer: {
    order: orderReducer,
    [randomApi.reducerPath]: randomApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(randomApi.middleware),
});
