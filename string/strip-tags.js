/**
 * strip html tags from string
 */
import util from "../util";
function stripTags(input) {
      return util.isString(input)
        ? input.replace(/<\S[^><]*>/g, '')
        : input;
}

export default stripTags
