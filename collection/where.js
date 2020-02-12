/**
 * of each element in a collection to the given properties object,
 * returning an array of all elements that have equivalent property values.
 *
 */
import util from "../util";

function where(collection, object) {
  if (util.isUndefined(object)) return collection;
  collection = util.isObject(collection)
    ? util.toArray(collection)
    : collection;

  return collection.filter(function (elm) {
    return util.objectContains(object, elm);
  });
}

export default where
