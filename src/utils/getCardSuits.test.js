import getCardSuits from "./getCardSuits";

describe("UTIL: getCardSuits", () => {
  it("should return an array of card values", () => {
    const mockCards = [
      { value: "Q", suit: "SPADES" },
      { value: "4", suit: "CLUBS" },
      { value: "9", suit: "CLUBS" },
      { value: "T", suit: "DIAMONDS" },
      { value: "A", suit: "HEARTS" }
    ];
    expect(getCardSuits(mockCards)).toEqual([
      "SPADES",
      "CLUBS",
      "CLUBS",
      "DIAMONDS",
      "HEARTS"
    ]);
  });
});
