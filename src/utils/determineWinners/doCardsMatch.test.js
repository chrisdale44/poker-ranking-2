import doCardsMatch from "./doCardsMatch";

describe("UTIL: doCardsMatch", () => {
  it("should return FALSE if hands do not match", () => {
    const mockHands = [["4", "9", "T", "Q", "A"], ["3", "4", "9", "T", "Q"]];
    expect(doCardsMatch(mockHands)).toEqual(false);
  });

  it("should return TRUE if hands do match", () => {
    const mockHands = [["4", "9", "T", "Q", "A"], ["4", "9", "T", "Q", "A"]];
    expect(doCardsMatch(mockHands)).toEqual(true);
  });
});
