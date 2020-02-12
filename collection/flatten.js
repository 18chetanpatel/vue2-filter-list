/**
 * Flattens a nested array (the nesting can be to any depth).
 * If you pass shallow, the array will only be flattened a single level
 */
import util from "../util";
function flatten(collection, shallow) {

      shallow = shallow || false;
      collection = util.isObject(collection)
        ? util.toArray(collection)
        : collection;

      if(!util.isArray(collection)) {
        return collection;
      }

      return !shallow
        ? flatten_fun(collection, 0)
        : [].concat.apply([], collection);
    }


/**
 * flatten nested array (the nesting can be to any depth).
 * @param array {Array}
 * @param i {int}
 * @returns {Array}
 * @private
 */
function flatten_fun(array, i) {
  i = i || 0;

  if(i >= array.length)
    return array;

  if(util.isArray(array[i])) {
    return flatten_fun(array.slice(0,i)
      .concat(array[i], array.slice(i+1)), i);
  }
  return flatten_fun(array, i+1);
}

export default flatten
