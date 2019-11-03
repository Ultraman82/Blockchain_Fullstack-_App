const Block = require("./block");
const { GENESIS_DATA } = require("./config");
const cryptoHash = require("./crypto-hash");
// import Block from "./block";

describe("mineBlock()", () => {
  const lastBlock = Block.genesis();
  const data = "mined data";
  const minedBlock = Block.mineBlock({ lastBlock, data });

  it("returns a Block instance", () => {
    expect(minedBlock instanceof Block).toBe(true);
  });

  it("sets the `lastHAsh` to be the `hah`of the lastBlock", () => {
    expect(minedBlock.lastHash).toEqual(lastBlock.hash);
  });

  it("sets the `data`", () => {
    expect(minedBlock.data).toEqual(data);
  });

  it("sets a `timestamp`", () => {
    expect(minedBlock.timestamp).not.toEqual(undefined);
  });

  it("creates a SHA-256 `hash` baed on thr proper inputs", () => {
    expect(minedBlock.hash).toEqual(
      cryptoHash(minedBlock.timestamp, lastBlock.hash, data)
    );
  });
});

// describe("Block", () => {
//   const timestamp = "a-date";
//   const lastHash = "foo-lh";
//   const hash = "bar-hash";
//   const data = ["block", "chain"];
//   const block = new Block({
//     timestamp,
//     lastHash,
//     hash,
//     data
//   });
//   it("has a timestamp, lastHash, hash and data", () => {
//     expect(block.timestamp).toEqual(timestamp);
//     expect(block.lastHash).toEqual(lastHash);
//     expect(block.hash).toEqual(hash);
//     expect(block.data).toEqual(data);
//   });

//   describe("genesis()", () => {
//     const genesisBlock = Block.genesis();

//     console.log("genesisBlock", genesisBlock);
//     it("returns a Block instance", () => {
//       expect(genesisBlock instanceof Block).toBe(true);
//     });

//     it("returns the genesis data", () => {
//       expect(genesisBlock).toEqual(GENESIS_DATA);
//     });
//   });
// });
