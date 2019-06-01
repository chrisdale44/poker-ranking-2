// import * as _ from "lodash";
// import * as constants from "../../constants";

export default function determineWinner(players) {
  const rankings = players.map(({ hand }) => hand.ranking);

  const highestRank = rankings.reduce((x, y) => {
    return x > y ? x : y;
  });

  const winningIds = rankings.reduce((a, e, i) => {
    if (e === highestRank) a.push(i + 1);
    return a;
  }, []);

  if (winningIds.length > 1) {
    const hands = winningIds.map(i => {
      return players.find(x => x.id === i).hand;
    });
    compareHands(hands);
  } else {
    return winningIds[0];
  }
}

function compareHands(hands) {
  console.log(hands);
}

// let result = compareValues(hand_a.rank, hand_b.rank, true);

// if (result !== 3) {
//   return result;
// } else {
//   // check whether hands have the exactly same values
//   if (_.isEmpty(_.differenceWith(hand_a.cards, hand_b.cards, _.isEqual))) {
//     return constants.RESULT.tie;
//   }

//   // if not, then proceed to deduce the winner
//   switch (hand_a.rank) {
//     case 1:
//       // compare pairs
//       result = compareValues(hand_a.pairs[0], hand_b.pairs[0]);

//       if (result !== 3) {
//         return result;
//       } else {
//         // compare kickers
//         return compareKickers();
//       }
//     case 2:
//       // compare top pairs
//       result = compareValues(hand_a.pairs[1], hand_b.pairs[1]);

//       if (result !== 3) {
//         return result;
//       } else {
//         // compare second pairs
//         result = compareValues(hand_a.pairs[0], hand_b.pairs[0]);
//         if (result !== 3) {
//           return result;
//         } else {
//           // compare kickers
//           return compareKickers();
//         }
//       }
//     case 3:
//       // compare three of a kinds
//       result = compareValues(hand_a.threes[0], hand_b.threes[0]);

//       if (result !== 3) {
//         return result;
//       } else {
//         // compare kickers
//         return compareKickers();
//       }
//     case 4:
//       // compare top card of straights
//       return compareValues(hand_a.values[4], hand_b.values[4]);
//     case 5:
//       // compare top card of flushes
//       return compareKickers();
//     case 6:
//       // compare full houses
//       // compare three of a kinds
//       result = compareValues(hand_a.threes[0], hand_b.threes[0]);

//       if (result !== 3) {
//         return result;
//       } else {
//         // compare pairs
//         result = compareValues(hand_a.pairs[0], hand_b.pairs[0]);
//         if (result !== 3) {
//           return result;
//         } else {
//           // compare kickers
//           return compareKickers();
//         }
//       }
//     case 7:
//       // compare four of a kinds
//       result = compareValues(hand_a.fours[0], hand_b.fours[0]);

//       if (result !== 3) {
//         return result;
//       } else {
//         // compare kickers
//         return compareKickers();
//       }
//     case 8:
//       // compare top card of straight flushes
//       return compareValues(hand_a.values[4], hand_b.values[4]);
//     case 9:
//       // we know Royal flushes are equal
//       return constants.RESULT.tie;
//     case 0:
//       // compare high card
//       return compareKickers();
//     default:
//       return false;
//   }
// }

// function compareValues(a, b, noIndex) {
//   // Unless noIndex is true, use indexes of each value
//   a = noIndex ? a : constants.CARD_VALUES.indexOf(a);
//   b = noIndex ? b : constants.CARD_VALUES.indexOf(b);

//   // check which value is higher
//   if (a > b) {
//     // win
//     return constants.RESULT.win;
//   } else if (a < b) {
//     // loss
//     return constants.RESULT.loss;
//   } else if (a === b) {
//     // tie
//     return constants.RESULT.tie;
//   }
// }

// function compareKickers() {
//   var i = hand_a.cards.length - 1;
//   // Loop over the arrays of value starting at the top
//   while (i >= 0 && result === 3) {
//     // if we get one that isn't a tie then the loop stops
//     result = compareValues(hand_a.cards[i].value, hand_b.cards[i].value);
//     i--;
//   }
//   return result;
// }
// }
