import compareKickers from "./compareKickers";
import compareValues from "./compareValues";
import getHighestValue from "./getHighestValue";
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
    case HIGH_CARD:
      return compareKickers(player_a.cards, player_b.cards);

    case PAIR:
      result = compareValues(
        CARD_VALUES.indexOf(player_a.hand.pairs[0]),
        CARD_VALUES.indexOf(player_b.hand.pairs[0])
      );
      if (result !== 3) {
        return result;
      }
      return compareKickers(player_a.cards, player_b.cards);

    case TWO_PAIR:
      for (let i = 1; i >= 0; i--) {
        result = compareValues(
          CARD_VALUES.indexOf(player_a.hand.pairs[i]),
          CARD_VALUES.indexOf(player_b.hand.pairs[i])
        );
        if (result !== 3) {
          return result;
        }
      }
      return compareKickers(player_a.cards, player_b.cards);

    case THREE_OAK:
      result = compareValues(
        CARD_VALUES.indexOf(player_a.hand.threes[0]),
        CARD_VALUES.indexOf(player_b.hand.threes[0])
      );
      if (result !== 3) {
        return result;
      }
      return compareKickers(player_a.cards, player_b.cards);

    case STRAIGHT:
      // if (
      //   i === 3 &&
      //   straight_next_i === 4 &&
      //   hand_next_i === constants.VALUES.length - 1
      // ) {
      //   return false;
      // }
      // TODO: handle 5 high straights
      return compareValues(
        getHighestValue(player_a.hand),
        getHighestValue(player_b.hand)
      );

    case FLUSH:
      return compareKickers(player_a.cards, player_b.cards);

    case FULL_HOUSE:
      result = compareValues(
        CARD_VALUES.indexOf(player_a.hand.threes[0]),
        CARD_VALUES.indexOf(player_b.hand.threes[0])
      );
      if (result !== 3) {
        return result;
      }
      result = compareValues(
        CARD_VALUES.indexOf(player_a.hand.pairs[0]),
        CARD_VALUES.indexOf(player_b.hand.pairs[0])
      );
      if (result === 3) {
        return result;
      }
      return compareKickers(player_a.cards, player_b.cards);

    case FOUR_OAK:
      result = compareValues(
        CARD_VALUES.indexOf(player_a.hand.fours[0]),
        CARD_VALUES.indexOf(player_a.hand.fours[0])
      );

      if (result !== 3) {
        return result;
      }
      return compareKickers(player_a.cards, player_b.cards);

    case STRAIGHT_FLUSH:
      return compareValues(
        getHighestValue(player_a.hand),
        getHighestValue(player_b.hand)
      );

    case ROYAL_FLUSH:
      return TIE;

    default:
      return false;
  }
}
