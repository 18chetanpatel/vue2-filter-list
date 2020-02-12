/**
 * join a collection by a provided delimiter (space by default)
 */
import util from "../util";

function join(input, delimiter) {
  if (util.isUndefined(input) || !util.isArray(input)) {
    return input;
  }
  if (util.isUndefined(delimiter)) delimiter = ' ';

  return input.join(delimiter);
}

export default join
