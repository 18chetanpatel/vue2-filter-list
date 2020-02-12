/**
 * Math.min will get an array and return the min value. if an expression
 * is provided, will return min value by expression.
 */
import util from "../util";

/**
 * @private
 * @param array
 * @param exp
 * @returns {number|*|Number}
 */
function indexByMin(array, exp) {
  var mappedArray = array.map(function (elm) {
    return $parse(exp)(elm);
  });
  return mappedArray.indexOf(Math.min.apply(Math, mappedArray));
}

function min(input, expression) {

  if (!util.isArray(input)) {
    return input;
  }
  return util.isUndefined(expression)
    ? Math.min.apply(Math, input)
    : input[indexByMin(input, expression)];
}

export default min
