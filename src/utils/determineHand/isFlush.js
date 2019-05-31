import countBy from "lodash.countby";
import size from "lodash.size";

export default function isFlush(suits) {
  return size(countBy(suits)) === 1 ? true : false;
}
