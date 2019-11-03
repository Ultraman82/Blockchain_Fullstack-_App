const Block = require("./block");
// import Block from "./block";

describe("Block", () => {
  const timestamp = "a-date";
  const lastHash = "foo-lh";
  const hash = "bar-hash";
  const data = ["block", "chain"];
  const block = new Block({
    timestamp,
    lastHash,
    hash,
    data
  });
  it("has a timestamp, lastHash, hash and data", () => {
    expect(block.timestamp).toEqual(timestamp);
    expect(block.lastHash).toEqual(lastHash);
    expect(block.hash).toEqual(hash);
    expect(block.data).toEqual(data);
  });
});
