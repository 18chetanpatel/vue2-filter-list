/**
 * get string with {n} and replace match with enumeration values
 */
import util from "../util";
function stringular(input) {

      let args = Array.prototype.slice.call(arguments, 1);

      return input.replace(/{(\d+)}/g, function (match, number) {
        return util.isUndefined(args[number]) ? match : args[number];
      });
}

export default stringular
