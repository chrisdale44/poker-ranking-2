import { WIN, LOSS, TIE } from "../../constants";

export default function compareValues(a, b) {
  if (a > b) {
    return WIN;
  } else if (a < b) {
    return LOSS;
  } else if (a === b) {
    return TIE;
  }
}
