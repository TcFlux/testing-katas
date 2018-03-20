const { expect } = require("chai");
const wrap = require("./wrap");

describe("wrap", () => {
    it("Returns empty string if empty string was provided", () => {
        expect(wrap("", 10)).to.equal("");
    });
    it("Returns entire string if the string is shorter than length provided", () => {
        expect(wrap("short", 20)).to.equal("short");
    });
    it("Returns entire string if no spaces are present", () => {
        expect(wrap("supercalifragilisticexpeliadocious", 4)).to.equal("supercalifragilisticexpeliadocious");
    });
    it("Returns a string split into new lines at maxLength if that character is a space", () => {
        expect(wrap("123456789 123456789 123456789 ", 10)).to.equal("123456789\n123456789\n123456789");
    });
    it("Returns a string split by line only on spaces at or near provided length", () => {
        expect(wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20)).to.equal("Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.")
    });
});