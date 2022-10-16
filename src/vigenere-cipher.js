const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
  }

  encrypt(message, key) {
    if (!message || !key) {
      console.log('ERROR');
      throw new Error('Incorrect arguments!');
    }

    const messageStr = message.toUpperCase().split(' ').join('');
    key = key.toUpperCase();
    const encryptedStr = this.machine(messageStr, key);

    return this.fixSpaces(message, encryptedStr);






  }
  decrypt(message, key) {
    if (!message || !key) {
      console.log('ERROR');
      throw new Error('Incorrect arguments!');
    }

    const messageStr = message.toUpperCase().split(' ').join('');
    key = key.toUpperCase();
    const decryptedStr = this.machine(messageStr, key, 'decrypt');

    return this.fixSpaces(message, decryptedStr);

  }

  fixSpaces(message, result){
    let res = '';
    let spaceIndexes = [];
    for (let i = 0; i < message.length; i++) {
      if (message[i] === ' ') spaceIndexes.push(i);
    }

    if (spaceIndexes.length === 0) return result;

    res+= result.substring(0, spaceIndexes[0]) + ' ';
    for (let i = 0; i < spaceIndexes.length - 1; i++) {
      res+= result.substring(spaceIndexes[i] - i, spaceIndexes[i + 1] - i - 1) + ' ';
    }

    res+= result.substring(spaceIndexes[spaceIndexes.length - 1] - spaceIndexes.length + 1);

    if (!this.mode) res = res.split('').reverse().join('');
    return res;
  }


  machine(message, key, mode = 'encrypt'){
    let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const maxlength = message.length;
    let res = '';
    for(let i = 0; i < maxlength; i++) {
      if (a.indexOf(message[i]) === -1) {
        res += message[i];
        continue;
      }
      const mi = a.indexOf(message[((i >= message.length) ? i % message.length : i)]);
      const ki_s = key[((i >= key.length) ? i % key.length : i)];

      let ki = a.indexOf(ki_s);
      ki = ((typeof mode !== 'undefined' && mode.indexOf('decrypt') !== -1) ? (-ki) : ki);

      const c = a[(((a.length + (mi + ki)) % a.length))];
      res += c;
    }
    return res;
  }
}

module.exports = {
  VigenereCipheringMachine
};
