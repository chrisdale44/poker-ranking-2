import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.css";
import { NO_OF_PLAYERS } from "../../constants";

export default function Card({ winner }) {
  let message;
  if (winner.length === NO_OF_PLAYERS) {
    message = "All players split pot!";
  } else if (winner.length > 1) {
    const winnerList = [
      winner.slice(0, -1).join(", "),
      winner.slice(-1)[0]
    ].join(winner.length < 2 ? "" : " and ");
    message = `Players ${winnerList} split pot!`;
  } else {
    message = `Player ${winner[0]} wins!`;
  }

  return <h2 className={styles.result}>{message}</h2>;
}

Card.propTypes = {
  winner: PropTypes.array.isRequired
};
