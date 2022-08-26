const fn = require('./fn');

// toBeNull
// toBeUndefined
// toBeDefined

test('null은 null입니다', () => {
  expect(null).toBeNull();
});

// toBeTruthy
// toBeFalsy

test('비어있지 않은 문자열은 true 입니다.', () => {
  expect(fn.add('hello', 'world')).toBeTruthy();
});

// toBeGreaterThan 크다
// toBeGreaterThanOrEqual 크거나 같다
// toBeLesserThan 작다
// toBeLesserThanOrEqual 작거나 같다

test('ID는 10자 이하여야 합니다.', () => {
  const id = 'THE_BLACK';
  expect(id.length).toBeLessThanOrEqual(10);
});

test('비밀번호 4자리', () => {
  const pw = '1234';
  expect(pw.length).toBe(4);
});

test('비밀번호 4자리', () => {
  const pw = '1234';
  expect(pw.length).toEqual(4);
});

test('0.1 더하기 0.2는 0.3입니다.', () => {
  expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test('Hello World에 a라는 글자가 있나?', () => {
  expect('Hello World').toMatch(/h/i);
});

// toContain
test('유저 리스트에 Mike가 있나?', () => {
  const user = 'Mike';
  expect(['Mike', 'Jake']).toContain(user);
});

// error check
test('이거 에러 나나요?', () => {
  expect(() => fn.throwErr()).toThrow('xx');
});
