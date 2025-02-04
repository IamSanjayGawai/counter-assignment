import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: {
    name: string;
    email: string;
    photoURL: string;
  } | null;
  isAuthenticated: boolean;
}

const storedUser = localStorage.getItem("authUser");

const initialState: AuthState = storedUser
  ? { user: JSON.parse(storedUser), isAuthenticated: true }
  : { user: null, isAuthenticated: false };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<AuthState["user"]>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("authUser", JSON.stringify(action.payload));
    },
    logoutSuccess: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("authUser");
    },
  },
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;
export default authSlice.reducer;
