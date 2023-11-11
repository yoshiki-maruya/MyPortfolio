import SnackbarContext from "@/contexts/SnackbarContext";
import { SnackbarType } from "@/types/ISnackbarProps";
import { useCallback, useContext } from "react";

const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar was called outside SnackbarProvider");
  }
  const { dispatch } = context;

  return useCallback(
    (snack: SnackbarType) => {
      dispatch({ type: "ADD_SNACKBAR", payload: { current: snack } });
    },
    [dispatch]
  );
};

export default useSnackbar;
