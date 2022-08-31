// mock function
const mockFn = jest.fn((num) => num + 1);

mockFn(10);
mockFn(20);
mockFn(30);

test('함수 호출은 3번 됩니다', () => {
  console.log(mockFn.mock.results);
  expect(mockFn.mock.calls.length).toBe(3);
});

test('전달된 값은 11, 21, 31입니다.', () => {
  
});
