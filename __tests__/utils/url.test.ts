import { createUrl } from "@/utils/url";
import { describe, it, expect } from "@jest/globals";

describe("utilities/url", () => {
  describe("createUrl", () => {
    describe("when item is uppercase", () => {
      it("should convert to lowercase with leading slash", () => {
        expect(createUrl("ABOUT")).toBe("/about");
      });
    });

    describe("when item contains whitespace", () => {
      it("should remove all whitespace", () => {
        expect(createUrl("ABOUT ME")).toBe("/aboutme");
      });
    });

    describe("when item has leading/trailing whitespace", () => {
      it("should strip surrounding whitespace", () => {
        expect(createUrl("  BLOG  ")).toBe("/blog");
      });
    });

    describe("when item is already lowercase", () => {
      it("should add leading slash only", () => {
        expect(createUrl("works")).toBe("/works");
      });
    });

    describe("when item is mixed case", () => {
      it("should convert to lowercase", () => {
        expect(createUrl("Contact")).toBe("/contact");
      });
    });

    describe("for each sidebarList item", () => {
      it.each([
        ["ABOUT", "/about"],
        ["WORKS", "/works"],
        ["BLOG", "/blog"],
        ["CONTACT", "/contact"],
      ])("createUrl(%s) === %s", (input, expected) => {
        expect(createUrl(input)).toBe(expected);
      });
    });
  });
});
