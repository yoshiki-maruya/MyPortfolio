"use client";
import Snackbar from "@/components/atoms/Snackbar";
import SnackbarContext from "@/contexts/SnackbarContext";
import reducer from "@/utils/reducer";
import { useEffect, useReducer } from "react";

export default function SnackbarProvider({ children }: { children: React.ReactNode }) {
  const [{ queue }, dispatch] = useReducer(reducer, { queue: [] });

  return (
    <SnackbarContext.Provider value={{ queue, dispatch }}>
      {queue.map((snack, index) => (
        <Snackbar
          key={snack.key}
          text={snack.text}
          open={!!snack.text}
          variant={snack.variant}
          icon={snack.icon}
          autoHideDuration={() => {
            setTimeout(() => {
              dispatch({ type: "REMOVE_SNACKBAR", payload: { key: snack.key } });
            }, 3000);
          }}
          handleClose={() => dispatch({ type: "REMOVE_SNACKBAR", payload: { key: snack.key } })}
        />
      ))}
      {children}
    </SnackbarContext.Provider>
  );
}
