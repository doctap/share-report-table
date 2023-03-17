import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { IItems, IStock } from '../../api/data-contracts';

const initialState: IItems<IStock> = {
  items: [],
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
    stocksFetchingSuccess (state, action: PayloadAction<IStock[]>) {
      state.isLoading = false;
      state.error = '';
      state.items = action.payload;
    },
    stocksFetchingError (state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export default StocksSlice.reducer;
