import getRankings from "./getRankings";
import getIndexesOf from "./getIndexesOf";
import getMaxRank from "./getMaxRank";
import getHands from "./getHands";
import compareHands from "./compareHands";
import doCardsMatch from "./doCardsMatch";
import { RESULT } from "../constants";

export default function determineWinners(players) {
  const rankings = getRankings(players);
  const highestRank = getMaxRank(rankings);
  const winningIds = getIndexesOf(rankings, highestRank);

  if (winningIds.length > 1) {
    const hands = getHands(players, winningIds);
    if (doCardsMatch(hands)) {
      return RESULT.tie;
    }

    compareHands(hands);
  } else {
    return winningIds[0];
  }
}
