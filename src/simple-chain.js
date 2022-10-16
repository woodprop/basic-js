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
    console.log(position)
    console.log(this.chain)
    if (this.chain[position - 1] === undefined) {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chain.splice(position - 1, 1);
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

    this.chain = [];
    return res;
  }
};

module.exports = {
  chainMaker
};
