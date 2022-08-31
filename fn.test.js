const fn = require('./fn');

let num = 0;

test('0 더하기 1은 1', () => {
  expect(fn.add(num, 1)).toBe(1);
});

test('0 더하기 2은 2', () => {
  expect(fn.add(num, 2)).toBe(2);
});

test('0 더하기 3은 3', () => {
  expect(fn.add(num, 3)).toBe(3);
});

test.skip('0 더하기 4은 4', () => {
  expect(fn.add(num, 4)).toBe(4);
  num = 10;
});

test('0 더하기 5은 5', () => {
  expect(fn.add(num, 5)).toBe(5);
});
