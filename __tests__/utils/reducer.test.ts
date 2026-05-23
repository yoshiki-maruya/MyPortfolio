import reducer from "@/utils/reducer";
import { describe, it, expect } from "@jest/globals";

describe("utilities/reducer", () => {
  const initialState = { queue: [] };
  const snackA = { key: "a", text: "Message A", variant: "success" };
  const snackB = { key: "b", text: "Message B", variant: "error" };

  describe("ADD_SNACKBAR", () => {
    describe("when queue is empty", () => {
      it("should add snackbar to queue", () => {
        const state = reducer(initialState, {
          type: "ADD_SNACKBAR",
          payload: { current: snackA },
        });
        expect(state.queue).toHaveLength(1);
        expect(state.queue[0]).toEqual(snackA);
      });
    });

    describe("when snackbar with same key already exists", () => {
      it("should not add duplicate and return same state reference", () => {
        const stateWithA = { queue: [snackA] };
        const state = reducer(stateWithA, {
          type: "ADD_SNACKBAR",
          payload: { current: snackA },
        });
        expect(state.queue).toHaveLength(1);
        expect(state).toBe(stateWithA);
      });
    });

    describe("when snackbar with different key exists", () => {
      it("should append new snackbar", () => {
        const state = reducer(
          { queue: [snackA] },
          { type: "ADD_SNACKBAR", payload: { current: snackB } }
        );
        expect(state.queue).toHaveLength(2);
        expect(state.queue[1]).toEqual(snackB);
      });
    });
  });

  describe("REMOVE_SNACKBAR", () => {
    describe("when the key exists in queue", () => {
      it("should remove the matching snackbar", () => {
        const state = reducer(
          { queue: [snackA, snackB] },
          { type: "REMOVE_SNACKBAR", payload: { key: "a" } }
        );
        expect(state.queue).toHaveLength(1);
        expect(state.queue[0]).toEqual(snackB);
      });
    });

    describe("when the key does not exist", () => {
      it("should return queue unchanged", () => {
        const state = reducer(
          { queue: [snackA] },
          { type: "REMOVE_SNACKBAR", payload: { key: "nonexistent" } }
        );
        expect(state.queue).toHaveLength(1);
      });
    });

    describe("when queue is empty", () => {
      it("should return empty queue", () => {
        const state = reducer(initialState, {
          type: "REMOVE_SNACKBAR",
          payload: { key: "a" },
        });
        expect(state.queue).toHaveLength(0);
      });
    });
  });

  describe("unknown action type", () => {
    it("should throw an error", () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect(() => reducer(initialState, { type: "UNKNOWN" } as any)).toThrow(
        "Unknown action type"
      );
    });
  });
});
