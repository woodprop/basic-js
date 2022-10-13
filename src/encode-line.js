const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const letters = [];

  for (let i = 0; i < str.length; i++) {
    const el = letters[letters.length - 1];
    if (el && el[str[i]]) {
      el[str[i]]++;
    } else {
      const obj = {};
      obj[str[i]] = 1;
      letters.push(obj);
    }
  }

  let res = '';
  letters.forEach(function (el) {
    for (const [letter, count] of Object.entries(el)) {
      res += (count > 1 ? count : '') + letter;
    }
  });

  return res;
}

module.exports = {
  encodeLine
};
