import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const sleep = (t = Math.random() * 200 + 300) =>
  new Promise(resolve => setTimeout(resolve, t));

interface InitialState {
  value: number;
  loading: boolean;
  error: string | null;
}

export const initialState: InitialState = {
  value: 0,
  loading: false,
  error: null
};

export const fetchInitial = createAsyncThunk(
  "counter/fetchInitial",
  async (_, { rejectWithValue }) => {
    try {
      // For demo purpose let's say out value is the length
      // of the project name in manifest and the api call is slow
      await sleep();
      const response = await axios.get("/manifest.json");
      return response.data.name.length;
    } catch (err) {
      return rejectWithValue("Something went wrong.");
    }
  }
);

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
  },
  extraReducers: {
    [fetchInitial.pending.type]: state => {
      state.loading = true;
    },
    [fetchInitial.fulfilled.type]: (state, action) => {
      state.value = action.payload;
      state.loading = false;
    },
    [fetchInitial.rejected.type]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    }
  }
});

export const { increment, decrement } = slice.actions;

export default slice.reducer;
