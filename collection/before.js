/**
 * get a collection and specified count, and returns all of the items
 * in the collection before the specified count.
 */
import util from "../util";

function before(collection, count) {
  collection = util.isObject(collection)
    ? util.toArray(collection)
    : collection;

  return (util.isArray(collection))
    ? collection.slice(0, (!count) ? count : --count)
    : collection;
}

export default before
