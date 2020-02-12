/**
* Right trim. Similar to trimFilter, but only for right side.
*/
import util from '../util/index'
function rtrim(input, chars) {
      let trim = chars || '\\s';

      return util.isString(input)
        ? input.replace(new RegExp(trim + '+$'), '')
        : input;
}

export default rtrim

