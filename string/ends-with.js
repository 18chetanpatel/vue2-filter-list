/**
 * checks whether string ends with the ends parameter.
 */
import util from '../util/index'
function endsWith(input, ends, csensitive) {

      let sensitive = csensitive || false,
        position;

      if(!util.isString(input) || util.isUndefined(ends)) {
        return input;
      }

      input = (sensitive) ? input : input.toLowerCase();
      position = input.length - ends.length;

      return input.indexOf((sensitive) ? ends : ends.toLowerCase(), position) !== -1;
  }

export default endsWith
