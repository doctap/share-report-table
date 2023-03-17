import React from 'react';
import styles from './Table.module.scss';
import { type IStock } from '../../../api';
import { type ITableHead } from '../../../types';
import { TBodyDragDrop } from '../../index';

interface ITable {
  items: IStock[]
  headers: ITableHead[]
}

export const Table = (props: ITable) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {props.headers.map(columnHead => (
            <th key={columnHead.header}>{columnHead.header}</th>
          ))}
        </tr>
      </thead>
      <TBodyDragDrop stocks={props.items} />
    </table>
  );
};
