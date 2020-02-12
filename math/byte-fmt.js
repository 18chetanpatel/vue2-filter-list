/**
 * @ngdoc filter
 * @name formatBytes
 * @kind function
 *
 * @description
 * Convert bytes into appropriate display
 * 1024 bytes => 1 KB
 */
import util from "../util";

function byteFmt(bytes, decimal) {
  let compared = [{str: 'B', val: 1024}];
  ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'].forEach(function (el, i) {
    compared.push({str: el, val: compared[i].val * 1024});
  });
  if (util.isNumber(decimal) && isFinite(decimal) && decimal % 1 === 0 && decimal >= 0 &&
    util.isNumber(bytes) && isFinite(bytes)) {
    var i = 0;
    while (i < compared.length - 1 && bytes >= compared[i].val) i++;
    bytes /= i > 0 ? compared[i - 1].val : 1;
    return util.convertToDecimal(bytes, decimal) + ' ' + compared[i].str;
  }
  return 'NaN';
}

export default byteFmt
