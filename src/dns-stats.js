const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (domains.length === 0) return {};

  const domainParts = [];
  for (const d of domains) {
    const parts = d.split('.');
    domainParts.push(parts);
  }

  const obj = {};
  for (const d of domainParts) {
    for (let i = d.length, c = 1; i > 0; i--, c++) {
      const domainName = d.map(el => '.' + el).reverse().join('');
      console.log(domainName)
      domainName in obj ? obj[domainName]++ : obj[domainName] = 1; // поле объекта и кол-во
      d.shift();
    }
  }
  return obj;
}

module.exports = {
  getDNSStats
};
