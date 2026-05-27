import { renderHook, act } from "@testing-library/react";
import useSnackbar from "@/hooks/useSnackbar";
import SnackbarProvider from "@/providers/SnackbarProvider";
import { describe, it, expect } from "@jest/globals";

describe("useSnackbar", () => {
  describe("when used inside SnackbarProvider", () => {
    it("should return a function", () => {
      const { result } = renderHook(() => useSnackbar(), {
        wrapper: SnackbarProvider,
      });
      expect(typeof result.current).toBe("function");
    });

    it("should dispatch without throwing when called", () => {
      const { result } = renderHook(() => useSnackbar(), {
        wrapper: SnackbarProvider,
      });
      expect(() => {
        act(() => {
          result.current({ key: "test", text: "Hello", variant: "success" });
        });
      }).not.toThrow();
    });

    it("should return a stable callback reference across renders", () => {
      const { result, rerender } = renderHook(() => useSnackbar(), {
        wrapper: SnackbarProvider,
      });
      const first = result.current;
      rerender();
      expect(result.current).toBe(first);
    });
  });
});
