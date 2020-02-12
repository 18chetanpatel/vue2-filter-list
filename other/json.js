/**
 * Converts a js object to json string
 */
import util from "../util";
function json (input) {
  return !util.isUndefined(input)
    ? JSON.stringify(input)
    : input
}

export default json
