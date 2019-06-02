export default function getRankings(players) {
  players.map(({ hand }) => hand.ranking);
}
