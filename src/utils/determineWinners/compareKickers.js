import compareValues from "./compareValues";
import { CARD_VALUES } from "../../constants";

export default function compareKickers(cards_a, cards_b) {
  let i = cards_a.length - 1;
  let result = 3;
  while (i >= 0 && result === 3) {
    result = compareValues(
      CARD_VALUES.indexOf(cards_a[i].value),
      CARD_VALUES.indexOf(cards_b[i].value)
    );
    i--;
  }
  return result;
}
