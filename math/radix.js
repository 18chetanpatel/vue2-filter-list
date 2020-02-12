/**
 * converting decimal numbers to different bases(radix)
 */
import util from "../util";

function radix(input, radix) {

  let RANGE = /^[2-9]$|^[1-2]\d$|^3[0-6]$/;

  if (!util.isNumber(input) || !RANGE.test(radix)) {
    return input;
  }

  return input.toString(radix).toUpperCase();
}

export default radix
