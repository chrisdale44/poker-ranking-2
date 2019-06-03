import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.css";
import Card from "./Card";

export default function PokerHand({ id, cards, ranking, onChange }) {
  const handleCardChange = ({ ...args }) => {
    onChange({ ...args, playerId: id });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.cardLabel}>
        <span>Player {id}</span>
      </div>
      {cards.map((card, i) => (
        <Card key={i} card={card} id={i} onChange={handleCardChange} />
      ))}
      <div className={styles.handRank}>
        <span>{ranking.name}</span>
      </div>
    </div>
  );
}

PokerHand.propTypes = {
  id: PropTypes.number.isRequired,
  cards: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  ranking: PropTypes.object.isRequired
};
