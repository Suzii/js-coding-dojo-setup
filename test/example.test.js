import { expect } from "chai";

describe("Simple test", () => {
  it("1 plus 1 equals 2", () => {
      expect(1+1).to.equal(2);
  });

  it("should fail", () => {
    expect(1+1).to.equal(3);
  });
});
