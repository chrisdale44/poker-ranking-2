import { CARDS_PER_HAND, CARD_VALUES, SUITS } from "../constants";
import randomNumberGenerator from "./randomNumberGenerator";

export default function generateHand() {
  const hand = [];
  for (var j = 0; j < CARDS_PER_HAND; j++) {
    hand.push(generateCard());
  }
  return hand;
}

function generateCard() {
  return {
    value: CARD_VALUES[randomNumberGenerator(0, CARD_VALUES.length - 1)],
    suit: SUITS[randomNumberGenerator(0, SUITS.length - 1)]
  };
}
