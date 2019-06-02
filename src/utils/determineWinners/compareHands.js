export default function compareHands() {
  switch (hand_a.rank) {
    case 1:
      // compare pairs
      result = compareValues(hand_a.pairs[0], hand_b.pairs[0]);

      if (result !== 3) {
        return result;
      } else {
        // compare kickers
        return compareKickers();
      }
    case 2:
      // compare top pairs
      result = compareValues(hand_a.pairs[1], hand_b.pairs[1]);

      if (result !== 3) {
        return result;
      } else {
        // compare second pairs
        result = compareValues(hand_a.pairs[0], hand_b.pairs[0]);
        if (result !== 3) {
          return result;
        } else {
          // compare kickers
          return compareKickers();
        }
      }
    case 3:
      // compare three of a kinds
      result = compareValues(hand_a.threes[0], hand_b.threes[0]);

      if (result !== 3) {
        return result;
      } else {
        // compare kickers
        return compareKickers();
      }
    case 4:
      // compare top card of straights
      if (
        i === 3 &&
        straight_next_i === 4 &&
        hand_next_i === constants.VALUES.length - 1
      ) {
        return false;
      }
      return compareValues(hand_a.values[4], hand_b.values[4]);
    case 5:
      // compare top card of flushes
      return compareKickers();
    case 6:
      // compare full houses
      // compare three of a kinds
      result = compareValues(hand_a.threes[0], hand_b.threes[0]);

      if (result !== 3) {
        return result;
      } else {
        // compare pairs
        result = compareValues(hand_a.pairs[0], hand_b.pairs[0]);
        if (result !== 3) {
          return result;
        } else {
          // compare kickers
          return compareKickers();
        }
      }
    case 7:
      // compare four of a kinds
      result = compareValues(hand_a.fours[0], hand_b.fours[0]);

      if (result !== 3) {
        return result;
      } else {
        // compare kickers
        return compareKickers();
      }
    case 8:
      // compare top card of straight flushes
      return compareValues(hand_a.values[4], hand_b.values[4]);
    case 9:
      // we know Royal flushes are equal
      return constants.RESULT.tie;
    case 0:
      // compare high card
      return compareKickers();
    default:
      return false;
  }
}
