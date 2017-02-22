/// <reference path="../node_modules/@types/mocha/index.d.ts" />
import { expect } from "chai";
import { Ocr } from "../src/ocr";

describe("Ocr", () => {
  it("return correct number", () => {
    let number = ' _  _  _  _  _  _  _  _  _ \n';
       number += '| || || || || || || || || |\n';
       number += '|_||_||_||_||_||_||_||_||_|\n';

    let ocr = new Ocr();
    expect(ocr.getAccountNumber(number)).to.equal('000000000');
  });
});
