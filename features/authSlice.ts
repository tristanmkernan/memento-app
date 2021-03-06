import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AuthService } from "../services";
import { RootState } from "../store";

export const loginOrCreateAccount = createAsyncThunk(
  "auth/loginOrCreateAccount",
  async (
    { username, password }: { username: string; password: string },
    thunkApi
  ) => {
    const authInfo = await AuthService.loginOrCreateAccount(username, password);
    return authInfo;
  }
);

type ChangePasswordArgs = { currentPassword: string; newPassword: string };

export const changePassword = createAsyncThunk<
  void,
  ChangePasswordArgs,
  { state: RootState }
>(
  "auth/changePassword",
  async ({ currentPassword, newPassword }: ChangePasswordArgs, thunkApi) => {
    const token = thunkApi.getState().auth.token;

    await AuthService.changePassword(currentPassword, newPassword, { token });
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
  reducers: {
    logout: (state) => {
      state.is_logged_in = false;
      state.username = "";
      state.token = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginOrCreateAccount.fulfilled, (state, action) => {
      const { username, token } = action.payload;

      state.is_logged_in = true;
      state.username = username;
      state.token = token;
    });
  },
});

export const { logout } = authSlice.actions;
