import { render, screen } from '@testing-library/react';
import { TBodyDragDrop } from './TBodyDragDrop';
import React from 'react';

const getStocks = (): Array<[string, Array<string | number>]> => [
  ['BOAC+', [20, 0, 0, 0, 0, 0, 0, 0, 1679059800000, 'n/a', 'n/a', 'BOAC+', 0]],
  ['LVTX', [21, 1.81, 100, 1.5, 100, 0, 0, 0, 1679070812465, 'n/a', 'n/a', 'LVTX', 0]],
  ['WIA', [22, 0, 0, 8.64, 100, 0, 0, 0, 1679072587759, 'miscellaneous', 'cef', 'WIA', 0]]
];

describe('TBodyDragDrop-ReactComponent', () => {
  test('test-1', () => {
    render(<TBodyDragDrop stocks={getStocks()} />);
    const stocks = screen.getAllByTestId('stock-row');
    expect(stocks.length).toBe(3);
  });
});
