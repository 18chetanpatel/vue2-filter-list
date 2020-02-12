/**
 * Math.max will get an array and return the max value. if an expression
 * is provided, will return max value by expression.
 */
import util from "../util";

/**
 * @private
 * @param array
 * @param exp
 * @returns {number|*|Number}
 */
function indexByMax(array, exp) {
  var mappedArray = array.map(function (elm) {
    console.log(elm);
    console.log(exp);
    return $parse(exp)(elm);
  });
  return mappedArray.indexOf(Math.max.apply(Math, mappedArray));
}

function max(input, expression) {
  if (!util.isArray(input)) {
    return input;
  }
  return util.isUndefined(expression)
    ? Math.max.apply(Math, input)
    : input[indexByMax(input, expression)];
}

export default max
