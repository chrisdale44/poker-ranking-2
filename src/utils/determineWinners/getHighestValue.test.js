import getHighestValue from "./getHighestValue";

describe("UTIL: getHighestValue", () => {
  describe("if there is one winner", () => {
    it("should return the highest scoring rank", () => {
      const mockRankings = [3, 0, 7, 1];
      expect(getHighestValue(mockRankings)).toEqual(7);
    });
  });

  describe("if there is a split pot", () => {
    it("should return the highest scoring rank", () => {
      const mockRankings = [3, 0, 7, 7];
      expect(getHighestValue(mockRankings)).toEqual(7);
    });
  });
});
