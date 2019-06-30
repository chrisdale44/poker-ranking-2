export default function checkForLowAce(values) {
  if (values[3] === "5") {
    values.unshift(values.pop());
  }
  return values;
}
