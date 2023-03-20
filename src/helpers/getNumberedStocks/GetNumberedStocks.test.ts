import { type IStock, type IResponseStock } from '../../api';
import { getNumberedStocks } from './GetNumberedStocks';

const getStocks = (): IResponseStock[] =>
  [
    {
      symbol: 'BOAC+',
      sector: 'n/a',
      securityType: 'n/a',
      bidPrice: 0,
      bidSize: 0,
      askPrice: 0,
      askSize: 0,
      lastUpdated: 1679059800000,
      lastSalePrice: 0,
      lastSaleSize: 0,
      lastSaleTime: 0,
      volume: 0
    },
    {
      symbol: 'LVTX',
      sector: 'n/a',
      securityType: 'n/a',
      bidPrice: 1.5,
      bidSize: 100,
      askPrice: 1.81,
      askSize: 100,
      lastUpdated: 1679070812465,
      lastSalePrice: 0,
      lastSaleSize: 0,
      lastSaleTime: 0,
      volume: 0
    },
    {
      symbol: 'WIA',
      sector: 'miscellaneous',
      securityType: 'cef',
      bidPrice: 8.64,
      bidSize: 100,
      askPrice: 0,
      askSize: 0,
      lastUpdated: 1679072587759,
      lastSalePrice: 0,
      lastSaleSize: 0,
      lastSaleTime: 0,
      volume: 0
    }
  ];

describe('getNumberedStocks', () => {
  test('test 1', () => {
    expect(getNumberedStocks(getStocks(), -1))
      .toEqual<IStock[]>(
      [
        {
          rowNumber: 0,
          symbol: 'BOAC+',
          sector: 'n/a',
          securityType: 'n/a',
          bidPrice: 0,
          bidSize: 0,
          askPrice: 0,
          askSize: 0,
          lastUpdated: 1679059800000,
          lastSalePrice: 0,
          lastSaleSize: 0,
          lastSaleTime: 0,
          volume: 0
        },
        {
          rowNumber: 1,
          symbol: 'LVTX',
          sector: 'n/a',
          securityType: 'n/a',
          bidPrice: 1.5,
          bidSize: 100,
          askPrice: 1.81,
          askSize: 100,
          lastUpdated: 1679070812465,
          lastSalePrice: 0,
          lastSaleSize: 0,
          lastSaleTime: 0,
          volume: 0
        },
        {
          rowNumber: 2,
          symbol: 'WIA',
          sector: 'miscellaneous',
          securityType: 'cef',
          bidPrice: 8.64,
          bidSize: 100,
          askPrice: 0,
          askSize: 0,
          lastUpdated: 1679072587759,
          lastSalePrice: 0,
          lastSaleSize: 0,
          lastSaleTime: 0,
          volume: 0
        }
      ]
    );
  });
  
  test('test 2', () => {
    expect(getNumberedStocks(getStocks(), 4))
      .toEqual<IStock[]>(
      [
        {
          rowNumber: 30,
          symbol: 'BOAC+',
          sector: 'n/a',
          securityType: 'n/a',
          bidPrice: 0,
          bidSize: 0,
          askPrice: 0,
          askSize: 0,
          lastUpdated: 1679059800000,
          lastSalePrice: 0,
          lastSaleSize: 0,
          lastSaleTime: 0,
          volume: 0
        },
        {
          rowNumber: 31,
          symbol: 'LVTX',
          sector: 'n/a',
          securityType: 'n/a',
          bidPrice: 1.5,
          bidSize: 100,
          askPrice: 1.81,
          askSize: 100,
          lastUpdated: 1679070812465,
          lastSalePrice: 0,
          lastSaleSize: 0,
          lastSaleTime: 0,
          volume: 0
        },
        {
          rowNumber: 32,
          symbol: 'WIA',
          sector: 'miscellaneous',
          securityType: 'cef',
          bidPrice: 8.64,
          bidSize: 100,
          askPrice: 0,
          askSize: 0,
          lastUpdated: 1679072587759,
          lastSalePrice: 0,
          lastSaleSize: 0,
          lastSaleTime: 0,
          volume: 0
        }
      ]
    );
  });
});
