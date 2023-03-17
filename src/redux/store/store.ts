import { configureStore, combineReducers } from '@reduxjs/toolkit';
import StocksSlice from '../reducers/StocksSlice';

const rootReducer = combineReducers({
  StocksSlice
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
