import { SnackbarType } from "@/types/ISnackbarProps";
import { TAction } from "@/utils/reducer";
import { createContext } from "react";

const SnackbarContext = createContext<{
  queue: SnackbarType[];
  dispatch: React.Dispatch<TAction>;
}>({
  queue: [] as SnackbarType[],
  dispatch: () => {},
});

export default SnackbarContext;
