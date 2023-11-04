import { makePositiveInt } from "@/utils/number";
import { describe, it, expect } from "@jest/globals";

describe("utilities/number", () => {
  describe("makePositiveInt", () => {
    describe("when the num is NaN", () => {
      it("should return 0", () => {
        expect(makePositiveInt(NaN)).toBe(0);
      });
    });

    describe("when the num is a positive integer", () => {
      it("should return the num", () => {
        expect(makePositiveInt(1)).toBe(1);
      });
    });

    describe("when the num is a negative value", () => {
      it("should make it positive", () => {
        expect(makePositiveInt(-1)).toBe(1);
      });

      describe("when the num is a float value", () => {
        it("should make it positive and rounded integer", () => {
          expect(makePositiveInt(-0.5)).toBe(1);
          expect(makePositiveInt(-0.49)).toBe(0);
        });
      });
    });

    describe("when the num is a float value", () => {
      it("should make it rounded integer", () => {
        expect(makePositiveInt(0.5)).toBe(1);
        expect(makePositiveInt(0.49)).toBe(0);
      });
    });
  });
});
