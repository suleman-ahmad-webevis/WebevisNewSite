import React from "react";
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
import img1 from "../../../assets/images/Homemain/download.webp";
import lotus from "../../../assets/images/Homemain/Lotus.png";
import lotusportfolio from "../../../assets/images/Homemain/lotusportfolio.png";
import tsccables from "../../../assets/images/Homemain/tsccables.png";
import tsccableslogo from "../../../assets/images/Homemain/tscableslogo.png";
import Portfoliocard from "./Portfoliocard";
import delmessa from "../../../assets/images/Homemain/delmessa.png";
import delmesalogo from "../../../assets/images/Homemain/delmesalogo.png";
import medical from "../../../assets/images/Homemain/medical.png";
import medicallogo from "../../../assets/images/Homemain/medicallogo.png";
import foodlogo from "../../../assets/images/Homemain/foodlogo.png";
import food from "../../../assets/images/Homemain/food.png";
import Saberslogo from "../../../assets/images/Homemain/Saberslogo.png";
import ziaSabar from "../../../assets/images/Homemain/ziaSabar.png";
import PortfolioSlider from "src/components/PortfolioSlider/PortfolioSlider";
import Featured from "../../../assets/images/Homemain/Featured.svg";
import Digital from "../../../assets/images/Homemain/Digital.svg";
import Design from "../../../assets/images/Homemain/Design.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material";
import Image from "next/image";
import { PrimaryButton } from "src/components/Button.styles";
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

  return (
    <StyledPortfolio>
      <PortfolioWrapper>
        <h1>Our Dedicated Work Portfolio</h1>
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
          >
            <p>Digital Marking</p>
          </PrimaryButton>
        </PortFolioButton>
        {!isTablet ? (
          <PortfolioList>
            <Portfoliocard
              bgcolor="linear-gradient(78.1deg, #2F8E2D 1.99%, rgba(217, 217,
            217, 0) 142.3%)"
              bgimage={lotusportfolio}
              src={lotus}
              heading="Lotus Matting Inc"
              work="Web development"
              discreption=" specializes in Pipeline Crossing Analysis using analytical
                    models to protect"
              closingImage={img1}
            />
            <Portfoliocard
              bgcolor="linear-gradient(69.36deg, rgba(223, 47, 47, 0.79) -6.97%, rgba(217, 217, 217, 0) 90.1%)"
              bgimage={tsccables}
              src={tsccableslogo}
              heading="Turnstone Cables"
              work="Web development"
              discreption=" specializes in Pipeline Crossing Analysis using analytical
                    models to protect"
              closingImage={img1}
            />
            <Portfoliocard
              bgcolor="linear-gradient(81deg, #A92121 -11.32%, rgba(217, 217, 217, 0) 74.67%)"
              bgimage={delmessa}
              src={delmesalogo}
              heading="Del Mesa Liquor"
              work="Web development"
              discreption=" specializes in Pipeline Crossing Analysis using analytical
                    models to protect"
              closingImage={img1}
            />
            <Portfoliocard
              bgcolor="linear-gradient(69.36deg, #28B781 -6.97%, rgba(217, 217, 217, 0) 90.1%)"
              bgimage={medical}
              src={medicallogo}
              heading="Medical Sheepskins"
              work="Web development"
              discreption=" specializes in Pipeline Crossing Analysis using analytical
                    models to protect"
              closingImage={img1}
            />
            <Portfoliocard
              bgcolor="linear-gradient(81deg, #000000 -11.32%, rgba(217, 217, 217, 0) 74.67%)"
              bgimage={ziaSabar}
              src={Saberslogo}
              heading="ZIA Sabers"
              work="Search Engine Optimization"
              discreption=" specializes in Pipeline Crossing Analysis using analytical
                    models to protect"
              closingImage={img1}
            />
            <Portfoliocard
              bgcolor="linear-gradient(69.36deg, #019245 -6.97%, rgba(217, 217, 217, 0) 90.1%)"
              bgimage={food}
              src={foodlogo}
              heading="original foods"
              work="Social Media Marketing"
              discreption=" specializes in Pipeline Crossing Analysis using analytical
                    models to protect"
              closingImage={img1}
            />
          </PortfolioList>
        ) : (
          <PortfolioSlider />
        )}
      </PortfolioWrapper>
    </StyledPortfolio>
  );
};

export default Portfolio;
