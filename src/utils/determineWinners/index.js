import getIndexesOf from "./getIndexesOf";
import getHighestValue from "./getHighestValue";
import compareHands from "./compareHands";
import doCardsMatch from "./doCardsMatch";
import { LOSS, TIE } from "../../constants";

export default function determineWinners(players) {
  const rankings = players.map(({ hand }) => hand.ranking);
  const highestRank = getHighestValue(rankings);
  const winningPlayerIds = getIndexesOf(rankings, highestRank);

  if (winningPlayerIds.length > 1) {
    const winningPlayers = winningPlayerIds.map(id => {
      return players.find(x => x.id === id);
    });
    if (doCardsMatch(winningPlayers.map(player => player.cards))) {
      return winningPlayerIds;
    }

    let winners = [players[0]];
    for (let i = 0; i < winningPlayers.length - 1; i++) {
      const contendor = players[i + 1];

      const result = compareHands(winners, contendor);
      if (result === LOSS) {
        winners = [contendor];
      } else if (result === TIE) {
        winners.push(contendor);
      }
    }

    return winners.map(player => player.id);
  }

  return winningPlayerIds;
}
