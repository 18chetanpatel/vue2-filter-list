/**
 * get collection and properties object, and removed elements
 * with this properties
 */

import util from "../util";

function removeWith(collection, object) {

  if (util.isUndefined(object)) {
    return collection;
  }
  collection = util.isObject(collection)
    ? util.toArray(collection)
    : collection;

  return collection.filter(function (elm) {
    return !util.objectContains(object, elm);
  });
}

export default removeWith
