import { DateTime } from "luxon";
import Faker from "faker";
import { v4 } from "uuid";
import { sample } from "lodash";

import { Memento, MementoCategory } from "../models";

const makeFakeTime = () => DateTime.fromMillis(Faker.time.recent()).toISOTime();

const categories: MementoCategory[] = new Array(25).fill(null).map(() => ({
  id: v4(),
  name: Faker.lorem.words(3),
  created_at: makeFakeTime(),
  updated_at: makeFakeTime(),
}));

export const fetchAll = async (): Promise<Memento[]> => {
  return new Array(50).fill(null).map(() => ({
    id: v4(),
    category: sample(categories)!,
    notes: Faker.lorem.paragraph(),
    location: Faker.address.city(),
    created_at: makeFakeTime(),
    updated_at: makeFakeTime(),
  }));
};

export const fetchByCategory = async (
  categoryId: string
): Promise<Memento[]> => {
  return new Array(50).fill(null).map(() => ({
    id: v4(),
    category: sample(categories)!,
    notes: Faker.lorem.paragraph(),
    location: Faker.address.city(),
    created_at: makeFakeTime(),
    updated_at: makeFakeTime(),
  }));
};
