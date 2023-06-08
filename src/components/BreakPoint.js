import { useState, useEffect } from "react";
import throttle from "lodash.throttle";

const getDeviceConfig = (width) => {
  let DeviceConfig = {
    isDesktop: false,
    isTablet: false,
    isMobile: false,
    isSmallMobile: false,
  };
  if (width <= 400) {
    DeviceConfig.isSmallMobile = true;
  } else if (width <= 600) {
    DeviceConfig.isMobile = true;
  } else if (width >= 768) {
    DeviceConfig.isTablet = true;
  } else {
    DeviceConfig.isDesktop = true;
  }
  return DeviceConfig;
};

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(() =>
    typeof window !== "undefined" ? getDeviceConfig(window.innerWidth) : {}
  );

  useEffect(() => {
    const calcInnerWidth = throttle(function () {
      setBreakpoint(getDeviceConfig(window.innerWidth));
    }, 200);

    if (typeof window !== "undefined") {
      window.addEventListener("resize", calcInnerWidth);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", calcInnerWidth);
      }
    };
  }, []);

  return breakpoint;
};

export default useBreakpoint;
