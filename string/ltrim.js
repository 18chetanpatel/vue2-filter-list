/**
 * Left trim. Similar to trimFilter, but only for left side.
 */
import util from '../util/index'
function ltrim(input, chars) {
      let trim = chars || '\\s';
      return util.isString(input) ? input.replace(new RegExp('^' + trim + '+'), '') : input;
}

export default ltrim
