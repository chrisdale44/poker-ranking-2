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

export const HAND_RANKS = [
  "highcard",
  "pair",
  "two pair",
  "three of a kind",
  "straight",
  "flush",
  "full house",
  "four of a kind",
  "straight flush",
  "royal flush"
];
