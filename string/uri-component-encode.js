/**
 * get string as parameter and return encoded string
 */
import util from "../util";
function uriComponentEncode(input) {

        return util.isString(input)
          ? window.encodeURIComponent(input)
          : input;
}

export default uriComponentEncode

