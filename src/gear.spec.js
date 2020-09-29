import gear, { getSynthesizers } from "./gear";

describe("gear", function () {
  it("should return all gear", function () {
    expect(gear()).toEqual("gear");
  });
});

describe("gear", function () {
  describe("getSynths", function () {
    it("should return synths", function () {
      expect(getSynthesizers()).toEqual({
        synthesizers: ["roland", "moog", "korg"],
      });
    });
  });
});
