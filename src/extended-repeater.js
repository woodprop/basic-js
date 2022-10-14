const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let res = '';
  let template = str;
  let separator = 'separator' in options ? options.separator : '+';
  let addition = 'addition' in options ? options.addition : '';
  let additionSeparator = 'additionSeparator' in options ? options.additionSeparator : '|';

  if ('additionRepeatTimes' in options && options.additionRepeatTimes > 1) {
    let additionRes = '';
    for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
      additionRes += options.addition + additionSeparator;
    }
    additionRes += options.addition;
    addition = additionRes;
  }

  if ('repeatTimes' in options) {
    for (let i = 0; i < options.repeatTimes - 1; i++) {
      res += template + addition + separator;
    }
  }
  res += template + addition;

  return res;
}

module.exports = {
  repeater
};
