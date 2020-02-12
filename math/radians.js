/**
 * Convert angle from degrees to radians
 */
import util from "../util";

function radians(degrees, decimal) {

  // if decimal is not an integer greater than -1, we cannot do. quit with error "NaN"
  // if degrees is not a real number, we cannot do also. quit with error "NaN"
  if (util.isNumber(decimal) && isFinite(decimal) && decimal % 1 === 0 && decimal >= 0 &&
    util.isNumber(degrees) && isFinite(degrees)) {
    var radians = (degrees * 3.14159265359) / 180;
    return Math.round(radians * Math.pow(10, decimal)) / (Math.pow(10, decimal));
  }
  return 'NaN';
}

export default radians



