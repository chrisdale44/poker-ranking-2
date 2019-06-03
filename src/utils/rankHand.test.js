import rankHand from "./rankHand";
import { HAND_RANKS } from "../constants";
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

describe("UTIL: rankHand", () => {
  it("should return HIGH CARD", () => {
    const mockHand = {
      flush: false,
      straight: false,
      pairs: [],
      threeOfAKind: [],
      fourOfAKind: []
    };
    expect(rankHand(mockHand)).toEqual(HIGH_CARD);
  });

  it("should return PAIR", () => {
    const mockHand = {
      flush: false,
      straight: false,
      pairs: ["4"],
      threeOfAKind: [],
      fourOfAKind: []
    };
    expect(rankHand(mockHand)).toEqual(PAIR);
  });

  it("should return TWO PAIR", () => {
    const mockHand = {
      flush: false,
      straight: false,
      pairs: ["3", "T"],
      threeOfAKind: [],
      fourOfAKind: []
    };
    expect(rankHand(mockHand)).toEqual(TWO_PAIR);
  });

  it("should return THREE OF A KIND", () => {
    const mockHand = {
      flush: false,
      straight: false,
      pairs: [],
      threeOfAKind: ["4"],
      fourOfAKind: []
    };
    expect(rankHand(mockHand)).toEqual(THREE_OAK);
  });

  it("should return STRAIGHT", () => {
    const mockHand = {
      flush: false,
      straight: true,
      pairs: [],
      threeOfAKind: [],
      fourOfAKind: []
    };
    expect(rankHand(mockHand)).toEqual(STRAIGHT);
  });

  it("should return FLUSH", () => {
    const mockHand = {
      flush: true,
      straight: false,
      pairs: [],
      threeOfAKind: [],
      fourOfAKind: []
    };
    expect(rankHand(mockHand)).toEqual(FLUSH);
  });

  it("should return FULL HOUSE", () => {
    const mockHand = {
      flush: false,
      straight: false,
      pairs: ["Q"],
      threeOfAKind: ["A"],
      fourOfAKind: []
    };
    expect(rankHand(mockHand)).toEqual(FULL_HOUSE);
  });

  it("should return FOUR OF A KIND", () => {
    const mockHand = {
      flush: false,
      straight: false,
      pairs: [],
      threeOfAKind: [],
      fourOfAKind: ["K"]
    };
    expect(rankHand(mockHand)).toEqual(FOUR_OAK);
  });

  it("should return STRAIGHT FLUSH", () => {
    const mockHand = {
      flush: true,
      straight: true,
      pairs: [],
      threeOfAKind: [],
      fourOfAKind: []
    };
    const mockValues = ["7", "8", "9", "T", "J"];
    expect(rankHand(mockHand, mockValues)).toEqual(STRAIGHT_FLUSH);
  });

  it("should return ROYAL FLUSH", () => {
    const mockHand = {
      flush: true,
      straight: true,
      pairs: [],
      threeOfAKind: [],
      fourOfAKind: []
    };
    const mockValues = ["T", "J", "Q", "K", "A"];
    expect(rankHand(mockHand, mockValues)).toEqual(ROYAL_FLUSH);
  });
});
