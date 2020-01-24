import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  value: number;
}

export const initialState: InitialState = {
  value: 0
};

export const slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    }
  }
});

export const { increment, decrement } = slice.actions;

export default slice.reducer;
