const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const letters1 = {};
  const letters2 = {};

  for (let i = 0; i < s1.length; i++) {
    if (letters1[s1[i]]) {
      letters1[s1[i]]++;
    } else {
      letters1[s1[i]] = 1;
    }
  }

  for (let i = 0; i < s2.length; i++) {
    if (letters2[s2[i]]) {
      letters2[s2[i]]++;
    } else {
      letters2[s2[i]] = 1;
    }
  }

  let count = 0;

  for (const [key, value] of Object.entries(letters1)) {
    if (letters2[key]) {
      count += letters2[key] < value ? letters2[key] : value;
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};
