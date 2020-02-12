/**
 * format a string or a number into a us-style
 * phone number in the form (***) ***-****
 */
function phoneUS(num) {
      num += '';
      return '(' + num.slice(0, 3) + ') ' + num.slice(3, 6) + '-' + num.slice(6);
}

export default phoneUS

