/**
 * @ngdoc filter
 * @name Percent
 * @kind function
 *
 * @description
 * percentage between two numbers
 */
import util from "../util";

function percent(input, divided, round) {
  let divider = util.isString(input) ? Number(input) : input;
  divided = divided || 100;
  round = round || false;

  if (!util.isNumber(divider) || isNaN(divider)) return input;

  return round
    ? Math.round((divider / divided) * 100)
    : (divider / divided) * 100;
}

export default percent
