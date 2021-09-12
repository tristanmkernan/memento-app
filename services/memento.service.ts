import Constants from "expo-constants";
import { omit } from "lodash";

import { Memento } from "../models";

type Options = {
  token?: string;
};

export const fetchAll = async ({ token }: Options): Promise<Memento[]> => {
  const response = await fetch(
    `${Constants.manifest.extra.API_BASE_URL}/api/mementos/`,
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

export const fetchByCategory = async (
  categoryId: string,
  { token }: Options
): Promise<Memento[]> => {
  const response = await fetch(
    `${Constants.manifest.extra.API_BASE_URL}/api/mementos/?category=${categoryId}`,
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

type MementoCreatePayload = Omit<Memento, "id" | "created_at" | "updated_at">;

export const create = async (
  memento: MementoCreatePayload,
  { token }: Options
): Promise<Memento> => {
  const payload = {
    ...omit(memento, ["category"]),
    category_id: memento.category.id,
  };

  const response = await fetch(
    `${Constants.manifest.extra.API_BASE_URL}/api/mementos/`,
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
