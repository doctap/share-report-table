import type { IStock } from '../../api';

export const getConvertedStocks = (stocks: IStock[]) => {
  if (stocks.length === 0) return { headers: [], convertedStocks: [] };

  const sortedKeys: Array<keyof IStock> =
   (Object.keys(stocks[0]) as Array<keyof IStock>).sort();

  const moveItemToBeginning = (arr: typeof sortedKeys, item: keyof IStock) => {
    const index = arr.indexOf(item);
    if (index !== -1) {
      arr.splice(index, 1);
      arr.unshift(item);
    }
    return arr;
  };

  const matrix: Array<[string, Array<string | number>]> = [];

  const getSortedValues = (keys: typeof sortedKeys, stock: IStock) =>
    moveItemToBeginning(sortedKeys, 'rowNumber').map(key => (
      stock[key]
    ));

  for (const stock of stocks) {
    matrix.push([stock.symbol, getSortedValues(sortedKeys, stock)]);
  }

  return {
    headers: sortedKeys,
    convertedStocks: matrix
  };
};
