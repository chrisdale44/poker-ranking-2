import determineWinner from "./index";

const mockPlayers = [
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
      suits: ["S", "C", "C", "D", "H"],
      threeOfAKind: [],
      values: ["4", "9", "T", "Q", "A"]
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
      suits: ["S", "C", "C", "D", "H"],
      threeOfAKind: [],
      values: ["4", "9", "T", "Q", "A"]
    }
  },
  {
    id: 3,
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
      suits: ["S", "C", "C", "D", "H"],
      threeOfAKind: [],
      values: ["4", "9", "T", "Q", "A"]
    }
  }
];

describe("UTIL: determineWinner", () => {
  it("should return an array of winning player ID's", () => {
    expect(determineWinner(mockPlayers)).toEqual(["1"]);
  });
});
