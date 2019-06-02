import isFlush from "./isFlush";
import isStraight from "./isStraight";
import findMatchingValues from "./findMatchingValues";
import rankHand from "./rankHand";
import sortValuesNumerically from "./sortValuesNumerically";

export default function determineHand(cards) {
  const values = sortValuesNumerically(cards.map(card => card.value));
  const suits = cards.map(card => card.suit);
  let hand = {
    flush: isFlush(suits),
    straight: isStraight(values),
    pairs: [],
    threeOfAKind: [],
    fourOfAKind: []
  };

  if (!hand.flush && !hand.straight) {
    hand = { ...hand, ...findMatchingValues(values) };
  }

  return rankHand(hand);
}
