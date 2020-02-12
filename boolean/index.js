/**
 * reference to boolean function
 */

function isUndefined(input) {
  return typeof input === 'undefined';
}

function isDefined(input) {
  return typeof input != 'undefined';
}

function isFunction(input) {
  return typeof input === 'function'
}

function isString(input) {
  return typeof input === 'string'
}

function isNumber(input) {
  return typeof input === 'number'
}

function isArray(input) {
  return Array.isArray(input)
}

function isObject(input) {
  return (typeof input === "object" || typeof input === 'function') && (input !== null)
}

function isNull(input) {
  return isNull(input);
}

function isGreaterThan(input, check) {
  return input > check;
}

function isGreaterThanOrEqualTo(input, check) {
  return input >= check;
}

function isLessThan(input, check) {
  return input < check;
}

function isLessThanOrEqualTo(input, check) {
  return input <= check;
}

function isEqualTo(input, check) {
  return input == check;
}

function isNotEqualTo(input, check) {
  return input != check;
}

function isIdenticalTo(input, check) {
  return input === check;
}

function isNotIdenticalTo(input, check) {
  return input !== check;
}

export {
  isUndefined,
  isDefined,
  isFunction,
  isString,
  isNumber,
  isArray,
  isObject,
  isNull,
  isGreaterThan,
  isGreaterThanOrEqualTo,
  isLessThan,
  isLessThanOrEqualTo,
  isEqualTo,
  isNotEqualTo,
  isIdenticalTo,
  isNotIdenticalTo
}
