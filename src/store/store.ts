import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import { loadCartState } from '../localStorage.ts';

const persistedCartState = loadCartState();

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: persistedCartState,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
