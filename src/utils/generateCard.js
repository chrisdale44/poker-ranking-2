import { CARD_VALUES, SUITS } from "../constants";
import randomNumberGenerator from "./randomNumberGenerator";

export default function generateCard() {
  return {
    value: CARD_VALUES[randomNumberGenerator(0, CARD_VALUES.length - 1)],
    suit: SUITS[randomNumberGenerator(0, SUITS.length - 1)]
  };
}
