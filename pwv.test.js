const {
  verifyPassword,
  hasRightLength,
  isNotNull,
  hasUpperCaseCharacter,
  hasLowerCaseCharacter,
  hasDigit,
  minimumConditionsReached,
} = require("./pwv");

// ** hasRightLength **

test("hasRightLength (true)", function () {
  const input = "12345678";
  const expected = true;
  const output = hasRightLength(input);
  expect(output).toEqual(expected);
});

test("hasRightLength (false)", function () {
  const input = "1234567890";
  const expected = false;
  const output = hasRightLength(input);
  expect(output).toEqual(expected);
});

// ** isNotNull **

test("isNotNull (false)", function () {
  const input = "";
  const expected = false;
  const output = isNotNull(input);
  expect(output).toEqual(expected);
});

test("isNotNull (true)", function () {
  const input = "Koe123";
  const expected = true;
  const output = isNotNull(input);
  expect(output).toEqual(expected);
});

// ** hasUpperCaseCharacter **

test("hasUpperCaseCharacter (false)", function () {
  const input = "abc";
  const expected = false;
  const output = hasUpperCaseCharacter(input);
  expect(output).toEqual(expected);
});

test("hasUpperCaseCharacter (true)", function () {
  const input = "aBc";
  const expected = true;
  const output = hasUpperCaseCharacter(input);
  expect(output).toEqual(expected);
});

// ** hasLowerCaseCharacter **

test("hasLowerCaseCharacter (false)", function () {
  const input = "ABC";
  const expected = false;
  const output = hasLowerCaseCharacter(input);
  expect(output).toEqual(expected);
});

test("hasLowerCaseCharacter (true)", function () {
  const input = "AbC";
  const expected = true;
  const output = hasLowerCaseCharacter(input);
  expect(output).toEqual(expected);
});

// ** hasDigit **

test("hasDigit (false)", function () {
  const input = "abc";
  const expected = false;
  const output = hasDigit(input);
  expect(output).toEqual(expected);
});

test("hasDigit (true)", function () {
  const input = "a2c";
  const expected = true;
  const output = hasDigit(input);
  expect(output).toEqual(expected);
});

// ** minimumConditionsReached **

test("minimumConditionsReached (false)", function () {
  const input = [false, true, false, true, false];
  const expected = false;
  const output = minimumConditionsReached(input);
  expect(output).toEqual(expected);
});

test("minimumConditionsReached (true)", function () {
  const input = [false, true, true, true, false];
  const expected = true;
  const output = minimumConditionsReached(input);
  expect(output).toEqual(expected);
});

// ** verifyPassword **

// voldoet aan 1, 2, 4, 5
test("pwv-test 'henkie1'", function () {
  const input = "henkie1";
  const expected = true;
  const output = verifyPassword(input);
  expect(output).toEqual(expected);
});

// voldoet aan 1, 2, 4, 5
test("pwv-test '1234a'", function () {
  const input = "1234a";
  const expected = true;
  const output = verifyPassword(input);
  expect(output).toEqual(expected);
});

// voldoet aan 1, 2, 4
test("pwv-test 'z'", function () {
  const input = "z";
  const expected = true;
  const output = verifyPassword(input);
  expect(output).toEqual(expected);
});

// voldoet aan 2, 4, 5
test("pwv-test 'henkie1234'", function () {
  const input = "henkie1234";
  const expected = true;
  const output = verifyPassword(input);
  expect(output).toEqual(expected);
});

// voldoet aan 1, 2, 3, 4
test("pwv-test 'HENKhenk'", function () {
  const input = "HENKhenk";
  const expected = true;
  const output = verifyPassword(input);
  expect(output).toEqual(expected);
});

// voldoet aan 1, 2, 3, 5 (dus niet aan 4!)
test("pwv-test 'HENK33$'", function () {
  const input = "HENK33$";
  const expected = false;
  const output = verifyPassword(input);
  expect(output).toEqual(expected);
});

// voldoet aan 1, 2, 5 (dus niet aan 4!)
test("pwv-test '1234'", function () {
  const input = "1234";
  const expected = false;
  const output = verifyPassword(input);
  expect(output).toEqual(expected);
});

// voldoet aan 1 (dus niet aan 4!)
test("pwv-test ''", function () {
  const input = "";
  const expected = false;
  const output = verifyPassword(input);
  expect(output).toEqual(expected);
});
