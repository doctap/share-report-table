import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.scss';

interface IPagination {
  initialPage?: number
  marginPagesDisplayed?: number
  pageCount: number
  pageRangeDisplayed?: number
  onChange: ({ selected }: { selected: number }) => void
}

export const Pagination = (props: IPagination) => {
  return (
    <ReactPaginate
      initialPage={props.initialPage}
      marginPagesDisplayed={props.marginPagesDisplayed}
      pageCount={props.pageCount}
      pageRangeDisplayed={props.marginPagesDisplayed}
      onPageChange={props.onChange}
      containerClassName='Pagination'
      activeClassName='Pagination__active'
      pageLinkClassName='Pagination__page-link'
      breakLinkClassName='Pagination__break-link'
      nextLinkClassName='Pagination__next-link'
      previousLinkClassName='Pagination__previous-link'
      pageClassName='Pagination__page-item'
      breakClassName='Pagination__break-item'
      nextClassName='Pagination__next-item'
      previousClassName='Pagination__previous-item'
    />
  );
};
