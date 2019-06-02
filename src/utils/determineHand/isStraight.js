import { CARD_VALUES, ACE } from "../../constants";

export default function isStraight(values) {
  for (let i = 0; i < values.length - 1; i++) {
    const value = values[i];
    const expectedNextCard = CARD_VALUES[CARD_VALUES.indexOf(value) + 1];
    const actualNextCard = values[i + 1];

    if (expectedNextCard !== actualNextCard) {
      if (!(i === 3 && expectedNextCard === "6" && actualNextCard === ACE)) {
        return false;
      }
    }
  }
  return true;
}
