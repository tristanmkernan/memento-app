import { configureStore } from "@reduxjs/toolkit";

import { authSlice, mementoSlice } from "../features";

export const store = configureStore({
  reducer: {
    mementos: mementoSlice.reducer,
    auth: authSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
