const fn = require('./fn');

test('3초 후 나이 30.', async () => {
  await expect(fn.getAge()).resolves.toBe(30);
});

test('3초 후 나이 30.', async () => {
  const age = await fn.getAge();
  return expect(age).toBe(31);
});

test('0 + 1은 1이야.', () => {
  expect(fn.add(0, 1)).toBe(1);
});
