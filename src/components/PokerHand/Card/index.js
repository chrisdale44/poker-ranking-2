import React from "react";
import PropTypes from "prop-types";
import { CARD_VALUES, SUITS, SUIT_ICONS } from "../../../constants";
import styles from "./index.module.css";

export default function Card(props) {
  const {
    card: { value, suit }
  } = props;

  function handleCardChange(e) {
    const { id, onChange } = props;
    onChange({ cardId: id, event: e });
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.value}>
        <select
          onChange={handleCardChange}
          value={value}
          name="value"
          className={styles[suit]}
        >
          {CARD_VALUES.map((value, i) => (
            <option key={i} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.suit}>
        <select
          onChange={handleCardChange}
          value={suit}
          name="suit"
          className={styles[suit]}
        >
          {SUITS.map((suit, i) => (
            <option key={i} value={suit}>
              {SUIT_ICONS[suit]}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  card: PropTypes.shape({
    value: PropTypes.oneOf(CARD_VALUES),
    suit: PropTypes.oneOf(SUITS)
  }).isRequired,
  onChange: PropTypes.func.isRequired
};
