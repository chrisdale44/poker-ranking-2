export default function getMaxRank(rankings) {
  rankings.reduce((x, y) => {
    return x > y ? x : y;
  });
}
