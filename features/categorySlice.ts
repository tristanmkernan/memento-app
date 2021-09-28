import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { MementoCategory } from "../models";
import { MementoCategoryService } from "../services";
import { RootState } from "../store";

import { logout } from "./authSlice";

export const fetchCategory = createAsyncThunk<
  MementoCategory,
  string,
  { state: RootState }
>("categories/fetchOne", async (categoryId: string, thunkApi) => {
  const token = thunkApi.getState().auth.token;

  const category = await MementoCategoryService.fetchOne(categoryId, { token });

  return category;
});

export interface MementoCategoryState {
  entities: Record<string, MementoCategory>;
}

const initialState: MementoCategoryState = {
  entities: {},
};

export const mementoCategorySlice = createSlice({
  name: "mementoCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.entities[action.payload.id] = action.payload;
    });

    builder.addCase(logout, (state) => {
      state.entities = {};
    });
  },
});

export const {} = mementoCategorySlice.actions;
