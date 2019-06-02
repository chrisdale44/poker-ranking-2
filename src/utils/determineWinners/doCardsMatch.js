import isEmpty from "lodash.isempty";
import differenceWith from "lodash.differencewith";
import isEqual from "lodash.isequal";
import { RESULT } from "../../constants";

export default function doCardsMatch() {
  if (isEmpty(differenceWith(hand_a.cards, hand_b.cards, isEqual))) {
    return RESULT.tie;
  }
}
