// mock function
const mockFn = jest.fn((num) => num + 1);

mockFn(10);
mockFn(20);
mockFn(30);

test('10에서 1 증가한 값이 반환된다', () => {
  console.log(mockFn.mock.results);
  expect(mockFn.mock.results[0].value).toBe(11);
});

test('20에서 1 증가한 값이 반환된다', () => {
  console.log(mockFn.mock.results);
  expect(mockFn.mock.results[1].value).toBe(21);
});

test('10에서 1 증가한 값이 반환된다', () => {
  console.log(mockFn.mock.results);
  expect(mockFn.mock.results[2].value).toBe(31);
});
