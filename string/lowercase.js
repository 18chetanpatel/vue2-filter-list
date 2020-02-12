/**
 * Converts a string to LOWERCASE
 */

function lowercase (input) {
  return (input || input === 0)
    ? input.toString().toLowerCase()
    : ''
}

export default lowercase
