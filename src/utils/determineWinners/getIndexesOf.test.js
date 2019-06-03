import getIndexesOf from "./getIndexesOf";

describe("UTIL: getIndexesOf", () => {
  describe("if there is one winner", () => {
    it("should return the index of the matching value", () => {
      const mockRankings = [3, 0, 7, 1];
      const highestRank = 7;
      expect(getIndexesOf(mockRankings, highestRank)).toEqual([2]);
    });
  });

  describe("if there are multiple winners", () => {
    it("should return all indexes of matching values", () => {
      const mockRankings = [3, 0, 7, 7];
      const highestRank = 7;
      expect(getIndexesOf(mockRankings, highestRank)).toEqual([2, 3]);
    });
  });
});
