import { DateTime } from "luxon";
import Faker from "faker";
import { v4 } from "uuid";

import { MementoCategory } from "../models";

const makeFakeTime = () => DateTime.fromMillis(Faker.time.recent()).toISOTime();

export const create = async (name: string): Promise<MementoCategory> => {
  return {
    id: v4(),
    name,
    created_at: makeFakeTime(),
    updated_at: makeFakeTime(),
  };
};

export const search = async (
  query: string,
  limit = 3
): Promise<MementoCategory[]> => {
  return new Array(limit).fill(null).map(() => ({
    id: v4(),
    name: Faker.lorem.words(3),
    created_at: makeFakeTime(),
    updated_at: makeFakeTime(),
  }));
};
