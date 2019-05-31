import countBy from "lodash.countby";
import forOwn from "lodash.forown";

export default function determinePairs(values) {
  const matchingValues = countBy(values);
  const result = {
    pairs: [],
    threeOfAKind: [],
    fourOfAKind: []
  };

  forOwn(matchingValues, (count, cardValue) => {
    switch (count) {
      case 2: // pair
        result.pairs.push(cardValue);
        break;
      case 3: // three of a kind
        result.threeOfAKind.push(cardValue);
        break;
      case 4: // four of a kind
        result.fourOfAKind.push(cardValue);
        break;
      default:
        return null;
    }
  });

  return result;
}
