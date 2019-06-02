import isFlush from "./isFlush";

describe("UTIL: isFlush", () => {
  it("should return TRUE if all suits match", () => {
    const mockSuits = [
      "DIAMONDS",
      "DIAMONDS",
      "DIAMONDS",
      "DIAMONDS",
      "DIAMONDS"
    ];
    expect(isFlush(mockSuits)).toEqual(true);
  });

  it("should return FALSE if suits do not match", () => {
    const mockSuits = [
      "DIAMONDS",
      "HEARTS",
      "DIAMONDS",
      "DIAMONDS",
      "DIAMONDS"
    ];
    expect(isFlush(mockSuits)).toEqual(false);
  });
});
