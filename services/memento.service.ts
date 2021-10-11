import Constants from "expo-constants";
import axios from "axios";
import { omit } from "lodash";

import { Memento } from "../models";

import { ApiOptions } from "./shared";

export const fetchAll = async ({ token }: ApiOptions): Promise<Memento[]> => {
  return (
    await axios.get(`${Constants.manifest.extra.API_BASE_URL}/api/mementos/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  ).data;
};

export const fetchByCategory = async (
  categoryId: string,
  { token }: ApiOptions
): Promise<Memento[]> => {
  return (
    await axios.get(
      `${Constants.manifest.extra.API_BASE_URL}/api/mementos/?category=${categoryId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
  ).data;
};

type MementoCreatePayload = Omit<Memento, "id" | "created_at" | "updated_at">;

export const create = async (
  memento: MementoCreatePayload,
  { token }: ApiOptions
): Promise<Memento> => {
  const payload = {
    ...omit(memento, ["category"]),
    category_id: memento.category.id,
  };

  return (
    await axios.post(
      `${Constants.manifest.extra.API_BASE_URL}/api/mementos/`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
  ).data;
};
