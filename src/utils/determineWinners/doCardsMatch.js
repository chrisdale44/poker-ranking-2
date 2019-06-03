import difference from "lodash.difference";
import getCardValues from "../getCardValues";

export default function doCardsMatch(cards) {
  for (let i = 0; i < cards.length - 1; i++) {
    if (
      difference(getCardValues(cards[i]), getCardValues(cards[i + 1])).length
    ) {
      return false;
    }
    return true;
  }
}
