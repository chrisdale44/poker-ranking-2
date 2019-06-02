export default function getHands(players, winningIds) {
  winningIds.map(i => {
    return players.find(x => x.id === i).hand;
  });
}
