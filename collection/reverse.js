/**
 * Reverses a string or collection
 */
import util from "../util";

function reverse(input) {
  input = util.isObject(input) ? util.toArray(input) : input;

  if (util.isString(input)) {
    return input.split('').reverse().join('');
  }

  return util.isArray(input)
    ? input.slice().reverse()
    : input;
}

export default reverse
