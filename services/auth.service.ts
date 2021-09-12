import Constants from "expo-constants";

type AuthResponse = {
  username: string;
  token: string;
};

export const loginOrCreateAccount = async (
  username: string,
  password: string
): Promise<AuthResponse> => {
  const payload = { username, password };
  const response = await fetch(
    `${Constants.manifest.extra.API_BASE_URL}/myauth/myauth/login_or_signup/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );
  const data = await response.json();
  return data;
};
