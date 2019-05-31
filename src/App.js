import React, { Component } from "react";
import PokerHand from "./components/PokerHand";
// import Result from "../components/Result";
import { NO_OF_PLAYERS } from "./constants";
import generateHand from "./utils/generateHand";
import styles from "./App.module.css";
class App extends Component {
  state = {};
  dealNewHand = () => {
    const players = [];

    for (let i = 0; i < NO_OF_PLAYERS; i++) {
      players.push({
        id: i + 1,
        hand: generateHand()
      });
    }

    this.setState({ players: players });
  };

  handleCardChange = ({ playerId, cardId, event }) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState(prevState => {
      const player = prevState.players.find(player => {
        return player.id === playerId;
      });
      player.hand[cardId][name] = value;

      return prevState;
    });
  };

  render() {
    const { players } = this.state;
    console.log(this.state);

    return (
      <div className={styles.container}>
        <h1>Texas Hold'em</h1>
        {players &&
          players.map(({ hand, id }) => (
            <PokerHand
              key={id}
              id={id}
              hand={hand}
              onChange={this.handleCardChange}
            />
          ))}
        {/* <Result result={this.getResultText(result)} /> */}
        <button onClick={this.dealNewHand}>Deal new hand</button>
      </div>
    );
  }
}

export default App;
