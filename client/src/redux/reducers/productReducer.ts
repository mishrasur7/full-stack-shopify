import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types/product";

const initialState: Product[] = [];

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  try {
    const data = await fetch(
      "https://vast-wave-18172.herokuapp.com/api/v1/products"
    );
    const result = data.json();
    return result;
  } catch (error) {
    console.log(error);
  }
});

const productSlice = createSlice({
  name: "productReducer",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        return action.payload
    });
  },
});

export const productReducer = productSlice.reducer

