import determineHand from "./index";

const mockCards = [
  { value: "Q", suit: "SPADES" },
  { value: "4", suit: "CLUBS" },
  { value: "9", suit: "CLUBS" },
  { value: "T", suit: "DIAMONDS" },
  { value: "A", suit: "HEARTS" }
];

describe("UTIL: determineHand", () => {
  it("should return hand object", () => {
    expect(determineHand(mockCards)).toEqual({
      pairs: [],
      threeOfAKind: [],
      fourOfAKind: [],
      flush: false,
      straight: false,
      ranking: {
        name: "high card",
        score: 0
      }
    });
  });
});
