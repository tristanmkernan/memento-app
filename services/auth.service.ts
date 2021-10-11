import Constants from "expo-constants";
import axios from "axios";

import { ApiOptions } from "./shared";

type AuthResponse = {
  username: string;
  token: string;
};

export const loginOrCreateAccount = async (
  username: string,
  password: string
): Promise<AuthResponse> => {
  const payload = { username, password };

  return (
    await axios.post(
      `${Constants.manifest.extra.API_BASE_URL}/myauth/myauth/login_or_signup/`,
      payload
    )
  ).data;
};

export const changePassword = async (
  currentPassword: string,
  newPassword: string,
  { token }: ApiOptions
): Promise<void> => {
  const payload = { currentPassword, newPassword };

  return (
    await axios.post(
      `${Constants.manifest.extra.API_BASE_URL}/myauth/myauth/change_password/`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
  ).data;
};
