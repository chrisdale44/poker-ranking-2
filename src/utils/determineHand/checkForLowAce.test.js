import checkForLowAce from "./checkForLowAce";

describe("UTIL: checkForLowAce", () => {
  describe("if it is a 5 high straight", () => {
    it("should return the ACE at the beginning of the array", () => {
      const values = ["2", "3", "4", "5", "A"];
      expect(checkForLowAce(values)).toEqual(["A", "2", "3", "4", "5"]);
    });
  });

  describe("if it is an Ace high straight", () => {
    it("should return the ACE at the end of the array", () => {
      const values = ["T", "J", "Q", "K", "A"];
      expect(checkForLowAce(values)).toEqual(values);
    });
  });
});
