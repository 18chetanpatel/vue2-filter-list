/**
 * split a string by a provided delimiter (none '' by default) and skip first n-delimiters
 */
import util from '../util/index'
function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
function split(input, delimiter, skip) {

      let _regexp, _matches, _splitted, _temp;

      if (util.isUndefined(input) || !util.isString(input)) {
        return null;
      }
      if (util.isUndefined(delimiter)) delimiter = '';
      if (isNaN(skip)) skip = 0;

      _regexp = new RegExp(escapeRegExp(delimiter), 'g');
      _matches = input.match(_regexp);

      if (util.isNull(_matches) || skip >= _matches.length) {
        return [input];
      }

      if (skip === 0) return input.split(delimiter);

      _splitted = input.split(delimiter);
      _temp = _splitted.splice(0, skip + 1);
      _splitted.unshift(_temp.join(delimiter));

      return _splitted;
}

export default split
