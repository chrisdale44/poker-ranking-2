export default function getIndexesOf(rankings, highestRank) {
  return rankings.reduce((a, e, i) => {
    if (e === highestRank) a.push(i);
    return a;
  }, []);
}
