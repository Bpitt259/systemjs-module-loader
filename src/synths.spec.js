import synths from "./synths";

describe("synths", function () {
  it("should return synths", function () {
    expect(synths()).toEqual(["roland", "moog", "korg"]);
  });
});
