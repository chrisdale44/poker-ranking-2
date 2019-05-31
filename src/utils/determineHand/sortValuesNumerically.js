import { CARD_VALUES } from "../../constants";

export default function sortValuesNumerically(values) {
  function sortNumber(a, b) {
    return CARD_VALUES.indexOf(a) - CARD_VALUES.indexOf(b);
  }

  return values.sort(sortNumber);
}
