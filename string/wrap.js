/**
 * Wrap a string with another string
 */
import util from "../util";
function wrap(input, wrap, ends) {

      return (util.isString(input) && !util.isUndefined(wrap))
        ? [wrap, input, ends || wrap].join('')
        : input;
}

export default wrap


