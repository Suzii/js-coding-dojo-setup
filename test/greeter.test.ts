/// <reference path="../node_modules/@types/mocha/index.d.ts" />
import { expect } from "chai";
import { greet } from "../src/greeter";

describe("Greeter", () => {
  it("greets right person", () => {
      expect(greet('Suzii')).to.contain('Suzii');
  });

  it("returns 'Hello, world!' if null is passed", () => {
    expect(greet(null)).to.equal('Hello, world!');
    expect(greet()).to.contain('Hello, world!');
  });
});
