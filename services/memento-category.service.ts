import Constants from "expo-constants";
import axios from "axios";

import { MementoCategory } from "../models";

import { ApiOptions } from "./shared";

export const create = async (
  name: string,
  { token }: ApiOptions
): Promise<MementoCategory> => {
  const payload = {
    name,
  };

  return (
    await axios.post(
      `${Constants.manifest.extra.API_BASE_URL}/api/memento-categories/`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
  ).data;
};

export const search = async (
  query: string,
  { token, limit }: ApiOptions
): Promise<MementoCategory[]> => {
  return (
    await axios.get(
      `${Constants.manifest.extra.API_BASE_URL}/api/memento-categories/?name=${query}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
  ).data;
};

export const fetchOne = async (
  categoryId: string,
  { token }: ApiOptions
): Promise<MementoCategory> => {
  return (
    await axios.get(
      `${Constants.manifest.extra.API_BASE_URL}/api/memento-categories/${categoryId}/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
  ).data;
};
