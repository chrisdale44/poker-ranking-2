export default function getIndexesOf(rankings, highestRank) {
  rankings.reduce((a, e, i) => {
    if (e === highestRank) a.push(i + 1);
    return a;
  }, []);
}
