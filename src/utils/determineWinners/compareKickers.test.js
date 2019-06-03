import compareKickers from "./compareKickers";
import { WIN, LOSS, TIE } from "../../constants";

describe("UTIL: compareKickers", () => {
  describe("if player 1 has a better kicker than player 2", () => {
    it("should return WIN", () => {
      const cards_a = [];
      const cards_b = [];
      expect(compareKickers(cards_a, cards_b)).toEqual(WIN);
    });
  });

  describe("if player 2 has a better kicker than player 1", () => {
    it("should return LOSS", () => {
      const cards_a = [];
      const cards_b = [];
      expect(compareKickers(cards_a, cards_b)).toEqual(LOSS);
    });
  });

  describe("if player 1 has the same kicker(s) as player 2", () => {
    it("should return TIE", () => {
      const cards_a = [];
      const cards_b = [];
      expect(compareKickers(cards_a, cards_b)).toEqual(TIE);
    });
  });
});
