import countBy from "lodash.countby";
import forOwn from "lodash.forown";

export default function findMatchingValues(values) {
  const matchingValues = countBy(values);
  const result = {
    pairs: [],
    threeOfAKind: [],
    fourOfAKind: []
  };

  forOwn(matchingValues, (count, cardValue) => {
    switch (count) {
      case 2:
        result.pairs.push(cardValue);
        break;
      case 3:
        result.threeOfAKind.push(cardValue);
        break;
      case 4:
        result.fourOfAKind.push(cardValue);
        break;
      default:
        return;
    }
  });

  return result;
}
