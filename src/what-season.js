const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (!(date instanceof Date)) throw new Error('Invalid date!');
  try {
    date.getDate();
  } catch (e) {
    throw new Error('Invalid date!');
  }
  if (new Date(date.toString()).getFullYear() !== date.getFullYear()) throw new Error('Invalid date!');


  const month = date.getMonth();
  if (month < 2 || month >= 11 ) return 'winter';
  if (month > 1 && month < 5) return 'spring';
  if (month > 4 && month < 8) return 'summer';
  if (month > 7 && month < 11) return 'autumn';

}

module.exports = {
  getSeason
};
