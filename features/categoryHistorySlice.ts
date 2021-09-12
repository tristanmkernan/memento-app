import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Memento } from "../models";
import { MementoService } from "../services";

import { logout } from "./authSlice";

export const fetchCategoryHistory = createAsyncThunk(
  "mementoHistory/fetchOne",
  async (categoryId: string, thunkApi) => {
    const mementos = await MementoService.fetchByCategory(categoryId);
    return {
      categoryId,
      mementos,
    };
  }
);

export interface MementoCategoryHistoryState {
  entities: Record<string, Memento[]>;
}

const initialState: MementoCategoryHistoryState = {
  entities: {},
};

export const mementoCategoryHistorySlice = createSlice({
  name: "mementoCategoryHistory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategoryHistory.fulfilled, (state, action) => {
      const { categoryId, mementos } = action.payload;
      state.entities[categoryId] = mementos;
    });

    builder.addCase(logout, (state) => {
      state.entities = {};
    });
  },
});

export const {} = mementoCategoryHistorySlice.actions;
