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
    const messageStr = message.toUpperCase().split(' ').join('');
    key = key.toUpperCase();

    const encryptedStr = this.machine(messageStr, key);
    console.log(message)
    console.log(messageStr)
    console.log(encryptedStr)

    let res = '';

    let spaceIndexes = [];
    for (let i = 0; i < message.length; i++) {
      if (message[i] === ' ') spaceIndexes.push(i);
    }
    console.log('spaves:', spaceIndexes)

    if (spaceIndexes.length === 0) return encryptedStr;
    console.log('OLOLO')

    res+= encryptedStr.substring(0, spaceIndexes[0]) + ' ';
    console.log('res', res)

    for (let i = 0; i < spaceIndexes.length - 1; i++) {
      res+= encryptedStr.substring(spaceIndexes[i] - i, spaceIndexes[i + 1] - i - 1) + ' ';
    }
    res+= encryptedStr.substring(spaceIndexes[spaceIndexes.length - 1] - spaceIndexes.length + 1);


    if (!this.mode) res = res.split('').reverse().join('');

    // console.log(res);

    return res;





  }
  decrypt() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }


  machine(message, key, mode = 'encrypt'){
    let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    const maxlength = message.length;
    let res = '';
    for(let i = 0; i < maxlength; i++) {
      if (a.indexOf(message[i]) === -1) {
        res += message[i];
        continue;
      }
      const mi = a.indexOf( message[((i >= message.length) ? i % message.length : i)] );
      const ki_s = key[ ((i >= key.length) ? i % key.length : i) ];

      let ki = a.indexOf( ki_s );
      ki = ((typeof mode !== 'undefined' && mode.indexOf('decrypt') !== -1) ? (-ki) : ki);
      const c = a[((( a.length + (mi + ki)) % a.length ))];				//символ по таблице Виженера.
      res += c;		    												//Добавить символ к результату.
    }
    return res; //вернуть строку результата
  }
}

module.exports = {
  VigenereCipheringMachine
};
