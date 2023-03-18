import React from 'react';
import styles from './Table.module.scss';
import { type ITable } from '../../../types';
import { TBodyDragDrop } from '../../index';

export const Table = (props: ITable) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {props.headers.map(columnHead => (
            <th key={columnHead}>{columnHead}</th>
          ))}
        </tr>
      </thead>
      <TBodyDragDrop stocks={props.convertedStocks} />
    </table>
  );
};
