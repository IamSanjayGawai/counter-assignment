

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  id: string;
  email: string;
  address: string;
  phone: string;
  profileViews: number[]; // Profile view history
}

const storedUser = localStorage.getItem("userData");

const initialState: UserState = storedUser
  ? JSON.parse(storedUser)
  : { name: "John Doe", email: "john@example.com", phone: "123-456-7890", profileViews: [10, 15, 30, 40, 50] };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
            Object.assign(state, action.payload);
            localStorage.setItem("userData", JSON.stringify(state));
          },
          addProfileView: (state) => {
            if (!state.profileViews) {
              state.profileViews = []; //  Ensure array exists before modifying
            }
            state.profileViews.push(Math.floor(Math.random() * 50) + 10); // Safely add profile view
            localStorage.setItem("userData", JSON.stringify(state));
          },
      
  },
});

export const { setUser, addProfileView } = userSlice.actions;
export default userSlice.reducer;
