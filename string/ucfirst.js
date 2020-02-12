/**
 * ucfirst
 */
import util from "../util";

function ucfirst(input) {

  return util.isString(input)
    ? input
      .split(' ')
      .map(function (ch) {
        return ch.charAt(0).toUpperCase() + ch.substring(1);
      })
      .join(' ')
    : input;
}

export default ucfirst
