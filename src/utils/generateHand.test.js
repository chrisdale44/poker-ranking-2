import generateHand from "./generateHand";
import { CARDS_PER_HAND, CARD_VALUES, SUITS } from "../constants";

describe("UTIL: generateHand", () => {
  it("should return an array of cards", () => {
    expect(generateHand()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          value: expect.toBeOneOf(CARD_VALUES),
          suit: expect.toBeOneOf(SUITS)
        })
      ])
    );
  });

  it("should return the specified number of cards", () => {
    expect(generateHand().length).toEqual(CARDS_PER_HAND);
  });
});
