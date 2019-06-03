import doCardsMatch from "./doCardsMatch";

describe("UTIL: doCardsMatch", () => {
  it("should return FALSE if hands do not match", () => {
    const mockHands = [
      [
        { value: "Q", suit: "S" },
        { value: "4", suit: "C" },
        { value: "9", suit: "C" },
        { value: "T", suit: "D" },
        { value: "A", suit: "H" }
      ],
      [
        { value: "Q", suit: "D" },
        { value: "4", suit: "D" },
        { value: "9", suit: "H" },
        { value: "T", suit: "C" },
        { value: "3", suit: "S" }
      ]
    ];
    expect(doCardsMatch(mockHands)).toEqual(false);
  });

  it("should return TRUE if hands do not match", () => {
    const mockHands = [
      [
        { value: "Q", suit: "S" },
        { value: "4", suit: "C" },
        { value: "9", suit: "C" },
        { value: "T", suit: "D" },
        { value: "A", suit: "H" }
      ],
      [
        { value: "Q", suit: "D" },
        { value: "4", suit: "D" },
        { value: "9", suit: "H" },
        { value: "T", suit: "C" },
        { value: "A", suit: "S" }
      ]
    ];
    expect(doCardsMatch(mockHands)).toEqual(true);
  });
});
