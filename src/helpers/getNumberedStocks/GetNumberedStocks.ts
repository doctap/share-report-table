import type { IResponseStock, IStock } from '../../api';

export const getNumberedStocks = (stocks: IResponseStock[], currentPage: number): IStock[] => {
  if (Number.isNaN(currentPage)) throw new Error('value cannot be NaN');
  currentPage = currentPage < 1 ? 1 : currentPage;

  let count = 0;
  const getNewStock = (stock: IResponseStock) => ({ ...stock, rowNumber: ((currentPage * 10) - 10) + count++ });
  return stocks.map(it => getNewStock(it));
};
