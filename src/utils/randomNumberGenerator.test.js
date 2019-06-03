import randomNumberGenerator from "./randomNumberGenerator";

describe("UTIL: randomNumberGenerator", () => {
  it("should return a number within the given min and max", () => {
    const min = 0;
    const max = 13;
    const result = randomNumberGenerator(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });
});
