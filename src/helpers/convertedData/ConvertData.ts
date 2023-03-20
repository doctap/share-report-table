import type { IResponseStock, IStock } from '../../api';

export const getNumberedStocks = (stocks: IResponseStock[], currentPage: number): IStock[] => {
  let count = 0;
  const getNewStock = (stock: IResponseStock) => ({ ...stock, rowNumber: ((currentPage * 10) - 10) + count++ });
  return stocks.map(it => getNewStock(it));
};

export const getConvertedStocks = (stocks: IStock[]) => {
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

  const map = new Map<string, Array<string | number>>();

  const getSortedValues = (keys: typeof sortedKeys, stock: IStock) =>
    moveItemToBeginning(sortedKeys, 'rowNumber').map(key => (
      stock[key]
    ));

  for (const stock of stocks) {
    map.set(stock.symbol, getSortedValues(sortedKeys, stock));
  }

  return {
    headers: sortedKeys,
    convertedStocks: map
  };
};
