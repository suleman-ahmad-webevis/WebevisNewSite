import React, { createContext, useState } from "react";
import Toastify from "src/components/Modal/toastify/Toastify";

export const ToastContext = createContext();

export const ToastContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState(null);

  const showToast = (props) => {
    setOpen((prev) => !prev);
    setState(props);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toastify open={open} setOpen={setOpen} {...state} />
    </ToastContext.Provider>
  );
};
