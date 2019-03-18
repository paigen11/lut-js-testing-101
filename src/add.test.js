import { add } from './add';

// unit test syntax
// only tests one thing in the code (the add function)
test('add function', () => {
  expect(add(1, 2)).toBe(3);
  expect(add(2, 5)).toBe(7);
});
