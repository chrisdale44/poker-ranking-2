import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.css";
import { HAND_RANKS } from "../../constants";
import Card from "./Card";

export default function PokerHand({ id, hand, rank, onChange }) {
  console.log(hand);
  const handleCardChange = ({ ...args }) => {
    onChange({ ...args, playerId: id });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.cardLabel}>
        <span>Player {id}</span>
      </div>
      {hand.map((card, i) => (
        <Card key={i} card={card} id={i} onChange={handleCardChange} />
      ))}
      <div className={styles.handRank}>
        <span>{HAND_RANKS[rank]}</span>
      </div>
    </div>
  );
}

PokerHand.propTypes = {
  hand: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};
