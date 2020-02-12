/**
 * Repeats a string n times
 */
import util from '../util/index'
function repeat(input, n, separator) {

      let times = ~~n;
      if(!util.isString(input)) {
        return input;
      }
      return !times
        ? input
        : strRepeat(input, --n, separator || '');
}


/**
 * Repeats a string n times with given separator
 * @param str string to repeat
 * @param n number of times
 * @param sep separator
 * @returns {*}
 */
function strRepeat(str, n, sep) {
  if(!n) {
    return str;
  }
  return str + sep + strRepeat(str, --n, sep);
}

export default repeat
