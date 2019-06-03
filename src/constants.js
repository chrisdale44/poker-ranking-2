export const NO_OF_PLAYERS = 3;

export const CARDS_PER_HAND = 5;

export const RESULT = {
  win: 1,
  loss: 2,
  tie: 3
};

const TEN = "T";
const JACK = "J";
const QUEEN = "Q";
const KING = "K";
export const ACE = "A";
export const CARD_VALUES = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  TEN,
  JACK,
  QUEEN,
  KING,
  ACE
];

const SPADES = "SPADES";
const HEARTS = "HEARTS";
const DIAMONDS = "DIAMONDS";
const CLUBS = "CLUBS";
export const SUITS = [SPADES, HEARTS, DIAMONDS, CLUBS];

export const SUIT_ICONS = {
  SPADES: "♠️",
  HEARTS: "♥️",
  DIAMONDS: "♦️",
  CLUBS: "♣️"
};

export const HAND_RANKS = {
  HIGH_CARD: {
    name: "high card",
    score: 0
  },
  PAIR: {
    name: "pair",
    score: 1
  },
  TWO_PAIR: {
    name: "two pair",
    score: 2
  },
  THREE_OAK: {
    name: "three of a kind",
    score: 3
  },
  STRAIGHT: {
    name: "straight",
    score: 4
  },
  FLUSH: {
    name: "flush",
    score: 5
  },
  FULL_HOUSE: {
    name: "full house",
    score: 6
  },
  FOUR_OAK: {
    name: "four of a kind",
    score: 7
  },
  STRAIGHT_FLUSH: {
    name: "straight flush",
    score: 8
  },
  ROYAL_FLUSH: {
    name: "royal flush",
    score: 9
  }
};
