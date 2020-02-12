/**
 * get string as parameter and return encoded string
 */
import util from "../util";
function uriEncode(input) {
        return util.isString(input)
          ? window.encodeURI(input)
          : input;
}

export default uriEncode

