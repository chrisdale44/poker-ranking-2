import compareHands from "./compareHands";
import { WIN, LOSS, TIE, HAND_RANKS } from "../../constants";
const {
  HIGH_CARD,
  PAIR,
  TWO_PAIR,
  THREE_OAK,
  STRAIGHT,
  FLUSH,
  FULL_HOUSE,
  FOUR_OAK,
  STRAIGHT_FLUSH,
  ROYAL_FLUSH
} = HAND_RANKS;

describe("UTIL: compareHands", () => {
  describe("High cards", () => {
    it("should return WIN when player A has a higher card than player B", () => {
      const player_a = {
        hand: {
          ascendingValues: ["4", "9", "T", "Q", "A"],
          ranking: HIGH_CARD
        }
      };
      const player_b = {
        hand: {
          ascendingValues: ["4", "5", "9", "T", "Q"],
          ranking: HIGH_CARD
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(WIN);
    });

    it("should return LOSS when player B has a higher card than player A", () => {
      const player_a = {
        hand: {
          ascendingValues: ["2", "4", "9", "T", "Q"],
          ranking: HIGH_CARD
        }
      };
      const player_b = {
        hand: {
          ascendingValues: ["4", "5", "9", "T", "Q"],
          ranking: HIGH_CARD
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(LOSS);
    });

    it("should return TIE when player A has the same cards as player B", () => {
      const player_a = {
        hand: {
          ascendingValues: ["4", "5", "9", "T", "Q"],
          ranking: HIGH_CARD
        }
      };
      const player_b = {
        hand: {
          ascendingValues: ["4", "5", "9", "T", "Q"],
          ranking: HIGH_CARD
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(TIE);
    });
  });

  describe("Pairs", () => {
    it("should return WIN when player A has a higher pair than player B", () => {
      const player_a = {
        hand: {
          pairs: ["Q"],
          ranking: PAIR
        }
      };
      const player_b = {
        hand: {
          pairs: ["T"],
          ranking: PAIR
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(WIN);
    });

    it("should return LOSS when player B has a higher pair than player A", () => {
      const player_a = {
        hand: {
          pairs: ["4"],
          ranking: PAIR
        }
      };
      const player_b = {
        hand: {
          pairs: ["9"],
          ranking: PAIR
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(LOSS);
    });

    it("should return WIN when player A has a higher kicker than player B", () => {
      const player_a = {
        hand: {
          ascendingValues: ["9", "T", "Q", "Q", "A"],
          pairs: ["Q"],
          ranking: PAIR
        }
      };
      const player_b = {
        hand: {
          ascendingValues: ["7", "T", "Q", "Q", "A"],
          pairs: ["Q"],
          ranking: PAIR
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(WIN);
    });

    it("should return LOSS when player B has a higher kicker than player A", () => {
      const player_a = {
        hand: {
          ascendingValues: ["4", "4", "5", "6", "8"],
          pairs: ["4"],
          ranking: PAIR
        }
      };
      const player_b = {
        hand: {
          ascendingValues: ["4", "4", "T", "Q", "K"],
          pairs: ["4"],
          ranking: PAIR
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(LOSS);
    });

    it("should return TIE when player A has the same cards as player B", () => {
      const player_a = {
        hand: {
          ascendingValues: ["4", "9", "T", "T", "Q"],
          pairs: ["T"],
          ranking: PAIR
        }
      };
      const player_b = {
        hand: {
          ascendingValues: ["4", "9", "T", "T", "Q"],
          pairs: ["T"],
          ranking: PAIR
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(TIE);
    });
  });

  describe("Two pairs", () => {
    it("should return WIN when player A has a higher top pair than player B", () => {
      const player_a = {
        hand: {
          pairs: ["8", "T"],
          ranking: TWO_PAIR
        }
      };
      const player_b = {
        hand: {
          pairs: ["8", "9"],
          ranking: TWO_PAIR
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(WIN);
    });

    it("should return LOSS when player B has a higher top pair than player A", () => {
      const player_a = {
        hand: {
          pairs: ["9", "T"],
          ranking: TWO_PAIR
        }
      };
      const player_b = {
        hand: {
          pairs: ["9", "K"],
          ranking: TWO_PAIR
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(LOSS);
    });

    it("should return WIN when player A has a higher second pair than player B", () => {
      const player_a = {
        hand: {
          pairs: ["9", "T"],
          ranking: TWO_PAIR
        }
      };
      const player_b = {
        hand: {
          pairs: ["8", "T"],
          ranking: TWO_PAIR
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(WIN);
    });

    it("should return LOSS when player B has a higher second pair than player A", () => {
      const player_a = {
        hand: {
          pairs: ["4", "T"],
          ranking: TWO_PAIR
        }
      };
      const player_b = {
        hand: {
          pairs: ["9", "T"],
          ranking: TWO_PAIR
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(LOSS);
    });

    it("should return WIN when player A has a higher kicker than player B", () => {
      const player_a = {
        hand: {
          ascendingValues: ["4", "4", "T", "T", "A"],
          pairs: ["4", "T"],
          ranking: TWO_PAIR
        }
      };
      const player_b = {
        hand: {
          ascendingValues: ["4", "4", "T", "T", "Q"],
          pairs: ["4", "T"],
          ranking: TWO_PAIR
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(WIN);
    });

    it("should return LOSS when player B has a higher kicker than player A", () => {
      const player_a = {
        hand: {
          ascendingValues: ["4", "9", "9", "Q", "Q"],
          pairs: ["9", "Q"],
          ranking: TWO_PAIR
        }
      };
      const player_b = {
        hand: {
          ascendingValues: ["5", "9", "9", "Q", "Q"],
          pairs: ["9", "Q"],
          ranking: TWO_PAIR
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(LOSS);
    });

    it("should return TIE when player A has the same cards as player B", () => {
      const player_a = {
        hand: {
          ascendingValues: ["4", "9", "9", "Q", "Q"],
          pairs: ["9", "Q"],
          ranking: TWO_PAIR
        }
      };
      const player_b = {
        hand: {
          ascendingValues: ["4", "9", "9", "Q", "Q"],
          pairs: ["9", "Q"],
          ranking: TWO_PAIR
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(TIE);
    });
  });

  describe("Three of a kind", () => {
    it("should return WIN when player A has a higher three of a kind than player B", () => {
      const player_a = {
        hand: {
          threeOfAKind: ["9"],
          ranking: THREE_OAK
        }
      };
      const player_b = {
        hand: {
          threeOfAKind: ["8"],
          ranking: THREE_OAK
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(WIN);
    });

    it("should return LOSS when player B has a higher three of a kind than player A", () => {
      const player_a = {
        hand: {
          threeOfAKind: ["Q"],
          ranking: THREE_OAK
        }
      };
      const player_b = {
        hand: {
          threeOfAKind: ["A"],
          ranking: THREE_OAK
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(LOSS);
    });

    it("should return WIN when player A has a higher kicker than player B", () => {
      const player_a = {
        hand: {
          ascendingValues: ["9", "9", "9", "J", "Q"],
          threeOfAKind: ["9"],
          ranking: THREE_OAK
        }
      };
      const player_b = {
        hand: {
          ascendingValues: ["9", "9", "9", "T", "Q"],
          threeOfAKind: ["9"],
          ranking: THREE_OAK
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(WIN);
    });

    it("should return LOSS when player B has a higher kicker than player A", () => {
      const player_a = {
        hand: {
          ascendingValues: ["2", "9", "9", "9", "T"],
          threeOfAKind: ["9"],
          ranking: THREE_OAK
        }
      };
      const player_b = {
        hand: {
          ascendingValues: ["2", "9", "9", "9", "J"],
          threeOfAKind: ["9"],
          ranking: THREE_OAK
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(LOSS);
    });

    it("should return TIE when player A has the same cards as player B", () => {
      const player_a = {
        hand: {
          ascendingValues: ["2", "9", "9", "9", "J"],
          threeOfAKind: ["9"],
          ranking: THREE_OAK
        }
      };
      const player_b = {
        hand: {
          ascendingValues: ["2", "9", "9", "9", "J"],
          threeOfAKind: ["9"],
          ranking: THREE_OAK
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(TIE);
    });
  });

  describe("Straight", () => {
    it("should return WIN when player A has a higher straight than player B", () => {
      const player_a = {
        hand: {
          ascendingValues: ["7", "8", "9", "T", "J"],
          straight: true,
          ranking: STRAIGHT
        }
      };
      const player_b = {
        hand: {
          ascendingValues: ["6", "7", "8", "9", "T"],
          straight: true,
          ranking: STRAIGHT
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(WIN);
    });

    it("should return LOSS when player B has a higher straight than player A", () => {
      const player_a = {
        hand: {
          ascendingValues: ["7", "8", "9", "T", "J"],
          straight: true,
          ranking: STRAIGHT
        }
      };
      const player_b = {
        hand: {
          ascendingValues: ["8", "9", "T", "J", "Q"],
          straight: true,
          ranking: STRAIGHT
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(LOSS);
    });

    it("should return TIE when player A has the same straight as player B", () => {
      const player_a = {
        hand: {
          ascendingValues: ["8", "9", "T", "J", "Q"],
          straight: true,
          ranking: STRAIGHT
        }
      };
      const player_b = {
        hand: {
          ascendingValues: ["8", "9", "T", "J", "Q"],
          straight: true,
          ranking: STRAIGHT
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(TIE);
    });

    it("should return WIN when player A has an ace high straight and player B has a 5 high straight", () => {
      const player_a = {
        hand: {
          ascendingValues: ["T", "J", "Q", "K", "A"],
          straight: true,
          ranking: STRAIGHT
        }
      };
      const player_b = {
        hand: {
          ascendingValues: ["A", "2", "3", "4", "5"],
          straight: true,
          ranking: STRAIGHT
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(WIN);
    });
  });

  describe("Flush", () => {
    it("should return WIN when player A has a higher flush than player B", () => {
      const player_a = {
        hand: {
          ascendingValues: ["2", "3", "4", "5", "K"],
          flush: true,
          ranking: FLUSH
        }
      };
      const player_b = {
        hand: {
          ascendingValues: ["2", "3", "4", "5", "T"],
          flush: true,
          ranking: FLUSH
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(WIN);
    });

    it("should return LOSS when player B has a higher flush than player A", () => {
      const player_a = {
        hand: {
          ascendingValues: ["2", "3", "5", "8", "T"],
          flush: true,
          ranking: FLUSH
        }
      };
      const player_b = {
        hand: {
          ascendingValues: ["2", "4", "5", "8", "T"],
          flush: true,
          ranking: FLUSH
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(LOSS);
    });

    it("should return TIE when player A has the same flush as player B", () => {
      const player_a = {
        hand: {
          ascendingValues: ["2", "4", "5", "8", "T"],
          flush: true,
          ranking: FLUSH
        }
      };
      const player_b = {
        hand: {
          ascendingValues: ["2", "4", "5", "8", "T"],
          flush: true,
          ranking: FLUSH
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(TIE);
    });
  });

  describe("Full house", () => {
    it("should return WIN when player A has a higher three of a kind than player B", () => {
      const player_a = {
        hand: {
          threeOfAKind: ["J"],
          pairs: ["2"],
          ranking: FULL_HOUSE
        }
      };
      const player_b = {
        hand: {
          threeOfAKind: ["9"],
          pairs: ["2"],
          ranking: FULL_HOUSE
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(WIN);
    });

    it("should return LOSS when player B has a higher three of a kind than player A", () => {
      const player_a = {
        hand: {
          threeOfAKind: ["J"],
          pairs: ["2"],
          ranking: FULL_HOUSE
        }
      };
      const player_b = {
        hand: {
          threeOfAKind: ["Q"],
          pairs: ["2"],
          ranking: FULL_HOUSE
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(LOSS);
    });

    it("should return WIN when player A has a higher pair than player B", () => {
      const player_a = {
        hand: {
          threeOfAKind: ["J"],
          pairs: ["7"],
          ranking: FULL_HOUSE
        }
      };
      const player_b = {
        hand: {
          threeOfAKind: ["J"],
          pairs: ["2"],
          ranking: FULL_HOUSE
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(WIN);
    });

    it("should return LOSS when player B has a higher pair than player A", () => {
      const player_a = {
        hand: {
          threeOfAKind: ["J"],
          pairs: ["7"],
          ranking: FULL_HOUSE
        }
      };
      const player_b = {
        hand: {
          threeOfAKind: ["J"],
          pairs: ["9"],
          ranking: FULL_HOUSE
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(LOSS);
    });

    it("should return TIE when player A has the same full house as player B", () => {
      const player_a = {
        hand: {
          threeOfAKind: ["Q"],
          pairs: ["2"],
          ranking: FULL_HOUSE
        }
      };
      const player_b = {
        hand: {
          threeOfAKind: ["Q"],
          pairs: ["2"],
          ranking: FULL_HOUSE
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(TIE);
    });
  });

  describe("Four of a kind", () => {
    it("should return WIN when player A has a higher four of a kind than player B", () => {
      const player_a = {
        hand: {
          fourOfAKind: ["J"],
          ranking: FOUR_OAK
        }
      };
      const player_b = {
        hand: {
          fourOfAKind: ["3"],
          ranking: FOUR_OAK
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(WIN);
    });

    it("should return LOSS when player B has a higher four of a kind than player A", () => {
      const player_a = {
        hand: {
          fourOfAKind: ["4"],
          ranking: FOUR_OAK
        }
      };
      const player_b = {
        hand: {
          fourOfAKind: ["7"],
          ranking: FOUR_OAK
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(LOSS);
    });

    it("should return WIN when player A has a higher kicker than player B", () => {
      const player_a = {
        hand: {
          ascendingValues: ["3", "3", "3", "3", "K"],
          fourOfAKind: ["3"],
          ranking: FOUR_OAK
        }
      };
      const player_b = {
        hand: {
          ascendingValues: ["3", "3", "3", "3", "7"],
          fourOfAKind: ["3"],
          ranking: FOUR_OAK
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(WIN);
    });

    it("should return LOSS when player B has a higher kicker than player A", () => {
      const player_a = {
        hand: {
          ascendingValues: ["3", "3", "3", "3", "5"],
          fourOfAKind: ["3"],
          ranking: FOUR_OAK
        }
      };
      const player_b = {
        hand: {
          ascendingValues: ["3", "3", "3", "3", "7"],
          fourOfAKind: ["3"],
          ranking: FOUR_OAK
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(LOSS);
    });

    it("should return TIE when player A has the same cards as player B", () => {
      const player_a = {
        hand: {
          ascendingValues: ["3", "3", "3", "3", "7"],
          fourOfAKind: ["3"],
          ranking: FOUR_OAK
        }
      };
      const player_b = {
        hand: {
          ascendingValues: ["3", "3", "3", "3", "7"],
          fourOfAKind: ["3"],
          ranking: FOUR_OAK
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(TIE);
    });
  });

  describe("Straight flush", () => {
    it("should return WIN when player A has a higher straight flush than player B", () => {
      const player_a = {
        hand: {
          ascendingValues: ["3", "4", "5", "6", "7"],
          straight: true,
          flush: true,
          ranking: STRAIGHT_FLUSH
        }
      };
      const player_b = {
        hand: {
          ascendingValues: ["2", "3", "4", "5", "6"],
          straight: true,
          flush: true,
          ranking: STRAIGHT_FLUSH
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(WIN);
    });

    it("should return LOSS when player B has a higher straight flush than player A", () => {
      const player_a = {
        hand: {
          ascendingValues: ["3", "4", "5", "6", "7"],
          straight: true,
          flush: true,
          ranking: STRAIGHT_FLUSH
        }
      };
      const player_b = {
        hand: {
          ascendingValues: ["8", "9", "T", "J", "Q"],
          straight: true,
          flush: true,
          ranking: STRAIGHT_FLUSH
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(LOSS);
    });

    it("should return TIE when player A has the same straight flush as player B", () => {
      const player_a = {
        hand: {
          ascendingValues: ["4", "5", "6", "7", "8"],
          straight: true,
          flush: true,
          ranking: STRAIGHT_FLUSH
        }
      };
      const player_b = {
        hand: {
          ascendingValues: ["4", "5", "6", "7", "8"],
          straight: true,
          flush: true,
          ranking: STRAIGHT_FLUSH
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(TIE);
    });
  });

  describe("Royal flush", () => {
    it("should return TIE when both players have a royal flush", () => {
      const player_a = {
        hand: {
          ascendingValues: ["T", "J", "Q", "K", "A"],
          straight: true,
          flush: true,
          ranking: ROYAL_FLUSH
        }
      };
      const player_b = {
        hand: {
          ascendingValues: ["T", "J", "Q", "K", "A"],
          straight: true,
          flush: true,
          ranking: ROYAL_FLUSH
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(TIE);
    });
  });

  describe("default return", () => {
    it("should return an error if ranking name is not recognised", () => {
      const player_a = {
        hand: {
          ranking: undefined
        }
      };
      const player_b = {
        hand: {
          ranking: undefined
        }
      };
      expect(() => compareHands(player_a, player_b)).toThrow();
    });
  });
});
