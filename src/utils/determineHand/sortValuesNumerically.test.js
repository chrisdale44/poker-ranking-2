import sortValuesNumerically from "./sortValuesNumerically";

describe("UTIL: sortValuesNumerically", () => {
  it("should sort card values into numerical order", () => {
    const mockValues = ["7", "3", "K", "T", "A"];
    expect(sortValuesNumerically(mockValues)).toEqual([
      "3",
      "7",
      "T",
      "K",
      "A"
    ]);
  });
});
