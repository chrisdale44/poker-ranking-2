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
        cards: [
          { value: "Q", suit: "SPADES" },
          { value: "4", suit: "CLUBS" },
          { value: "9", suit: "HEARTS" },
          { value: "T", suit: "SPADES" },
          { value: "A", suit: "SPADES" }
        ],
        hand: {
          ranking: {
            name: HIGH_CARD
          }
        }
      };
      const player_b = {
        cards: [
          { value: "Q", suit: "SPADES" },
          { value: "4", suit: "CLUBS" },
          { value: "9", suit: "HEARTS" },
          { value: "T", suit: "SPADES" },
          { value: "5", suit: "SPADES" }
        ],
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
        cards: [
          { value: "Q", suit: "SPADES" },
          { value: "4", suit: "CLUBS" },
          { value: "9", suit: "HEARTS" },
          { value: "T", suit: "SPADES" },
          { value: "2", suit: "SPADES" }
        ],
        hand: {
          ranking: {
            name: HIGH_CARD
          }
        }
      };
      const player_b = {
        cards: [
          { value: "Q", suit: "SPADES" },
          { value: "4", suit: "CLUBS" },
          { value: "9", suit: "HEARTS" },
          { value: "T", suit: "SPADES" },
          { value: "5", suit: "SPADES" }
        ],
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
        cards: [
          { value: "Q", suit: "SPADES" },
          { value: "4", suit: "CLUBS" },
          { value: "9", suit: "HEARTS" },
          { value: "T", suit: "SPADES" },
          { value: "5", suit: "SPADES" }
        ],
        hand: {
          ranking: {
            name: HIGH_CARD
          }
        }
      };
      const player_b = {
        cards: [
          { value: "Q", suit: "DIAMONDS" },
          { value: "4", suit: "SPADES" },
          { value: "9", suit: "CLUBS" },
          { value: "T", suit: "CLUBS" },
          { value: "5", suit: "DIAMONDS" }
        ],
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
        cards: [
          { value: "Q", suit: "SPADES" },
          { value: "Q", suit: "CLUBS" },
          { value: "9", suit: "HEARTS" },
          { value: "T", suit: "SPADES" },
          { value: "A", suit: "SPADES" }
        ],
        hand: {
          pairs: ["Q"],
          ranking: {
            name: PAIR
          }
        }
      };
      const player_b = {
        cards: [
          { value: "Q", suit: "SPADES" },
          { value: "Q", suit: "CLUBS" },
          { value: "9", suit: "HEARTS" },
          { value: "T", suit: "SPADES" },
          { value: "7", suit: "SPADES" }
        ],
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
        cards: [
          { value: "Q", suit: "SPADES" },
          { value: "4", suit: "CLUBS" },
          { value: "4", suit: "HEARTS" },
          { value: "T", suit: "SPADES" },
          { value: "K", suit: "SPADES" }
        ],
        hand: {
          pairs: ["4"],
          ranking: {
            name: PAIR
          }
        }
      };
      const player_b = {
        cards: [
          { value: "Q", suit: "SPADES" },
          { value: "4", suit: "CLUBS" },
          { value: "4", suit: "HEARTS" },
          { value: "T", suit: "SPADES" },
          { value: "A", suit: "SPADES" }
        ],
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
        cards: [
          { value: "Q", suit: "SPADES" },
          { value: "4", suit: "CLUBS" },
          { value: "9", suit: "HEARTS" },
          { value: "T", suit: "SPADES" },
          { value: "T", suit: "SPADES" }
        ],
        hand: {
          pairs: ["T"],
          ranking: {
            name: PAIR
          }
        }
      };
      const player_b = {
        cards: [
          { value: "Q", suit: "SPADES" },
          { value: "4", suit: "CLUBS" },
          { value: "9", suit: "HEARTS" },
          { value: "T", suit: "SPADES" },
          { value: "T", suit: "SPADES" }
        ],
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
        cards: [
          { value: "4", suit: "SPADES" },
          { value: "4", suit: "CLUBS" },
          { value: "T", suit: "HEARTS" },
          { value: "T", suit: "SPADES" },
          { value: "A", suit: "SPADES" }
        ],
        hand: {
          pairs: ["4", "T"],
          ranking: {
            name: TWO_PAIR
          }
        }
      };
      const player_b = {
        cards: [
          { value: "4", suit: "SPADES" },
          { value: "4", suit: "CLUBS" },
          { value: "T", suit: "HEARTS" },
          { value: "T", suit: "SPADES" },
          { value: "Q", suit: "SPADES" }
        ],
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
        cards: [
          { value: "Q", suit: "SPADES" },
          { value: "Q", suit: "CLUBS" },
          { value: "9", suit: "HEARTS" },
          { value: "9", suit: "SPADES" },
          { value: "4", suit: "SPADES" }
        ],
        hand: {
          pairs: ["9", "Q"],
          ranking: {
            name: TWO_PAIR
          }
        }
      };
      const player_b = {
        cards: [
          { value: "Q", suit: "SPADES" },
          { value: "Q", suit: "CLUBS" },
          { value: "9", suit: "HEARTS" },
          { value: "9", suit: "SPADES" },
          { value: "T", suit: "SPADES" }
        ],
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
        cards: [
          { value: "Q", suit: "HEARTS" },
          { value: "Q", suit: "DIAMONDS" },
          { value: "9", suit: "CLUBS" },
          { value: "9", suit: "DIAMONDS" },
          { value: "A", suit: "HEARTS" }
        ],
        hand: {
          pairs: ["9", "Q"],
          ranking: {
            name: TWO_PAIR
          }
        }
      };
      const player_b = {
        cards: [
          { value: "Q", suit: "SPADES" },
          { value: "Q", suit: "CLUBS" },
          { value: "9", suit: "HEARTS" },
          { value: "9", suit: "SPADES" },
          { value: "A", suit: "SPADES" }
        ],
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
        cards: [
          { value: "9", suit: "SPADES" },
          { value: "9", suit: "CLUBS" },
          { value: "9", suit: "HEARTS" },
          { value: "T", suit: "SPADES" },
          { value: "A", suit: "SPADES" }
        ],
        hand: {
          threeOfAKind: ["9"],
          ranking: {
            name: THREE_OAK
          }
        }
      };
      const player_b = {
        cards: [
          { value: "9", suit: "SPADES" },
          { value: "9", suit: "CLUBS" },
          { value: "9", suit: "HEARTS" },
          { value: "T", suit: "SPADES" },
          { value: "Q", suit: "SPADES" }
        ],
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
        cards: [
          { value: "9", suit: "SPADES" },
          { value: "9", suit: "CLUBS" },
          { value: "9", suit: "HEARTS" },
          { value: "T", suit: "SPADES" },
          { value: "2", suit: "SPADES" }
        ],
        hand: {
          threeOfAKind: ["9"],
          ranking: {
            name: THREE_OAK
          }
        }
      };
      const player_b = {
        cards: [
          { value: "9", suit: "SPADES" },
          { value: "9", suit: "CLUBS" },
          { value: "9", suit: "HEARTS" },
          { value: "T", suit: "SPADES" },
          { value: "Q", suit: "SPADES" }
        ],
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
      const player_a = {};
      const player_b = {};
      expect(compareHands(player_a, player_b)).toEqual(TIE);
    });
  });

  describe("Straight", () => {
    it("should return WIN when player A has a higher straight than player B", () => {
      const player_a = {};
      const player_b = {};
      expect(compareHands(player_a, player_b)).toEqual(WIN);
    });

    it("should return LOSS when player B has a higher straight than player A", () => {
      const player_a = {};
      const player_b = {};
      expect(compareHands(player_a, player_b)).toEqual(LOSS);
    });

    it("should return TIE when player A has the same straight as player B", () => {
      const player_a = {};
      const player_b = {};
      expect(compareHands(player_a, player_b)).toEqual(TIE);
    });

    it("should return WIN when player A has an ace high straight and player B has a 5 high straight", () => {
      const player_a = {};
      const player_b = {};
      expect(compareHands(player_a, player_b)).toEqual(WIN);
    });
  });

  describe("Flush", () => {
    it("should return WIN when player A has a higher flush than player B", () => {
      const player_a = {};
      const player_b = {};
      expect(compareHands(player_a, player_b)).toEqual(WIN);
    });

    it("should return LOSS when player B has a higher flush than player A", () => {
      const player_a = {};
      const player_b = {};
      expect(compareHands(player_a, player_b)).toEqual(LOSS);
    });

    it("should return TIE when player A has the same flush as player B", () => {
      const player_a = {};
      const player_b = {};
      expect(compareHands(player_a, player_b)).toEqual(TIE);
    });
  });

  describe("Full house", () => {
    it("should return WIN when player A has a higher three of a kind than player B", () => {
      const player_a = {};
      const player_b = {};
      expect(compareHands(player_a, player_b)).toEqual(WIN);
    });

    it("should return LOSS when player B has a higher three of a kind than player A", () => {
      const player_a = {};
      const player_b = {};
      expect(compareHands(player_a, player_b)).toEqual(LOSS);
    });

    it("should return WIN when player A has a higher pair than player B", () => {
      const player_a = {};
      const player_b = {};
      expect(compareHands(player_a, player_b)).toEqual(WIN);
    });

    it("should return LOSS when player B has a higher pair than player A", () => {
      const player_a = {};
      const player_b = {};
      expect(compareHands(player_a, player_b)).toEqual(LOSS);
    });

    it("should return TIE when player A has the same full house as player B", () => {
      const player_a = {};
      const player_b = {};
      expect(compareHands(player_a, player_b)).toEqual(TIE);
    });
  });

  describe("Four of a kind", () => {
    it("should return WIN when player A has a higher four of a kind than player B", () => {
      const player_a = {};
      const player_b = {};
      expect(compareHands(player_a, player_b)).toEqual(WIN);
    });

    it("should return LOSS when player B has a higher four of a kind than player A", () => {
      const player_a = {};
      const player_b = {};
      expect(compareHands(player_a, player_b)).toEqual(LOSS);
    });

    it("should return WIN when player A has a higher kicker than player B", () => {
      const player_a = {};
      const player_b = {};
      expect(compareHands(player_a, player_b)).toEqual(WIN);
    });

    it("should return LOSS when player B has a higher kicker than player A", () => {
      const player_a = {};
      const player_b = {};
      expect(compareHands(player_a, player_b)).toEqual(LOSS);
    });

    it("should return TIE when player A has the same cards as player B", () => {
      const player_a = {};
      const player_b = {};
      expect(compareHands(player_a, player_b)).toEqual(TIE);
    });
  });

  describe("Straight flush", () => {
    it("should return WIN when player A has a higher straight flush than player B", () => {
      const player_a = {};
      const player_b = {};
      expect(compareHands(player_a, player_b)).toEqual(WIN);
    });

    it("should return LOSS when player B has a higher straight flush than player A", () => {
      const player_a = {};
      const player_b = {};
      expect(compareHands(player_a, player_b)).toEqual(LOSS);
    });

    it("should return TIE when player A has the same straight flush as player B", () => {
      const player_a = {};
      const player_b = {};
      expect(compareHands(player_a, player_b)).toEqual(TIE);
    });
  });

  describe("Royal flush", () => {
    it("should return WIN when player A has a higher royal flush than player B", () => {
      const player_a = {};
      const player_b = {};
      expect(compareHands(player_a, player_b)).toEqual(WIN);
    });

    it("should return LOSS when player B has a higher royal flush than player A", () => {
      const player_a = {};
      const player_b = {};
      expect(compareHands(player_a, player_b)).toEqual(LOSS);
    });

    it("should return TIE when player A has the same royal flush as player B", () => {
      const player_a = {};
      const player_b = {};
      expect(compareHands(player_a, player_b)).toEqual(TIE);
    });
  });
});
