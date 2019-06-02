import determineHand from "./index";

const mockHand = [
  { value: "Q", suit: "S" },
  { value: "4", suit: "C" },
  { value: "9", suit: "C" },
  { value: "T", suit: "D" },
  { value: "A", suit: "H" }
];

describe("UTIL: determineHand", () => {
  it("should return hand object", () => {
    expect(determineHand(mockHand)).toEqual({});
  });
});
