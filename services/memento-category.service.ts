import Constants from "expo-constants";

import { MementoCategory } from "../models";

type Options = {
  token?: string;
  limit?: number;
};

export const create = async (
  name: string,
  { token }: Options
): Promise<MementoCategory> => {
  const payload = {
    name,
  };

  const response = await fetch(
    `${Constants.manifest.extra.API_BASE_URL}/api/memento-categories/`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );
  const data = await response.json();
  return data;
};

export const search = async (
  query: string,
  { token, limit }: Options
): Promise<MementoCategory[]> => {
  const response = await fetch(
    `${Constants.manifest.extra.API_BASE_URL}/api/memento-categories/?name=${query}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  return data;
};
