import compareValues from "./compareValues";
import { WIN, LOSS, TIE } from "../../constants";

describe("UTIL: compareValues", () => {
  it("should return WIN if a is greater than b", () => {
    const a = 2;
    const b = 1;
    expect(compareValues(a, b)).toEqual(WIN);
  });

  it("should return LOSS if a is less than b", () => {
    const a = 1;
    const b = 2;
    expect(compareValues(a, b)).toEqual(LOSS);
  });

  it("should return TIE if a is equal to b", () => {
    const a = 1;
    const b = 1;
    expect(compareValues(a, b)).toEqual(TIE);
  });
});
