// Utility functions
const isNotNull = (str) => {
  return str != "";
};

const hasRightLength = (str) => {
  return str.length < 9;
};

const hasUpperCaseCharacter = (str) => {
  return /[A-Z]/.test(str);
};

const hasLowerCaseCharacter = (str) => {
  return /[a-z]/.test(str);
};

const hasDigit = (str) => {
  return /[0-9]/.test(str);
};

const minimumConditionsReached = (conditions) => {
  // conditions is an array of booleans
  trueConditions = conditions.filter((bool) => bool);
  return trueConditions.length >= 3;
};

// "Outer" function
const verifyPassword = (password) => {
  const conditions = [
    isNotNull(password),
    hasRightLength(password),
    hasUpperCaseCharacter(password),
    hasLowerCaseCharacter(password),
    hasDigit(password),
  ];
  const result =
    minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);

  return result;
};

module.exports = {
  verifyPassword,
  hasRightLength,
  isNotNull,
  hasUpperCaseCharacter,
  hasLowerCaseCharacter,
  hasDigit,
  minimumConditionsReached,
};
