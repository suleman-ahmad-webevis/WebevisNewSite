import React, { useEffect } from "react";
import { ContentHolder, StyledModal } from "./Modal.style";
import { Closer } from "../LandingPage/OurClient/Client.style";
import { RxCross1 } from "react-icons/rx";

const Modal = ({
  child,
  open,
  setOpen,
  bg,
  padding,
  width,
  radius,
  svgColor,
  desktopRight,
  desktopTop,
  MobileRight,
  MobileTop,
  border,
  mobileColor,
}) => {
  useEffect(() => {
    // Function to disable scrolling when the modal is open
    const disableScroll = () => {
      document.body.style.overflow = "hidden";
    };

    // Function to enable scrolling when the modal is closed
    const enableScroll = () => {
      document.body.style.overflow = "auto";
    };

    if (open) {
      disableScroll();
    } else {
      enableScroll();
    }

    // Clean up the event listener when the component unmounts
    return () => {
      enableScroll();
    };
  }, [open]);

  return (
    open && (
      <StyledModal open={open}>
        <ContentHolder
          bg={bg}
          padding={padding}
          width={width}
          radius={radius}
          desktopRight={desktopRight}
          desktopTop={desktopTop}
        >
          {child}
          <Closer
            onClick={() => setOpen(false)}
            desktopRight={desktopRight}
            desktopTop={desktopTop}
            MobileRight={MobileRight}
            MobileTop={MobileTop}
            svgColor={svgColor}
            border={border}
            mobileColor={mobileColor}
          >
            <RxCross1 />
          </Closer>
        </ContentHolder>
      </StyledModal>
    )
  );
};

export default Modal;
