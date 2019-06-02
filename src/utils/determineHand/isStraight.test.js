import isStraight from "./isStraight";

describe("UTIL: isStraight", () => {
  it("should return TRUE if cards are in sequence", () => {
    const mockCards = ["3", "4", "5", "6", "7"];
    expect(isStraight(mockCards)).toEqual(true);
  });

  it("should return FALSE if cards are not in sequence", () => {
    const mockCards = ["3", "4", "6", "7", "8"];
    expect(isStraight(mockCards)).toEqual(false);
  });

  describe("Ace should be high and low", () => {
    it("should return TRUE for an Ace high straigh", () => {
      const mockCards = ["T", "J", "Q", "K", "A"];
      expect(isStraight(mockCards)).toEqual(true);
    });

    it("should return TRUE for a 5 high straigh", () => {
      const mockCards = ["2", "3", "4", "5", "A"];
      expect(isStraight(mockCards)).toEqual(true);
    });
  });
});
