import React, { useState } from "react";
import {
  PortFolioButton,
  PortfolioImage,
  PortfolioList,
  PortfolioMainWrapper,
  PortfolioText,
  PortfolioWrapper,
  StyledPortfolio,
  TextMainWrapper,
} from "./Portfolio.styles";
import img1 from "../../../assets/images/Homemain/download.png";
import img2 from "../../../assets/images/Homemain/download2.webp";

import Portfoliocard from "./Portfoliocard";

import PortfolioSlider from "src/components/PortfolioSlider/PortfolioSlider";
import Featured from "../../../assets/images/Homemain/Featured.svg";
import Digital from "../../../assets/images/Homemain/Digital.svg";
import Design from "../../../assets/images/Homemain/Design.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material";
import Image from "next/image";
import { PrimaryButton } from "src/components/Button.styles";
import { PortfolioData } from "./PortfolioData";
const Portfolio = () => {
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
  const [data, setData] = useState(PortfolioData);

  // cons

  const handelWeb = (ind) => {
    if (ind == 2) {
      setData(PortfolioData);
      const webData = data.filter((elem) => elem.work.includes("Development"));
      setData(webData);
      console.log(data);
    } else if (ind == 3) {
      setData(PortfolioData);
      console.log(data);

      const ecomData = data.filter((elem) =>
        elem.work.includes("Optimization")
      );
      setData(ecomData);
    } else if (ind == 1) {
      setData(PortfolioData);
      console.log(data);
    }
  };

  return (
    <StyledPortfolio>
      <PortfolioWrapper>
        <h1>Our Success Stories</h1>
        <PortFolioButton>
          <PrimaryButton
            bg="#fff"
            radius="7px"
            shadow="0px 0px 11px 0px rgba(0, 0, 0, 0.17)"
            shadowH="0px 0px 11px 0px rgba(0, 0, 0, 0.17)"
            width="312"
            minWidth="350"
            height="70"
            minheight="40"
            onClick={() => handelWeb(1)}
          >
            <p>Featured</p>
          </PrimaryButton>
          <PrimaryButton
            width="400"
            minWidth="350"
            height="70"
            minheight="40"
            bg="#fff"
            radius="7px"
            shadow="0px 0px 11px 0px rgba(0, 0, 0, 0.17)"
            shadowH="0px 0px 11px 0px rgba(0, 0, 0, 0.17)"
            onClick={() => handelWeb(2)}
          >
            <p>Web Development</p>
          </PrimaryButton>
          <PrimaryButton
            bg="#fff"
            radius="7px"
            shadow="0px 0px 11px 0px rgba(0, 0, 0, 0.17)"
            shadowH="0px 0px 11px 0px rgba(0, 0, 0, 0.17)"
            width="312"
            minWidth="350"
            height="70"
            minheight="40"
            size="28"
            minsize="18"
            onClick={() => handelWeb(3)}
          >
            <p>Digital Marking</p>
          </PrimaryButton>
        </PortFolioButton>
        {!isTablet ? (
          <PortfolioList>
            {data.map((elem, ind) => (
              <Portfoliocard
                key={ind}
                bgcolor={elem.bgcolor}
                bgimage={elem.bgimage}
                src={elem.brandLogo}
                heading={elem.heading}
                work={elem.work}
                discreption={elem.discreption}
                closingImage={elem.closingImage}
              />
            ))}
          </PortfolioList>
        ) : (
          <PortfolioSlider />
        )}
      </PortfolioWrapper>
    </StyledPortfolio>
  );
};

export default Portfolio;
