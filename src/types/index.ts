import type { IStock } from '../api';

export interface ITable {
  headers: Array<keyof IStock>
  convertedStocks: ConvertedStocks
}

export type ConvertedStocks = Array<Array<string | number>>;
