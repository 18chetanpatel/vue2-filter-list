/**
 * checks whether string starts with the starts parameter.
 */
import util from "../util";
function startsWith(input, start, csensitive) {

      let sensitive = csensitive || false;

      if(!util.isString(input) || util.isUndefined(start)) {
        return input;
      }

      input = (sensitive) ? input : input.toLowerCase();

      return !input.indexOf((sensitive) ? start : start.toLowerCase());
}

export default startsWith

