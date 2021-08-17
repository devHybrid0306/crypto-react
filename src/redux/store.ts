/* eslint-disable @typescript-eslint/no-unused-vars */
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cryptoReducer from './slices/crypto/cryptoSlice';

/** STORE */
export const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
});

/** TYPES */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
