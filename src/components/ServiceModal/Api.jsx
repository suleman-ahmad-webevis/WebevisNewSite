import React, { useContext, useEffect } from "react";
import { ToastContext } from "src/context/toastContext";

const Api = () => {
  const { showToast } = useContext(ToastContext);
  useEffect(() => {
    async function getBlogs() {
      try {
        const res = await fetch("https://fakestreapi.com/products");
        console.log(res);
        if (res.status == 200) {
          showToast({
            success: true,
            text: "Thank you for considering us! We will get back to you shortly.",
          });
          console.log(res.status);
          const data = await res.json();
        }
      } catch (error) {
        showToast({
          error: true,
          text: "error",
        });
        console.log(error);
      } finally {
        // console.log("finaly");
      }
    }
    getBlogs();
  });

  return <div></div>;
};

export default Api;
