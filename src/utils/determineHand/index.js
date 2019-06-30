import isFlush from "./isFlush";
import isStraight from "./isStraight";
import findMatchingValues from "./findMatchingValues";
import sortValuesNumerically from "./sortValuesNumerically";
import getCardValues from "./getCardValues";
import getCardSuits from "./getCardSuits";
import rankHand from "../rankHand";
import checkForLowAce from "./checkForLowAce";

export default function determineHand(cards) {
  const values = sortValuesNumerically(getCardValues(cards));
  const suits = getCardSuits(cards);
  const straight = isStraight(values);

  const hand = {
    flush: isFlush(suits),
    straight,
    ...findMatchingValues(values),
    ascendingValues:
      straight && values[4] === "A" ? checkForLowAce(values) : values
  };

  hand.ranking = rankHand(hand);
  return hand;
}
