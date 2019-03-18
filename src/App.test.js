// importing a named export (not a default), so the name must match and be in curly braces
import { total } from './App';

// example of a mocked add function in jest
const add = jest.fn(() => 3);

// unit test syntax
// only tests one thing in the code (the add function)
test('add function', () => {
  const value = add(1, 2);
  expect(value).toBe(3);
  expect(add).toHaveBeenCalledTimes(1);
  expect(add).toHaveBeenCalledWith(1, 2);
});

// integration test syntax
// because total relies on the add function to work correctly
// test('total function', () => {
//   expect(total(5, 20)).toBe('$25');
// });
