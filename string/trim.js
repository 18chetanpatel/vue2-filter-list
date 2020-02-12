/**
 *  Strip whitespace (or other characters) from the beginning and end of a string
 */
import util from "../util";
function trim(input, chars) {

      let trim = chars || '\\s';

      return util.isString(input)
        ? input.replace(new RegExp('^' + trim + '+|' + trim + '+$', 'g'), '')
        : input;
}

export default trim
