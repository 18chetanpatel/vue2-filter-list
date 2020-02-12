/**
 * Return the matched pattern in a string.
 */
import util from '../util/index'
function match(input, pattern, flag) {

      let reg = new RegExp(pattern, flag);

      return util.isString(input)
        ? input.match(reg)
        : null;
    }
 export default match
