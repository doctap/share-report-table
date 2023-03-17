import React, { useEffect } from 'react';
import styles from './App.module.scss';
import { useAppDispatch, useAppSelector } from './redux/hooks/redux';
import { getStocks, stocks } from './api';
import { Table } from './components';
import { headers } from './props/TableHeaders';

function App () {
  const { error, isLoading, items } = useAppSelector(st => st.StocksSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getStocks());
  }, []);

  return (
    <div className={styles.App}>

      {error !== '' && <h1>{error}</h1>}

      {
        isLoading
          ? <h2>Loading...</h2>
          : <Table items={items} headers={headers} />
      }

    </div>
  );
}

export default App;
