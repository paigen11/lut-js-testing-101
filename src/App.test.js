// importing a named export (not a default), so the name must match and be in curly braces
import { total } from './App';
import { add } from './add';

// example of creating a mocked dependency
jest.mock('./add', () => ({
  add: jest.fn(() => 25),
}));

// example of a mocked add function in jest
// do not create mock functions and test them in the real world
// const add = jest.fn(() => 3);
// const add = jest.fn((x, y) => x + y);

// integration test syntax
// because total relies on the add function to work correctly
test('total function', () => {
  expect(total(5, 20)).toBe('$25');
  expect(add).toHaveBeenCalledTimes(1);

  // redundant - in a real testing environment, you wouldn't normally test the same
  // functionality twice
  // but this is how you can change the initial mock as needed in a test
  add.mockImplementation(() => 30);
  expect(total(5, 25)).toBe('$30');
  expect(add).toHaveBeenCalledTimes(2);
});

test('total function 2', () => {
  // apparently, once the mock implementation is changed in one test
  // that trickles down to other tests, unless explicitly reset
  expect(total(5, 20)).toBe('$30');
  expect(add).toHaveBeenCalledTimes(3);
});
