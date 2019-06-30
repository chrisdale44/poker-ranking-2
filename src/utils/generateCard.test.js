import generateCard from "./generateCard";
import { CARD_VALUES, SUITS } from "../constants";

describe("UTIL: generateCard", () => {
  it("should return a card object containing a value and suit", () => {
    expect(generateCard()).toEqual(
      expect.objectContaining({
        value: expect.toBeOneOf(CARD_VALUES),
        suit: expect.toBeOneOf(SUITS)
      })
    );
  });
});
