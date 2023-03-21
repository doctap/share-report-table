import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/redux';
import { getStocks } from '../../../api';
import { Pagination, Table } from '../../index';
import { getConvertedStocks, getNumberedStocks } from '../../../helpers';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './PaginationPage.module.scss';

export const PaginationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pageNumber = !isNaN(Number(location.search.split('=')[1]))
    ? Number(location.search.split('=')[1])
    : 1;

  const { error, isLoading, stocks, pagesCount } = useAppSelector(st => st.StocksSlice);
  const dispatch = useAppDispatch();

  const [currentPage, setCurrentPage] = useState(pageNumber);
  const table = getConvertedStocks(getNumberedStocks(stocks, currentPage));

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected + 1);
    navigate({
      search: `?page=${selected + 1}`
    });
  };

  useEffect(() => {
    dispatch(getStocks(currentPage));
  }, [currentPage, dispatch]);

  return (
    <div className={styles.PaginationPage}>
      {error !== '' && <h1>{error}</h1>}
      {isLoading
        ? <h2>Loading...</h2>
        : <div className={styles.PaginationTable}>
          <Table
            headers={table.headers}
            convertedStocks={table.convertedStocks}
          />
          <div className={styles.Pagination}>
            <Pagination
              onChange={handlePageChange}
              initialPage={currentPage - 1}
              pageCount={pagesCount}
            />
          </div>
        </div>}
    </div>
  );
};
