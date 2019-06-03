import compareValues from "./compareValues";

export default function compareKickers(cards_a, cards_b) {
  let i = cards_a.length - 1;
  let result;
  while (i >= 0 && result === 3) {
    result = compareValues(cards_a[i].value, cards_b[i].value);
    i--;
  }
  return result;
}
