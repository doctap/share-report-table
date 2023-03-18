import type { IStock } from '../../api';

export const getConvertedStocks = (stocks: IStock[]) => {
  const sortedKeys: Array<keyof IStock> =
   (Object.keys(stocks[0]) as Array<keyof IStock>).sort();

  const convertedStocks = stocks
    .map(obj => sortedKeys
      .map(key => key === 'symbol' ? `id-${obj[key]}` : obj[key]));

  return {
    headers: sortedKeys,
    convertedStocks
  };
};
