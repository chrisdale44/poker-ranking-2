import compareKickers from "./compareKickers";
import compareValues from "./compareValues";
import { HAND_RANKS, TIE, CARD_VALUES } from "../../constants";
const {
  HIGH_CARD,
  PAIR,
  TWO_PAIR,
  THREE_OAK,
  STRAIGHT,
  FLUSH,
  FULL_HOUSE,
  FOUR_OAK,
  STRAIGHT_FLUSH,
  ROYAL_FLUSH
} = HAND_RANKS;

export default function compareHands(player_a, player_b) {
  let result;
  switch (player_a.hand.ranking.name) {
    case HIGH_CARD.name:
      return compareKickers(
        player_a.hand.ascendingValues,
        player_b.hand.ascendingValues
      );

    case PAIR.name:
      result = compareValues(
        CARD_VALUES.indexOf(player_a.hand.pairs[0]),
        CARD_VALUES.indexOf(player_b.hand.pairs[0])
      );
      if (result !== 3) {
        return result;
      }
      return compareKickers(
        player_a.hand.ascendingValues,
        player_b.hand.ascendingValues
      );

    case TWO_PAIR.name:
      for (let i = 1; i >= 0; i--) {
        result = compareValues(
          CARD_VALUES.indexOf(player_a.hand.pairs[i]),
          CARD_VALUES.indexOf(player_b.hand.pairs[i])
        );
        if (result !== 3) {
          return result;
        }
      }
      return compareKickers(
        player_a.hand.ascendingValues,
        player_b.hand.ascendingValues
      );

    case THREE_OAK.name:
      result = compareValues(
        CARD_VALUES.indexOf(player_a.hand.threeOfAKind[0]),
        CARD_VALUES.indexOf(player_b.hand.threeOfAKind[0])
      );
      if (result !== 3) {
        return result;
      }
      return compareKickers(
        player_a.hand.ascendingValues,
        player_b.hand.ascendingValues
      );

    case STRAIGHT.name:
      return compareKickers(
        player_a.hand.ascendingValues,
        player_b.hand.ascendingValues
      );

    case FLUSH.name:
      return compareKickers(
        player_a.hand.ascendingValues,
        player_b.hand.ascendingValues
      );

    case FULL_HOUSE.name:
      result = compareValues(
        CARD_VALUES.indexOf(player_a.hand.threeOfAKind[0]),
        CARD_VALUES.indexOf(player_b.hand.threeOfAKind[0])
      );
      if (result !== 3) {
        return result;
      }
      return compareValues(
        CARD_VALUES.indexOf(player_a.hand.pairs[0]),
        CARD_VALUES.indexOf(player_b.hand.pairs[0])
      );

    case FOUR_OAK.name:
      result = compareValues(
        CARD_VALUES.indexOf(player_a.hand.fourOfAKind[0]),
        CARD_VALUES.indexOf(player_b.hand.fourOfAKind[0])
      );
      if (result !== 3) {
        return result;
      }
      return compareKickers(
        player_a.hand.ascendingValues,
        player_b.hand.ascendingValues
      );

    case STRAIGHT_FLUSH.name:
      return compareKickers(
        player_a.hand.ascendingValues,
        player_b.hand.ascendingValues
      );

    case ROYAL_FLUSH.name:
      return TIE;

    default:
      throw new Error("Error: Player ranking not recognised");
  }
}
