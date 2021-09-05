import { v4 } from "uuid";

type AuthResponse = {
  username: string;
  token: string;
};

export const loginOrCreateAccount = async (
  username: string,
  password: string
): Promise<AuthResponse> => {
  return {
    username,
    token: v4(),
  };
};
