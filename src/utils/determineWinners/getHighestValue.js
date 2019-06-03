export default function getHighestValue(array) {
  return array.reduce((x, y) => {
    return x > y ? x : y;
  });
}
