import isFlush from "./isFlush";
import isStraight from "./isStraight";
import findMatchingValues from "./findMatchingValues";
import sortValuesNumerically from "./sortValuesNumerically";
import getCardValues from "../getCardValues";
import getCardSuits from "../getCardSuits";
import rankHand from "../rankHand";

export default function determineHand(cards) {
  const values = sortValuesNumerically(getCardValues(cards));
  const suits = getCardSuits(cards);

  const hand = {
    flush: isFlush(suits),
    straight: isStraight(values),
    ...findMatchingValues(values)
  };

  hand.ranking = rankHand(hand);
  return hand;
}
