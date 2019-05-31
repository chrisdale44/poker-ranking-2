import { CARD_VALUES } from "../../constants";

export default function rankHand(hand) {
  const { pairs, threeOfAKind, fourOfAKind, straight, flush, values } = hand;

  if (pairs.length === 1 && !threeOfAKind.length) {
    hand.ranking = 1; // pair
  } else if (pairs.length === 2) {
    hand.ranking = 2; // two pair
  } else if (threeOfAKind.length && !pairs.length) {
    hand.ranking = 3; // three of a kind
  } else if (straight && !flush) {
    hand.ranking = 4; // straight
  } else if (flush && !straight) {
    hand.ranking = 5; // flush
  } else if (pairs.length && threeOfAKind.length) {
    hand.ranking = 6; // full house
  } else if (fourOfAKind.length) {
    hand.ranking = 7; // four of a kind
  } else if (flush && straight) {
    hand.ranking = 8; // straight flush
    if (values[3] === CARD_VALUES[CARD_VALUES.length - 2]) {
      hand.ranking = 9; // royal flush
    }
  } else {
    hand.ranking = 0; // high card
  }

  return hand;
}
