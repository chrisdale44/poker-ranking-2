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
        ascendingValues: ["4", "9", "T", "Q", "A"],
        hand: {
          ranking: {
            name: HIGH_CARD
          }
        }
      };
      const player_b = {
        ascendingValues: ["4", "5", "9", "T", "Q"],
        hand: {
          ranking: {
            name: HIGH_CARD
          }
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(WIN);
    });

    it("should return LOSS when player B has a higher card than player A", () => {
      const player_a = {
        ascendingValues: ["2", "4", "9", "T", "Q"],
        hand: {
          ranking: {
            name: HIGH_CARD
          }
        }
      };
      const player_b = {
        ascendingValues: ["4", "5", "9", "T", "Q"],
        hand: {
          ranking: {
            name: HIGH_CARD
          }
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(LOSS);
    });

    it("should return TIE when player A has the same cards as player B", () => {
      const player_a = {
        ascendingValues: ["4", "5", "9", "T", "Q"],
        hand: {
          ranking: {
            name: HIGH_CARD
          }
        }
      };
      const player_b = {
        ascendingValues: ["4", "5", "9", "T", "Q"],
        hand: {
          ranking: {
            name: HIGH_CARD
          }
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
          ranking: {
            name: PAIR
          }
        }
      };
      const player_b = {
        hand: {
          pairs: ["T"],
          ranking: {
            name: PAIR
          }
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(WIN);
    });

    it("should return LOSS when player B has a higher pair than player A", () => {
      const player_a = {
        hand: {
          pairs: ["4"],
          ranking: {
            name: PAIR
          }
        }
      };
      const player_b = {
        hand: {
          pairs: ["9"],
          ranking: {
            name: PAIR
          }
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(LOSS);
    });

    it("should return WIN when player A has a higher kicker than player B", () => {
      const player_a = {
        ascendingValues: ["9", "T", "Q", "Q", "A"],
        hand: {
          pairs: ["Q"],
          ranking: {
            name: PAIR
          }
        }
      };
      const player_b = {
        ascendingValues: ["7", "T", "Q", "Q", "A"],
        hand: {
          pairs: ["Q"],
          ranking: {
            name: PAIR
          }
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(WIN);
    });

    it("should return LOSS when player B has a higher kicker than player A", () => {
      const player_a = {
        ascendingValues: ["4", "4", "5", "6", "8"],
        hand: {
          pairs: ["4"],
          ranking: {
            name: PAIR
          }
        }
      };
      const player_b = {
        ascendingValues: ["4", "4", "T", "Q", "K"],
        hand: {
          pairs: ["4"],
          ranking: {
            name: PAIR
          }
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(LOSS);
    });

    it("should return TIE when player A has the same cards as player B", () => {
      const player_a = {
        ascendingValues: ["4", "9", "T", "T", "Q"],
        hand: {
          pairs: ["T"],
          ranking: {
            name: PAIR
          }
        }
      };
      const player_b = {
        ascendingValues: ["4", "9", "T", "T", "Q"],
        hand: {
          pairs: ["T"],
          ranking: {
            name: PAIR
          }
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
          ranking: {
            name: TWO_PAIR
          }
        }
      };
      const player_b = {
        hand: {
          pairs: ["8", "9"],
          ranking: {
            name: TWO_PAIR
          }
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(WIN);
    });

    it("should return LOSS when player B has a higher top pair than player A", () => {
      const player_a = {
        hand: {
          pairs: ["9", "T"],
          ranking: {
            name: TWO_PAIR
          }
        }
      };
      const player_b = {
        hand: {
          pairs: ["9", "K"],
          ranking: {
            name: TWO_PAIR
          }
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(LOSS);
    });

    it("should return WIN when player A has a higher second pair than player B", () => {
      const player_a = {
        hand: {
          pairs: ["9", "T"],
          ranking: {
            name: TWO_PAIR
          }
        }
      };
      const player_b = {
        hand: {
          pairs: ["8", "T"],
          ranking: {
            name: TWO_PAIR
          }
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(WIN);
    });

    it("should return LOSS when player B has a higher second pair than player A", () => {
      const player_a = {
        hand: {
          pairs: ["4", "T"],
          ranking: {
            name: TWO_PAIR
          }
        }
      };
      const player_b = {
        hand: {
          pairs: ["9", "T"],
          ranking: {
            name: TWO_PAIR
          }
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(LOSS);
    });

    it("should return WIN when player A has a higher kicker than player B", () => {
      const player_a = {
        ascendingValues: ["4", "4", "T", "T", "A"],
        hand: {
          pairs: ["4", "T"],
          ranking: {
            name: TWO_PAIR
          }
        }
      };
      const player_b = {
        ascendingValues: ["4", "4", "T", "T", "Q"],
        hand: {
          pairs: ["4", "T"],
          ranking: {
            name: TWO_PAIR
          }
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(WIN);
    });

    it("should return LOSS when player B has a higher kicker than player A", () => {
      const player_a = {
        ascendingValues: ["4", "9", "9", "Q", "Q"],
        hand: {
          pairs: ["9", "Q"],
          ranking: {
            name: TWO_PAIR
          }
        }
      };
      const player_b = {
        ascendingValues: ["5", "9", "9", "Q", "Q"],
        hand: {
          pairs: ["9", "Q"],
          ranking: {
            name: TWO_PAIR
          }
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(LOSS);
    });

    it("should return TIE when player A has the same cards as player B", () => {
      const player_a = {
        ascendingValues: ["4", "9", "9", "Q", "Q"],
        hand: {
          pairs: ["9", "Q"],
          ranking: {
            name: TWO_PAIR
          }
        }
      };
      const player_b = {
        ascendingValues: ["4", "9", "9", "Q", "Q"],
        hand: {
          pairs: ["9", "Q"],
          ranking: {
            name: TWO_PAIR
          }
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
          ranking: {
            name: THREE_OAK
          }
        }
      };
      const player_b = {
        hand: {
          threeOfAKind: ["8"],
          ranking: {
            name: THREE_OAK
          }
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(WIN);
    });

    it("should return LOSS when player B has a higher three of a kind than player A", () => {
      const player_a = {
        hand: {
          threeOfAKind: ["Q"],
          ranking: {
            name: THREE_OAK
          }
        }
      };
      const player_b = {
        hand: {
          threeOfAKind: ["A"],
          ranking: {
            name: THREE_OAK
          }
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(LOSS);
    });

    it("should return WIN when player A has a higher kicker than player B", () => {
      const player_a = {
        ascendingValues: ["9", "9", "9", "J", "Q"],
        hand: {
          threeOfAKind: ["9"],
          ranking: {
            name: THREE_OAK
          }
        }
      };
      const player_b = {
        ascendingValues: ["9", "9", "9", "T", "Q"],
        hand: {
          threeOfAKind: ["9"],
          ranking: {
            name: THREE_OAK
          }
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(WIN);
    });

    it("should return LOSS when player B has a higher kicker than player A", () => {
      const player_a = {
        ascendingValues: ["2", "9", "9", "9", "T"],
        hand: {
          threeOfAKind: ["9"],
          ranking: {
            name: THREE_OAK
          }
        }
      };
      const player_b = {
        ascendingValues: ["2", "9", "9", "9", "J"],
        hand: {
          threeOfAKind: ["9"],
          ranking: {
            name: THREE_OAK
          }
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(LOSS);
    });

    it("should return TIE when player A has the same cards as player B", () => {
      const player_a = {
        ascendingValues: ["2", "9", "9", "9", "J"],
        hand: {
          threeOfAKind: ["9"],
          ranking: {
            name: THREE_OAK
          }
        }
      };
      const player_b = {
        ascendingValues: ["2", "9", "9", "9", "J"],
        hand: {
          threeOfAKind: ["9"],
          ranking: {
            name: THREE_OAK
          }
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(TIE);
    });
  });

  describe("Straight", () => {
    it("should return WIN when player A has a higher straight than player B", () => {
      const player_a = {
        ascendingValues: ["7", "8", "9", "T", "J"],
        hand: {
          straight: true,
          ranking: {
            name: STRAIGHT
          }
        }
      };
      const player_b = {
        ascendingValues: ["6", "7", "8", "9", "T"],
        hand: {
          straight: true,
          ranking: {
            name: STRAIGHT
          }
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(WIN);
    });

    it("should return LOSS when player B has a higher straight than player A", () => {
      const player_a = {
        ascendingValues: ["7", "8", "9", "T", "J"],
        hand: {
          straight: true,
          ranking: {
            name: STRAIGHT
          }
        }
      };
      const player_b = {
        ascendingValues: ["8", "9", "T", "J", "Q"],
        hand: {
          straight: true,
          ranking: {
            name: STRAIGHT
          }
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(LOSS);
    });

    it("should return TIE when player A has the same straight as player B", () => {
      const player_a = {
        ascendingValues: ["8", "9", "T", "J", "Q"],
        hand: {
          straight: true,
          ranking: {
            name: STRAIGHT
          }
        }
      };
      const player_b = {
        ascendingValues: ["8", "9", "T", "J", "Q"],
        hand: {
          straight: true,
          ranking: {
            name: STRAIGHT
          }
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(TIE);
    });

    it("should return WIN when player A has an ace high straight and player B has a 5 high straight", () => {
      const player_a = {
        ascendingValues: ["T", "J", "Q", "K", "A"],
        hand: {
          straight: true,
          ranking: {
            name: STRAIGHT
          }
        }
      };
      const player_b = {
        ascendingValues: ["A", "2", "3", "4", "5"],
        hand: {
          straight: true,
          ranking: {
            name: STRAIGHT
          }
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(WIN);
    });
  });

  describe("Flush", () => {
    it("should return WIN when player A has a higher flush than player B", () => {
      const player_a = {
        ascendingValues: ["2", "3", "4", "5", "K"],
        hand: {
          flush: true,
          ranking: {
            name: FLUSH
          }
        }
      };
      const player_b = {
        ascendingValues: ["2", "3", "4", "5", "T"],
        hand: {
          flush: true,
          ranking: {
            name: FLUSH
          }
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(WIN);
    });

    it("should return LOSS when player B has a higher flush than player A", () => {
      const player_a = {
        ascendingValues: ["2", "3", "5", "8", "T"],
        hand: {
          flush: true,
          ranking: {
            name: FLUSH
          }
        }
      };
      const player_b = {
        ascendingValues: ["2", "4", "5", "8", "T"],
        hand: {
          flush: true,
          ranking: {
            name: FLUSH
          }
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(LOSS);
    });

    it("should return TIE when player A has the same flush as player B", () => {
      const player_a = {
        ascendingValues: ["2", "4", "5", "8", "T"],
        hand: {
          flush: true,
          ranking: {
            name: FLUSH
          }
        }
      };
      const player_b = {
        ascendingValues: ["2", "4", "5", "8", "T"],
        hand: {
          flush: true,
          ranking: {
            name: FLUSH
          }
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
          ranking: {
            name: FULL_HOUSE
          }
        }
      };
      const player_b = {
        hand: {
          threeOfAKind: ["9"],
          pairs: ["2"],
          ranking: {
            name: FULL_HOUSE
          }
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(WIN);
    });

    it("should return LOSS when player B has a higher three of a kind than player A", () => {
      const player_a = {
        hand: {
          threeOfAKind: ["J"],
          pairs: ["2"],
          ranking: {
            name: FULL_HOUSE
          }
        }
      };
      const player_b = {
        hand: {
          threeOfAKind: ["Q"],
          pairs: ["2"],
          ranking: {
            name: FULL_HOUSE
          }
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(LOSS);
    });

    it("should return WIN when player A has a higher pair than player B", () => {
      const player_a = {
        hand: {
          threeOfAKind: ["J"],
          pairs: ["7"],
          ranking: {
            name: FULL_HOUSE
          }
        }
      };
      const player_b = {
        hand: {
          threeOfAKind: ["J"],
          pairs: ["2"],
          ranking: {
            name: FULL_HOUSE
          }
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(WIN);
    });

    it("should return LOSS when player B has a higher pair than player A", () => {
      const player_a = {
        hand: {
          threeOfAKind: ["J"],
          pairs: ["7"],
          ranking: {
            name: FULL_HOUSE
          }
        }
      };
      const player_b = {
        hand: {
          threeOfAKind: ["J"],
          pairs: ["9"],
          ranking: {
            name: FULL_HOUSE
          }
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(LOSS);
    });

    it("should return TIE when player A has the same full house as player B", () => {
      const player_a = {
        hand: {
          threeOfAKind: ["Q"],
          pairs: ["2"],
          ranking: {
            name: FULL_HOUSE
          }
        }
      };
      const player_b = {
        hand: {
          threeOfAKind: ["Q"],
          pairs: ["2"],
          ranking: {
            name: FULL_HOUSE
          }
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
          ranking: {
            name: FOUR_OAK
          }
        }
      };
      const player_b = {
        hand: {
          fourOfAKind: ["3"],
          ranking: {
            name: FOUR_OAK
          }
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(WIN);
    });

    it("should return LOSS when player B has a higher four of a kind than player A", () => {
      const player_a = {
        hand: {
          fourOfAKind: ["4"],
          ranking: {
            name: FOUR_OAK
          }
        }
      };
      const player_b = {
        hand: {
          fourOfAKind: ["7"],
          ranking: {
            name: FOUR_OAK
          }
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(LOSS);
    });

    it("should return WIN when player A has a higher kicker than player B", () => {
      const player_a = {
        ascendingValues: ["3", "3", "3", "3", "K"],
        hand: {
          fourOfAKind: ["3"],
          ranking: {
            name: FOUR_OAK
          }
        }
      };
      const player_b = {
        ascendingValues: ["3", "3", "3", "3", "7"],
        hand: {
          fourOfAKind: ["3"],
          ranking: {
            name: FOUR_OAK
          }
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(WIN);
    });

    it("should return LOSS when player B has a higher kicker than player A", () => {
      const player_a = {
        ascendingValues: ["3", "3", "3", "3", "5"],
        hand: {
          fourOfAKind: ["3"],
          ranking: {
            name: FOUR_OAK
          }
        }
      };
      const player_b = {
        ascendingValues: ["3", "3", "3", "3", "7"],
        hand: {
          fourOfAKind: ["3"],
          ranking: {
            name: FOUR_OAK
          }
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(LOSS);
    });

    it("should return TIE when player A has the same cards as player B", () => {
      const player_a = {
        ascendingValues: ["3", "3", "3", "3", "7"],
        hand: {
          fourOfAKind: ["3"],
          ranking: {
            name: FOUR_OAK
          }
        }
      };
      const player_b = {
        ascendingValues: ["3", "3", "3", "3", "7"],
        hand: {
          fourOfAKind: ["3"],
          ranking: {
            name: FOUR_OAK
          }
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(TIE);
    });
  });

  describe("Straight flush", () => {
    it("should return WIN when player A has a higher straight flush than player B", () => {
      const player_a = {
        ascendingValues: ["3", "4", "5", "6", "7"],
        hand: {
          straight: true,
          flush: true,
          ranking: {
            name: STRAIGHT_FLUSH
          }
        }
      };
      const player_b = {
        ascendingValues: ["2", "3", "4", "5", "6"],
        hand: {
          straight: true,
          flush: true,
          ranking: {
            name: STRAIGHT_FLUSH
          }
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(WIN);
    });

    it("should return LOSS when player B has a higher straight flush than player A", () => {
      const player_a = {
        ascendingValues: ["3", "4", "5", "6", "7"],
        hand: {
          straight: true,
          flush: true,
          ranking: {
            name: STRAIGHT_FLUSH
          }
        }
      };
      const player_b = {
        ascendingValues: ["8", "9", "T", "J", "Q"],
        hand: {
          straight: true,
          flush: true,
          ranking: {
            name: STRAIGHT_FLUSH
          }
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(LOSS);
    });

    it("should return TIE when player A has the same straight flush as player B", () => {
      const player_a = {
        ascendingValues: ["4", "5", "6", "7", "8"],
        hand: {
          straight: true,
          flush: true,
          ranking: {
            name: STRAIGHT_FLUSH
          }
        }
      };
      const player_b = {
        ascendingValues: ["4", "5", "6", "7", "8"],
        hand: {
          straight: true,
          flush: true,
          ranking: {
            name: STRAIGHT_FLUSH
          }
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(TIE);
    });
  });

  describe("Royal flush", () => {
    it("should return TIE when both players have a royal flush", () => {
      const player_a = {
        ascendingValues: ["T", "J", "Q", "K", "A"],
        hand: {
          straight: true,
          flush: true,
          ranking: {
            name: ROYAL_FLUSH
          }
        }
      };
      const player_b = {
        ascendingValues: ["T", "J", "Q", "K", "A"],
        hand: {
          straight: true,
          flush: true,
          ranking: {
            name: ROYAL_FLUSH
          }
        }
      };
      expect(compareHands(player_a, player_b)).toEqual(TIE);
    });
  });

  describe("default return", () => {
    it("should return an error if ranking name is not recognised", () => {
      const player_a = {
        hand: {
          ranking: {
            name: undefined
          }
        }
      };
      const player_b = {
        hand: {
          ranking: {
            name: undefined
          }
        }
      };
      expect(() => compareHands(player_a, player_b)).toThrow();
    });
  });
});
