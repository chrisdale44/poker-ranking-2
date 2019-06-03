import { ACE, HAND_RANKS } from "../constants";
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

export default function rankHand(hand, values) {
  const { pairs, threeOfAKind, fourOfAKind, straight, flush } = hand;

  if (pairs.length === 1 && !threeOfAKind.length) {
    return PAIR;
  } else if (pairs.length === 2) {
    return TWO_PAIR;
  } else if (threeOfAKind.length && !pairs.length) {
    return THREE_OAK;
  } else if (straight && !flush) {
    return STRAIGHT;
  } else if (flush && !straight) {
    return FLUSH;
  } else if (pairs.length && threeOfAKind.length) {
    return FULL_HOUSE;
  } else if (fourOfAKind.length) {
    return FOUR_OAK;
  } else if (flush && straight) {
    if (values[4] === ACE) {
      return ROYAL_FLUSH;
    }
    return STRAIGHT_FLUSH;
  } else {
    return HIGH_CARD;
  }
}
