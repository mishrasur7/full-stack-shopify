import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./reducers/productReducer";
const store = configureStore({
  reducer: {
    productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
