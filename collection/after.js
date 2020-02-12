/**
 * get a collection and specified count, and returns all of the items
 * in the collection after the specified count.
 *
 */
import util from "../util";

function after(collection, count) {
  collection = util.isObject(collection)
    ? util.toArray(collection)
    : collection;

  return (util.isArray(collection))
    ? collection.slice(count)
    : collection;
}

export default after
