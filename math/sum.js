/**
 * Sum up all values within an array
 */
import util from "../util";

function sum(input, initial) {
  return !util.isArray(input)
    ? input
    : input.reduce(function (prev, curr) {
      return prev + curr;
    }, initial || 0);
}

export default sum
