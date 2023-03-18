import { getId } from './GetId';

const data = [1.81, 100, 1.5, 100, 0, 0, 0, 1679070812465, 'n/a', 'n/a', 'id-LVTX', 0];

test('getId', () => {
  const id = getId(data);

  expect(id).toBe('LVTX');
});
