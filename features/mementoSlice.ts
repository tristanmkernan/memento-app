import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { map, fromPairs, set } from "lodash";

import { Memento } from "../models";
import { RootState } from "../store";
import { MementoService } from "../services";

import { logout } from "./authSlice";

export const fetchAllMementos = createAsyncThunk<
  Memento[],
  void,
  { state: RootState }
>("mementos/fetchAll", async (_, thunkApi) => {
  const token = thunkApi.getState().auth.token;

  return await MementoService.fetchAll({ token });
});

type MementoCreatePayload = Omit<Memento, "id" | "created_at" | "updated_at">;

export const createMemento = createAsyncThunk<
  Memento,
  MementoCreatePayload,
  { state: RootState }
>("mementos/create", async (memento, thunkApi) => {
  const token = thunkApi.getState().auth.token;

  return await MementoService.create(memento, { token });
});

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

    builder.addCase(createMemento.fulfilled, (state, action) => {
      set(state.entities, action.payload.id, action.payload);
    });

    builder.addCase(logout, (state) => {
      state.entities = {};
    });
  },
});

export const {} = mementoSlice.actions;
