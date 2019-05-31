import { CARD_VALUES } from "../../constants";

export default function isStraight(values) {
  let straight = true;
  values.forEach((value, i) => {
    if (i >= values.length - 1) {
      return false;
    }
    const straight_next_i = CARD_VALUES.indexOf(value) + 1;
    const hand_next_i = CARD_VALUES.indexOf(values[i + 1]);

    if (hand_next_i !== straight_next_i) {
      if (
        i === 3 &&
        straight_next_i === 4 &&
        hand_next_i === CARD_VALUES.length - 1
      ) {
        return false;
      }
      straight = false;
      return false;
    }
  });

  return straight;
}
