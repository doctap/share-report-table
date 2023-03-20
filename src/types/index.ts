import type { IStock } from '../api';

export interface ITable {
  headers: Array<keyof IStock>
  convertedStocks: Map<string, Array<string | number>>
}

export type ConvertedStocks = Array<Array<string | number>>;
