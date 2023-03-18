/**
 * @param stock converted array from object
 * @returns string stock-id
 */
export const getId = (stock: Array<string | number>): string => {
  const regExp = /^id-/;
  const findingElem = stock.find(el => regExp.test(`${el}`)) as string;

  return findingElem.replace(regExp, '');
};
