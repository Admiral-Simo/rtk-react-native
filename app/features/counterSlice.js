import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    values: [3,1],
  },
  reducers: {
    increment: (state) => {
      state.values += 1;
    },
    decrement: (state) => {
      state.values -= 1;
    },
    incrementByAmount: (state, action) => {
      state.values += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectValues = (state) => state.counter.values;

export default counterSlice.reducer;
