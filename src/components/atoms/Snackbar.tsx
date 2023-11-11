import { ISnackbarProps } from "@/types/ISnackbarProps";
import { useEffect } from "react";

const Snackbar: React.FC<ISnackbarProps> = ({
  open,
  text,
  icon: Icon,
  autoHideDuration,
  handleClose,
  variant,
}) => {
  const variants = {
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-yellow-500",
    info: "bg-blue-500",
  };

  useEffect(() => {
    return autoHideDuration();
  }, [autoHideDuration]);

  return open ? (
    <>
      <div
        className={`${variants[variant]} absolute left-1/2 top-24 flex min-w-[320px] -translate-x-1/2 -translate-y-1/2 transform items-center justify-between whitespace-nowrap rounded-lg px-5 py-3 text-white shadow-md`}
      >
        <span>{text}</span>
        <button className="bg-transparent text-current" onClick={handleClose}>
          {Icon}
        </button>
      </div>
    </>
  ) : null;
};

export default Snackbar;
