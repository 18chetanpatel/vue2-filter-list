/**
 * Convert number into abbreviations.
 * i.e: K for one thousand, M for Million, B for billion
 * e.g: number of users:235,221, decimal:1 => 235.2 K
 */
import util from "../util";
function shortFmt(number, decimal) {
      if(util.isNumber(decimal) && isFinite(decimal) && decimal%1===0 && decimal >= 0 &&
        util.isNumber(number) && isFinite(number)){
        if(number < 1e3) {
          return '' + number;  // Coerce to string
        } else if(number < 1e6) {
          return util.convertToDecimal((number / 1e3), decimal) + ' K';
        } else if(number < 1e9){
          return util.convertToDecimal((number / 1e6), decimal) + ' M';
        } else {
          return util.convertToDecimal((number / 1e9), decimal) + ' B';
        }

      }
      return 'NaN';
    }

    export default shortFmt
