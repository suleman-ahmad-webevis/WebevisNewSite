import React from "react";
import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import OurServices from "src/components/Services/ourServices/OurServices";
import OurServicesMobile from "src/components/Services/ourServices/OurservicesMobile";

const CustomMobileServices = () => {
  const themes = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
        // Add your custom breakpoints here
        tablet: 750,
        // Add more if needed
      },
    },
  });
  const isTablet = useMediaQuery(themes.breakpoints.down("tablet"));

  return (
    <ThemeProvider theme={themes}>
      {!isTablet ? <OurServices /> : <OurServicesMobile />}
    </ThemeProvider>
  );
};

export default CustomMobileServices;
