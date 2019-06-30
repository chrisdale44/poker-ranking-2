import determineHand from "./index";
import checkForLowAce from "./checkForLowAce";

jest.mock("./checkForLowAce");

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
      },
      ascendingValues: ["4", "9", "T", "Q", "A"]
    });
  });

  describe("if it is a straight containing an Ace", () => {
    it("should check for low Ace straight", () => {
      const mockCards = [
        { value: "Q", suit: "SPADES" },
        { value: "T", suit: "CLUBS" },
        { value: "J", suit: "CLUBS" },
        { value: "K", suit: "DIAMONDS" },
        { value: "A", suit: "HEARTS" }
      ];
      determineHand(mockCards);
      expect(checkForLowAce).toHaveBeenCalled();
    });
  });
});
