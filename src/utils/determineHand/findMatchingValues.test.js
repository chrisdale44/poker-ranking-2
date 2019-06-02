import findMatchingValues from "./findMatchingValues";

describe("UTIL: findMatchingValues", () => {
  it("should return the card value of a pair", () => {
    const mockValues = ["2", "2", "4", "5", "K"];
    expect(findMatchingValues(mockValues)).toEqual({
      pairs: ["2"],
      threeOfAKind: [],
      fourOfAKind: []
    });
  });

  it("should return the card values of two pair", () => {
    const mockValues = ["2", "2", "4", "K", "K"];
    expect(findMatchingValues(mockValues)).toEqual({
      pairs: ["2", "K"],
      threeOfAKind: [],
      fourOfAKind: []
    });
  });

  it("should return the card value of a Three of a kind", () => {
    const mockValues = ["2", "4", "4", "4", "K"];
    expect(findMatchingValues(mockValues)).toEqual({
      pairs: [],
      threeOfAKind: ["4"],
      fourOfAKind: []
    });
  });

  it("should return the card values of a Full house", () => {
    const mockValues = ["2", "2", "2", "K", "K"];
    expect(findMatchingValues(mockValues)).toEqual({
      pairs: ["K"],
      threeOfAKind: ["2"],
      fourOfAKind: []
    });
  });

  it("should return the card value of a Four of a kind", () => {
    const mockValues = ["2", "K", "K", "K", "K"];
    expect(findMatchingValues(mockValues)).toEqual({
      pairs: [],
      threeOfAKind: [],
      fourOfAKind: ["K"]
    });
  });
});
