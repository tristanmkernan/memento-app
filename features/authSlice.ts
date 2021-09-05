import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AuthService } from "../services";

export const loginOrCreateAccount = createAsyncThunk(
  "auth/loginOrCreateAccount",
  async (
    { username, password }: { username: string; password: string },
    thunkApi
  ) => {
    const authInfo = await AuthService.loginOrCreateAccount();
    return authInfo;
  }
);

export interface AuthState {
  is_logged_in: boolean;
  username: string;
  token: string;
}

const initialState: AuthState = {
  is_logged_in: false,
  username: "",
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginOrCreateAccount.fulfilled, (state, action) => {
      state.auth = action.payload;
    });
  },
});

export const {} = authSlice.actions;
