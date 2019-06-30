import difference from "lodash.difference";

export default function doCardsMatch(values) {
  for (let i = 0; i < values.length - 1; i++) {
    if (difference(values[i], values[i + 1]).length) {
      return false;
    }
    return true;
  }
}
