/**
 * get a collection and properties object, and returns all of the items
 * in the collection before the first that found with the given properties.
 */
import util from "../util";

function beforeWhere(collection, object) {

  collection = util.isObject(collection)
    ? util.toArray(collection)
    : collection;

  if (!util.isArray(collection) || util.isUndefined(object)) return collection;

  var index = collection.map(function (elm) {
    return util.objectContains(object, elm);
  }).indexOf(true);

  return collection.slice(0, (index === -1) ? collection.length : ++index);
}

export default beforeWhere
