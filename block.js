class Block {
  constructor({ timestamp, lastHash, hash, data }) {
    this.data = data;
    this.hash = hash;
    this.lastHash = lastHash;
    this.timestamp = timestamp;
  }
}

//export default Block;
module.exports = Block;

// const fooBlockchain = new Blockchain();
// fooBlockchain.addBlock("1");
// fooBlockchain.addBlock("2");
// fooBlockchain.addBlock("3");
// fooBlockchain.addBlock("4");

// const lightningHash = data => {
//     return data + "*";
//   };

// class Blockchain {
//     constructor() {
//       const genesis = new Block("gen-data", "gen-hash", "gen-lastHash");

//       this.chain = [genesis];
//     }
//     addBlock(data) {
//       const lastHash = this.chain[this.chain.length - 1].hash;

//       const hash = lightningHash(data + lastHash);

//       const block = new Block(data, hash, lastHash);

//       this.chain.push(block);
//     }
//   }
