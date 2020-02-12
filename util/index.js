
var util = {};

util.isString = function(item) {
    return typeof item==='string';
};

util.isUndefined = function(item) {
    return typeof item==='undefined';
};

util.isNull = function(item) {
  return typeof item == null;
};

util.isArray = function (obj) {
    return Array.isArray(obj);
};

util.isNumber = function(item) {
    return typeof item === "number";
};
util.convertToDecimal = function convertToDecimal(num, decimal){
  return Math.round(num * Math.pow(10,decimal)) / (Math.pow(10, decimal));
};

util.objectContains=function objectContains(partial, object) {
  let keys = Object.keys(partial);
  return keys.map(function(el) {
    return (object[el] !== undefined) && (object[el] == partial[el]);
  }).indexOf(false) == -1;

};

util.hasApproxPattern=function hasApproxPattern(word, pattern) {
  // cheaper version of indexOf; instead of creating each
  // iteration new str.
  function indexOf(word, p, c) {
    var j = 0;
    while ((p + j) <= word.length) {
      if (word.charAt(p + j) == c) return j;
      j++;
    }
    return -1;
  }
  var p = 0;
  for (var i = 0; i <= pattern.length; i++) {
    var index = indexOf(word, p, pattern.charAt(i));
    if (index == -1) return false;
    p += index + 1;
  }
  return true
}

util.toArray=function toArray(object) {
  return util.isArray(object)
    ? object
    : Object.keys(object).map(function(key) {
      return object[key];
    });
};
util.convertRangeToArray = function (range) {
  return [...Array(range + 1).keys()].slice(1)
};

util.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
};
util.isFunction = function(obj) {
    return typeof obj === 'function'
};

util.toArray = function(list, start) {
  start = start || 0
  var i = list.length - start
  var ret = new Array(i)
  while (i--) {
    ret[i] = list[i + start]
  }
  return ret
};

util.toNumber = function(value) {
  if (typeof value !== 'string') {
    return value
  } else {
    var parsed = Number(value)
    return isNaN(parsed)
      ? value
      : parsed
  }
};


util.convertArray = function (value) {
    if (util.isArray(value)) {
      return value
    } else if (util.isPlainObject(value)) {
      // convert plain object to array.
      var keys = Object.keys(value)
      var i = keys.length
      var res = new Array(i)
      var key
      while (i--) {
        key = keys[i]
        res[i] = {
          $key: key,
          $value: value[key]
        }
      }
      return res
    } else {
      return value || []
    }
}

function multiIndex(obj,is) {  // obj,['1','2','3'] -> ((obj['1'])['2'])['3']
    return is.length ? multiIndex(obj[is[0]],is.slice(1)) : obj
}

util.getPath = function(obj,is) {   // obj,'1.2.3' -> multiIndex(obj,['1','2','3'])
    return multiIndex(obj,is.split('.'))
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 *
 * @param {*} obj
 * @return {Boolean}
 */

var toString = Object.prototype.toString
var OBJECT_STRING = '[object Object]'
util.isPlainObject = function (obj) {
  return toString.call(obj) === OBJECT_STRING
}

util.exist = function(value) {
  return value !== null && typeof value !== 'undefined'
}

export default util;
