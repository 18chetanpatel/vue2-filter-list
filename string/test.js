/**
 * test if a string match a pattern.
 */
import util from "../util";
function test(input, pattern, flag) {

      let reg = new RegExp(pattern, flag);
      return util.isString(input)
        ? reg.test(input)
        : input;
}

export default test

