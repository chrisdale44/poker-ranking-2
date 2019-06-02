import { CARD_VALUES, RESULT } from "../../constants";

export default function compareValues(a, b, noIndex) {
  // Unless noIndex is true, use indexes of each value
  a = noIndex ? a : CARD_VALUES.indexOf(a);
  b = noIndex ? b : CARD_VALUES.indexOf(b);

  // check which value is higher
  if (a > b) {
    // win
    return RESULT.win;
  } else if (a < b) {
    // loss
    return RESULT.loss;
  } else if (a === b) {
    // tie
    return RESULT.tie;
  }
}
