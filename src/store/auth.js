import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "counter",
  initialState: {
    isAuth: false,
    user: {}
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    }
  }
})


// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;