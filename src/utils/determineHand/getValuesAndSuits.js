import sortValuesNumerically from "./sortValuesNumerically";

export default function getValuesAndSuits(hand) {
  const values = [];
  const suits = [];
  hand.forEach((card, i) => {
    values.push(card.value);
    suits.push(card.suit);
  });
  return {
    values: sortValuesNumerically(values),
    suits: suits
  };
}
