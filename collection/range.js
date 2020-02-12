/**
 * rangeFilter provides some support for a for loop using numbers
 */
import util from "../util";
function range(input, total, start, increment, cb) {
  start = start || 0;
  increment = increment || 1;
  for (let i = 0; i < parseInt(total); i++) {
    let j = start + i * increment;
    input.push(util.isFunction(cb) ? cb(j) : j);
  }
  return input;
}

export default range
