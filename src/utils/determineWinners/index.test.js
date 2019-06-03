import determineWinner from "./index";

const mockPlayers = [
  {
    id: 0,
    cards: [
      { value: "Q", suit: "SPADES" },
      { value: "4", suit: "SPADES" },
      { value: "9", suit: "SPADES" },
      { value: "T", suit: "SPADES" },
      { value: "A", suit: "SPADES" }
    ],
    hand: {
      flush: true,
      fourOfAKind: [],
      pairs: [],
      ranking: 5,
      straight: false,
      threeOfAKind: []
    }
  },
  {
    id: 1,
    cards: [
      { value: "Q", suit: "S" },
      { value: "4", suit: "C" },
      { value: "9", suit: "C" },
      { value: "T", suit: "D" },
      { value: "A", suit: "H" }
    ],
    hand: {
      flush: false,
      fourOfAKind: [],
      pairs: [],
      ranking: 0,
      straight: false,
      threeOfAKind: []
    }
  },
  {
    id: 2,
    cards: [
      { value: "Q", suit: "S" },
      { value: "4", suit: "C" },
      { value: "9", suit: "C" },
      { value: "T", suit: "D" },
      { value: "A", suit: "H" }
    ],
    hand: {
      flush: false,
      fourOfAKind: [],
      pairs: [],
      ranking: 0,
      straight: false,
      threeOfAKind: []
    }
  }
];

describe("UTIL: determineWinner", () => {
  it("should return an array of winning player ID's", () => {
    expect(determineWinner(mockPlayers)).toEqual([0]);
  });
});
