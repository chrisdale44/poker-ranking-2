import { CARDS_PER_HAND } from "../constants";
import generateCard from "./generateCard";

export default function generateHand() {
  const hand = [];
  for (var j = 0; j < CARDS_PER_HAND; j++) {
    hand.push(generateCard());
  }
  return hand;
}
