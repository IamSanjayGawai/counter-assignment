import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const storedCount = localStorage.getItem("counterValue");

const initialState = {
  value: storedCount ? parseInt(storedCount, 10) : 0, // Load from local storage or default to 0
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      localStorage.setItem("counterValue", state.value.toString()); // Save to local storage
    },
    decrement: (state) => {
      state.value -= 1;
      localStorage.setItem("counterValue", state.value.toString()); // Save to local storage
    },
    reset: (state) => {
      state.value = 0;
      localStorage.setItem("counterValue", "0"); // Save reset value to local storage
    },
    setCount: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
      localStorage.setItem("counterValue", action.payload.toString()); // Save new value to local storage
    },
  },
});

export const { increment, decrement, reset, setCount } = counterSlice.actions;
export default counterSlice.reducer;
