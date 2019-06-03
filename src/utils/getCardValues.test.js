import getCardValues from "./getCardValues";

describe("UTIL: getCardValues", () => {
  it("should return an array of card values", () => {
    const mockCards = [
      { value: "Q", suit: "SPADES" },
      { value: "4", suit: "CLUBS" },
      { value: "9", suit: "CLUBS" },
      { value: "T", suit: "DIAMONDS" },
      { value: "A", suit: "HEARTS" }
    ];
    expect(getCardValues(mockCards)).toEqual(["Q", "4", "9", "T", "A"]);
  });
});
