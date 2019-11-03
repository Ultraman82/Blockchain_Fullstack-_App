const cryptoHash = require("./crypto-hash");

describe("cryptoHash()", () => {
  if (
    ("generate a SHA-256 hashed output",
    () => {
      expect(crypto("foo")).toEqual(
        "8849853b957fe153b7056d0e7d65f99fb21070daf5122ddf1d7c942d4643c33d"
      );
    })
  );
  it("produces the same hash with the same input arguments in any order", () => {
    expect(cryptoHash("one", "two", "three")).toBe(
      cryptoHash("three", "two", "one")
    );
  });
});
