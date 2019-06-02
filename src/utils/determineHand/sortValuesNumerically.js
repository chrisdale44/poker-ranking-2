import { CARD_VALUES } from "../../constants";

export default function sortValuesNumerically(values) {
  return values.sort((a, b) => CARD_VALUES.indexOf(a) - CARD_VALUES.indexOf(b));
}
