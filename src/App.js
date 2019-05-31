import React, { Component } from "react";
import PokerHand from "./components/PokerHand";
// import Result from "../components/Result";
import { NO_OF_PLAYERS } from "./constants";
import generateHand from "./utils/generateHand";
import determineHand from "./utils/determineHand";
import styles from "./App.module.css";
class App extends Component {
  state = {};
  dealCards = () => {
    const players = [];

    for (let i = 0; i < NO_OF_PLAYERS; i++) {
      const cards = generateHand();
      players.push({
        id: i + 1,
        cards,
        hand: determineHand(cards)
      });
    }

    this.setState({ players: players });
  };

  handleCardChange = ({ playerId, cardId, event }) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState(prevState => {
      const newState = Object.assign({}, prevState);
      const player = newState.players.find(player => {
        return player.id === playerId;
      });

      player.cards[cardId][name] = value;
      player.hand = determineHand(player.cards);

      return newState;
    });
  };

  render() {
    const { players } = this.state;
    console.log(this.state);

    return (
      <div className={styles.container}>
        <h1>Texas Hold'em</h1>
        {players &&
          players.map(({ cards, id, hand }) => (
            <PokerHand
              key={id}
              id={id}
              cards={cards}
              ranking={hand.ranking}
              onChange={this.handleCardChange}
            />
          ))}
        {/* <Result result={this.getResultText(result)} /> */}
        <button className={styles.dealer} onClick={this.dealCards}>
          Deal new hand
        </button>
      </div>
    );
  }
}

export default App;
