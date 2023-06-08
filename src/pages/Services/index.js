// import { Inter } from "next/font/google";

import Layout from "src/components/Layout/Layout";
import Counter from "src/components/Services/counter/Counter";
import Hero from "src/components/Services/heroSection/Hero";
import { Wrapper } from "src/components/Services/heroSection/Hero.styles";
import Meeting from "src/components/Services/meeting/Meeting";
import OurServices from "src/components/Services/ourServices/OurServices";
import OurServicesMobile from "src/components/Services/ourServices/OurservicesMobile";
import ChooseUs from "src/components/Services/whyChooseUs/ChooseUs";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material";

export default function index({ pageProps }) {
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
      <Layout {...pageProps}>
        <Wrapper>
          <Hero />
          {!isTablet ? <OurServices /> : <OurServicesMobile />}
          <Counter />
          <ChooseUs />
          <Meeting />
        </Wrapper>
      </Layout>
    </ThemeProvider>
  );
}
