// importing a named export (not a default), so the name must match and be in curly braces
import { add } from './App';

// unit test syntax
// only tests one thing in the code (the add function)
test('add function test', () => {
  const value = add(1, 2);
  expect(value).toBe(3);
});
