import type { IStock } from '../api';

export interface ITable {
  headers: Array<keyof IStock>
  convertedStocks: Array<[string, Array<string | number>]>
}

export type ConvertedStocks = Array<Array<string | number>>;
