import React, { useState } from "react";
import Toastify from "./Toastify";
const Toast = () => {
  const [first, setfirst] = useState(true);
  return (
    <Toastify error={first} text={"error"} open={first} setOpen={setfirst} />
  );
};

export default Toast;
