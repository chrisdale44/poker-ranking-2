import getValuesAndSuits from "./getValuesAndSuits";
import isFlush from "./isFlush";
import isStraight from "./isStraight";
import determinePairs from "./determinePairs";
import rankHand from "./rankHand";

export default function determineHand(cards) {
  const { values, suits } = getValuesAndSuits(cards);
  let hand = {
    values,
    suits,
    flush: isFlush(suits),
    straight: isStraight(values),
    pairs: [],
    threeOfAKind: [],
    fourOfAKind: []
  };

  if (hand.straight && (hand.values[0] === "2" && hand.values[4] === "A")) {
    hand.values.unshift(hand.values.pop());
  }

  if (!hand.flush && !hand.straight) {
    hand = { ...hand, ...determinePairs(hand.values) };
  }

  return rankHand(hand);
}
