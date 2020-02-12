/**
 * remove spaces from string, replace with "-" or given argument
 */
import util from '../util/index'
function slugify(input, sub) {
      let replace = (util.isUndefined(sub)) ? '-' : sub;

      return util.isString(input)
        ? input.toLowerCase().replace(/\s+/g, replace)
        : input;
}

export default slugify

