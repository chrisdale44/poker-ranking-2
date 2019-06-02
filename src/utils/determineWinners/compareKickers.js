export default function compareKickers() {
    var i = hand_a.cards.length - 1;
    // Loop over the arrays of value starting at the top
    while (i >= 0 && result === 3) {
      // if we get one that isn't a tie then the loop stops
      result = compareValues(hand_a.cards[i].value, hand_b.cards[i].value);
      i--;
    }
    return result;
  }
}
