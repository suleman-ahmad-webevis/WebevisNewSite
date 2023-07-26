import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material";
import AgencyDesk from "./AgencyDesk";
import AgencyMobile from "./AgencyMobile";

const Agency = () => {
  const themes = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 971,
        lg: 1280,
        xl: 1920,
        // Add your custom breakpoints here
        tablet: 768,
        // Add more if needed
      },
    },
  });
  const isTablet = useMediaQuery(themes.breakpoints.down("md"));

  return <div>{!isTablet ? <AgencyDesk /> : <AgencyMobile />}</div>;
};

export default Agency;
