import { renderHook, act } from "@testing-library/react";
import "@testing-library/jest-dom/jest-globals";
import useMediaQuery from "@/hooks/useMediaQuery";
import { describe, it, expect, beforeEach } from "@jest/globals";

describe("useMediaQuery", () => {
  beforeEach(() => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1024,
    });
  });

  describe("when window width is equal to breakpoint", () => {
    it("should return true", () => {
      Object.defineProperty(window, "innerWidth", {
        writable: true,
        configurable: true,
        value: 768,
      });
      const { result } = renderHook(() => useMediaQuery(768));
      expect(result.current).toBe(true);
    });
  });

  describe("when window width is greater than breakpoint", () => {
    it("should return true", () => {
      Object.defineProperty(window, "innerWidth", {
        writable: true,
        configurable: true,
        value: 1280,
      });
      const { result } = renderHook(() => useMediaQuery(768));
      expect(result.current).toBe(true);
    });
  });

  describe("when window width is less than breakpoint", () => {
    it("should return false", () => {
      Object.defineProperty(window, "innerWidth", {
        writable: true,
        configurable: true,
        value: 375,
      });
      const { result } = renderHook(() => useMediaQuery(768));
      expect(result.current).toBe(false);
    });
  });

  describe("when window is resized above breakpoint", () => {
    it("should update to true", () => {
      Object.defineProperty(window, "innerWidth", {
        writable: true,
        configurable: true,
        value: 375,
      });
      const { result } = renderHook(() => useMediaQuery(768));
      expect(result.current).toBe(false);

      act(() => {
        Object.defineProperty(window, "innerWidth", {
          writable: true,
          configurable: true,
          value: 1024,
        });
        window.dispatchEvent(new Event("resize"));
      });

      expect(result.current).toBe(true);
    });
  });

  describe("when window is resized below breakpoint", () => {
    it("should update to false", () => {
      const { result } = renderHook(() => useMediaQuery(768));
      expect(result.current).toBe(true);

      act(() => {
        Object.defineProperty(window, "innerWidth", {
          writable: true,
          configurable: true,
          value: 375,
        });
        window.dispatchEvent(new Event("resize"));
      });

      expect(result.current).toBe(false);
    });
  });
});
