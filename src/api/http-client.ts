import type { AppDispatch } from '../redux/store/store';
import { StocksSlice } from '../redux/reducers/StocksSlice';
import { type IResponse } from './data-contracts';
import axios from 'axios';

// create .env file
const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL as string;

export const getStocks = (currentPage: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(StocksSlice.actions.stocksFetching());
    const res = await axios.get<IResponse>(`${REACT_APP_BASE_URL}/?page=${currentPage}`);

    const pagesCount = Math.ceil(res.data.totalItemCount / 10);
    dispatch(StocksSlice.actions.stocksFetchingSuccess({ stocks: res.data.stocks, pagesCount }));
  } catch (e: any) {
    dispatch(StocksSlice.actions.stocksFetchingError(e.message));
  }
};
