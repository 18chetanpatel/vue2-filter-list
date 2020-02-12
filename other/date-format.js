/**
 * Converts a date to given format
 */
import * as moment from 'moment';
function dateFormat (input,format) {
  return input
    ? moment(input).format(format)
    : input
}

export default dateFormat
