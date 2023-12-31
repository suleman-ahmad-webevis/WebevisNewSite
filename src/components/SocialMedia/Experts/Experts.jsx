import React from "react";
import {
  ExpertSec,
  ExpertText,
  FlootingText,
  MobileFlootingText,
} from "./Expert.styles";
import steps from "../../../../public/assets/images/SocialMedia/steps.png";
import mobilesteps from "../../../../public/assets/images/SocialMedia/mobileSteps.png";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material";
import { ContainerWrapper } from "src/components/Container.styles";

const Experts = () => {
  const themes = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
        // Add your custom breakpoints here
        tablet: 768,
        // Add more if needed
      },
    },
  });
  const isTablet = useMediaQuery(themes.breakpoints.down("tablet"));
  return (
    <ThemeProvider theme={themes}>
      <ContainerWrapper>
        <ExpertSec>
          <ExpertText>
            <h1>Sample Monthly Timeline</h1>
            {!isTablet && (
              <>
                <Image src={steps} alt="steps" />
                <FlootingText leftF="7%" topF="10%">
                  <h6>
                    Your content will be created ahead of time, so posts are
                    scheduled out for the month. Throughout the month, we’ll
                    strategically boost content to maximize visibility for you.
                  </h6>
                </FlootingText>
                <FlootingText left="51%" leftF="50%" topF="10%">
                  <h6>
                    Your content will be created ahead of time, so posts are
                    scheduled out for the month. Throughout the month, we’ll
                    strategically boost content to maximize visibility for you.
                  </h6>
                </FlootingText>
                <FlootingText left="72%" top="45%" leftF="72%" topF="43%">
                  <h6>
                    Your content will be created ahead of time, so posts are
                    scheduled out for the month. Throughout the month, we’ll
                    strategically boost content to maximize visibility for you.
                  </h6>
                </FlootingText>
                <FlootingText left="28%" top="45%" leftF="28%" topF="43%">
                  <h6>
                    Your content will be created ahead of time, so posts are
                    scheduled out for the month. Throughout the month, we’ll
                    strategically boost content to maximize visibility for you.
                  </h6>
                </FlootingText>
              </>
            )}
            {isTablet && (
              <div>
                <Image src={mobilesteps} alt="mobilesteps" />
                <MobileFlootingText color>
                  <p>Step 1</p>
                  <h6>
                    Your content will be created ahead of time, so posts are
                    scheduled out for the month. Throughout the month, we’ll
                    strategically boost content to maximize visibility for you.
                  </h6>
                </MobileFlootingText>
                <MobileFlootingText left="13%" top="32%" leftF="13%" topF="34%">
                  <p>Step 2</p>

                  <h6>
                    Your content will be created ahead of time, so posts are
                    scheduled out for the month. Throughout the month, we’ll
                    strategically boost content to maximize visibility for you.
                  </h6>
                </MobileFlootingText>
                <MobileFlootingText
                  left="60%"
                  top="45%"
                  color
                  leftF="50%"
                  topF="48%"
                >
                  <p>Step 3</p>
                  <h6>
                    Your content will be created ahead of time, so posts are
                    scheduled out for the month. Throughout the month, we’ll
                    strategically boost content to maximize visibility for you.
                  </h6>
                </MobileFlootingText>
                <MobileFlootingText left="13%" top="61%" leftF="13%" topF="61%">
                  <p>Step 4</p>
                  <h6>
                    Your content will be created ahead of time, so posts are
                    scheduled out for the month. Throughout the month, we’ll
                    strategically boost content to maximize visibility for you.
                  </h6>
                </MobileFlootingText>
              </div>
            )}
            <h2>Experts on every social media platform</h2>
            <p>
              We create and manage the complete social media package on every
              platform, with an understanding of the nuances between the
              platforms to provide the perfect message.
            </p>
          </ExpertText>
        </ExpertSec>
      </ContainerWrapper>
    </ThemeProvider>
  );
};

export default Experts;
