import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { IStocksFetching, IStock } from '../../api';

const initialState: IStocksFetching = {
  pagesCount: 0,
  stocks: [],
  error: '',
  isLoading: false
};

export const StocksSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {
    stocksFetching (state) {
      state.isLoading = true;
    },
    stocksFetchingSuccess (state, action: PayloadAction<{ stocks: IStock[], pagesCount: number }>) {
      state.isLoading = false;
      state.error = '';
      state.stocks = action.payload.stocks;
      state.pagesCount = action.payload.pagesCount;
    },
    stocksFetchingError (state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export default StocksSlice.reducer;
