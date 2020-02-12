/**
 * truncates a string given a specified length, providing a custom string to denote an omission.
 */
import util from "../util";
function truncate(input, length, suffix, preserve) {

      length = util.isUndefined(length) ? input.length : length;
      preserve = preserve || false;
      suffix = suffix || '';

      if(!util.isString(input) || (input.length <= length)) return input;

      return input.substring(0, (preserve)
        ? ((input.indexOf(' ', length) === -1) ? input.length : input.indexOf(' ', length))
        : length) + suffix;
}

export default truncate
