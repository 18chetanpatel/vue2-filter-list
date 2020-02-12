/**
 * get collection or string and return if it empty
 */
import util from "../util";

function isEmpty(collection) {
  return util.isObject(collection)
    ? !util.toArray(collection).length
    : !collection.length;
}

export default isEmpty

