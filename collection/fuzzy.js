/**
 * fuzzy string searching for array of strings, objects
 */
import util from "../util";
function fuzzy(collection, search, csensitive) {
      let sensitive = csensitive || false;
      collection = util.isObject(collection) ? util.toArray(collection) : collection;

      if(!util.isArray(collection) || util.isUndefined(search)) {
        return collection;
      }

      search = (sensitive) ? search : search.toLowerCase();

      return collection.filter(function(elm) {
        if(util.isString(elm)) {
          elm = (sensitive) ? elm : elm.toLowerCase();
          return util.hasApproxPattern(elm, search) !== false
        }
        return (util.isObject(elm)) ? _hasApproximateKey(elm, search) : false;
      });

      /**
       * checks if object has key{string} that match
       * to fuzzy search pattern
       * @param object
       * @param search
       * @returns {boolean}
       * @private
       */
      function _hasApproximateKey(object, search) {
        var properties = Object.keys(object),
          prop, flag;
        return 0 < properties.filter(function (elm) {
          prop = object[elm];

          //avoid iteration if we found some key that equal[performance]
          if(flag) return true;

          if (util.isString(prop)) {
            prop = (sensitive) ? prop : prop.toLowerCase();
            return flag = (util.hasApproxPattern(prop, search) !== false);
          }

          return false;

        }).length;
      }
    }

    export default fuzzy


