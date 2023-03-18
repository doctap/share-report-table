import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/redux';
import { getStocks } from '../../../api';
import { Table } from '../../index';
import { getConvertedStocks } from '../../../helpers/convertedData/ConvertData';

export const PaginationPage = () => {
  const { error, isLoading, items } = useAppSelector(st => st.StocksSlice);
  const dispatch = useAppDispatch();

  let table = items.length !== 0 ? getConvertedStocks(items) : { headers: [], convertedStocks: [] };

  useEffect(() => {
    dispatch(getStocks());
  }, []);

  return (
    <div>
      {error !== '' && <h1>{error}</h1>}
      {isLoading
        ? <h2>Loading...</h2>
        : <Table headers={table.headers} convertedStocks={table.convertedStocks} />}
    </div>
  );
};
