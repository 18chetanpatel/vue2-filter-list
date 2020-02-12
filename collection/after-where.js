/**
 * get a collection and properties object, and returns all of the items
 * in the collection after the first that found with the given properties.
 *
 */
import util from "../util";

function afterWhere(collection, object) {

  collection = util.isObject(collection)
    ? util.toArray(collection)
    : collection;

  if (!util.isArray(collection) || util.isUndefined(object)) return collection;

  let index = collection.map(function (elm) {
    return util.objectContains(object, elm);
  }).indexOf(true);

  return collection.slice((index === -1) ? 0 : index);
}

export default afterWhere
