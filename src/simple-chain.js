const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    this.chain.splice(position, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let res = '';
    for (let i = 0; i < this.chain.length - 1; i++) {
      res += `( ${this.chain[i]} )~~`;
    }
    res += `( ${this.chain[this.chain.length - 1]} )`;

    return res;
  }
};

module.exports = {
  chainMaker
};
