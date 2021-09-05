import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { map, fromPairs } from "lodash";

import { Memento } from "../models";
import { MementoService } from "../services";

export const fetchAllMementos = createAsyncThunk(
  "mementos/fetchAll",
  async (thunkApi) => {
    const mementos = await MementoService.fetchAll();
    return mementos;
  }
);

export interface MementoState {
  entities: Record<string, Memento>;
}

const initialState: MementoState = {
  entities: {},
};

export const mementoSlice = createSlice({
  name: "mementos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllMementos.fulfilled, (state, action) => {
      const entityPairs = map(action.payload, (item) => [item.id, item]);
      const entities = fromPairs(entityPairs);
      state.entities = entities;
    });
  },
});

export const {} = mementoSlice.actions;
