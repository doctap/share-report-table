import axios from 'axios';
import type { AppDispatch } from '../redux/store/store';
import { StocksSlice } from '../redux/reducers/StocksSlice';
import { server } from './server/server';

export const getStocks = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(StocksSlice.actions.stocksFetching());
    // const res = await axios.get<IStock[]>('URL');
    const res = { data: server };
    dispatch(StocksSlice.actions.stocksFetchingSuccess(res.data));
  } catch (e: any) {
    dispatch(StocksSlice.actions.stocksFetchingError(e.message));
  }
};
