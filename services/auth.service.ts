import { v4 } from "uuid";

type AuthResponse = {
  username: string;
  token: string;
};

export const loginOrCreateAccount = (
  username: string,
  password: string
): Promise<AuthResponse> => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          username,
          token: v4(),
        }),
      750
    );
  });
};
