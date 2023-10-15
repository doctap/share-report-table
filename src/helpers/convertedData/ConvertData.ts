import type { IStock } from '../../api';

export const getConvertedItems = <TItem extends { symbol: string }>(
  items: TItem[],
  sortedKeys: Array<keyof TItem>
) => {
  if (items.length === 0) return { headers: [], convertedStocks: [] };

  // const sortedKeys: Array<keyof TItem> =
  //  (Object.keys(items[0]) as Array<keyof TItem>).sort((a, b) => a.localeCompare(b));

  // const moveItemToBeginning = (arr: typeof sortedKeys, item: keyof TItem) => {
  //   const index = arr.indexOf(item);
  //   if (index !== -1) {
  //     arr.splice(index, 1);
  //     arr.unshift(item);
  //   }
  //   return arr;
  // };

  const convertedStocks: Array<[string, Array<string | number>]> = [];

  const getSortedValues = (keys: typeof sortedKeys, stock: TItem) =>
    keys.map(key => stock[key]);

  for (const it of items) {
    convertedStocks.push([it.symbol, getSortedValues(sortedKeys, it)]);
  }

  return {
    headers: sortedKeys,
    convertedStocks
  };
};
