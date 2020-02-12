/**
 * get (array/object, object/array) and return merged collection
 */
import util from "../util";

function concat(collection, joined) {

  if (util.isUndefined(joined)) return collection;

  if (util.isArray(collection)) {
    return util.isObject(joined)
      ? collection.concat(util.toArray(joined))
      : collection.concat(joined);
  }

  if (util.isObject(collection)) {
    var array = util.toArray(collection);
    return (util.isObject(joined))
      ? array.concat(util.toArray(joined))
      : array.concat(joined);
  }
  return collection;
}

export default concat

