import React, { useState } from "react";
import {
  CloseButton,
  StyledToastify,
  ToastImage,
  ToastText,
} from "./Toastify.styles";
import errorImage from "../../../../public/assets/images/toastify/errorImage.svg";
import warningImage from "../../../../public/assets/images/toastify/warningImage.svg";
import successImage from "../../../../public/assets/images/toastify/successImage.svg";
import infoImage from "../../../../public/assets/images/toastify/infoImage.svg";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
const Toastify = ({ open, setOpen, error, info, warning, success, text }) => {
  console.log("error", error);
  console.log("info", info);
  // if (open) {
  //   setTimeout(() => {
  //     setOpen(false);
  //   }, 10000);
  // }

  return (
    <StyledToastify
      toast={open}
      info={info}
      error={error}
      warning={warning}
      success={success}
    >
      {info && (
        <ToastImage>
          <Image src={infoImage} alt="infoImage" />
        </ToastImage>
      )}
      {error && (
        <ToastImage>
          <Image src={errorImage} alt="error" />
        </ToastImage>
      )}
      {warning && (
        <ToastImage>
          <Image src={warningImage} alt="warningImage" />
        </ToastImage>
      )}
      {success && (
        <ToastImage>
          <Image src={successImage} alt="successImage" />
        </ToastImage>
      )}

      <ToastText>{text}</ToastText>
      <CloseButton onClick={() => setOpen(false)}>
        <RxCross2 />
      </CloseButton>
    </StyledToastify>
  );
};

export default Toastify;
