export type SnackbarType = {
  key: string;
  text: React.ReactNode;
  icon?: React.ReactNode;
  variant: string;
};

export type ISnackbarProps = Omit<SnackbarType, "key"> & {
  handleClose: () => void;
  autoHideDuration: () => void;
  open: boolean;
};
