import type { IResponseStock } from '../../api';
import { getNumberedStocks } from '../index';
import { getConvertedStocks } from './ConvertData';

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

test('getConvertedStocks', () => {
  const convertedStocks = getConvertedStocks(getNumberedStocks(getStocks(), 3));

  expect(convertedStocks).toEqual({
    headers: [
      'rowNumber',
      'askPrice',
      'askSize',
      'bidPrice',
      'bidSize',
      'lastSalePrice',
      'lastSaleSize',
      'lastSaleTime',
      'lastUpdated',
      'sector',
      'securityType',
      'symbol',
      'volume'
    ],
    convertedStocks: [
      ['BOAC+', [20, 0, 0, 0, 0, 0, 0, 0, 1679059800000, 'n/a', 'n/a', 'BOAC+', 0]],
      ['LVTX', [21, 1.81, 100, 1.5, 100, 0, 0, 0, 1679070812465, 'n/a', 'n/a', 'LVTX', 0]],
      ['WIA', [22, 0, 0, 8.64, 100, 0, 0, 0, 1679072587759, 'miscellaneous', 'cef', 'WIA', 0]]
    ]
  });
});
