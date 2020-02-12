/**
 * Convert bytes into appropriate display
 * 1024 kilobytes => 1 MB
 */
import util from "../util";

function kbFmt(bytes, decimal) {
  let compared = [{str: 'KB', val: 1024}];
  ['MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'].forEach(function (el, i) {
    compared.push({str: el, val: compared[i].val * 1024});
  });

  if (util.isNumber(decimal) && isFinite(decimal) && decimal % 1 === 0 && decimal >= 0 &&
    util.isNumber(bytes) && isFinite(bytes)) {
    let i = 0;
    while (i < compared.length - 1 && bytes >= compared[i].val) i++;
    bytes /= i > 0 ? compared[i - 1].val : 1;
    return util.convertToDecimal(bytes, decimal) + ' ' + compared[i].str;
  }
  return 'NaN';
}

export default kbFmt
