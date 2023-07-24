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
import img1 from "../../../assets/images/Homemain/download.png";
import img2 from "../../../assets/images/Homemain/download2.webp";

import Portfoliocard from "./Portfoliocard";

import equest from "../../../assets/images/Homemain/equest.png";
import equestLogo from "../../../assets/images/Homemain/equestLogo.png";
import equestSlide from "../../../assets/images/Homemain/equestbuilders.png";
import meatLogo from "../../../assets/images/Homemain/meat.svg";
import meatBg from "../../../assets/images/Homemain/MeatBg.png";
import meatslide from "../../../assets/images/Homemain/L-Chaim-Meats.png";
import nvmcBg from "../../../assets/images/Homemain/NMCV.png";
import nvmclogo from "../../../assets/images/Homemain/nmcvLogo.png";
import nvmcSlide from "../../../assets/images/Homemain/NMCV-Business.png";
import toddlerLogo from "../../../assets/images/Homemain/toddler.png";
import toddlerbg from "../../../assets/images/Homemain/toddlerbg.png";
import toddlerSlide from "../../../assets/images/Homemain/toddlers.png";
import potatobg from "../../../assets/images/Homemain/potatobg.png";
import potatoLogo from "../../../assets/images/Homemain/potatoLogo.png";
import aproplateLogo from "../../../assets/images/Homemain/aproplatLogo.png";
import approplatebg from "../../../assets/images/Homemain/approplatebg.png";
import approplateSlide from "../../../assets/images/Homemain/aproplat.png";
import deltaTechbg from "../../../assets/images/Homemain/deltaTech.png";
import deltaTechLogo from "../../../assets/images/Homemain/deltaTechLogo.png";
import deltaTech from "../../../assets/images/Homemain/delta-tech.png";
import BncablesLogo from "../../../assets/images/Homemain/BnCablesLogo.png";
import Bncablesbg from "../../../assets/images/Homemain/BnCables.png";
import BncablesSlide from "../../../assets/images/Homemain/bnb-cables.png";
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
              bgcolor="linear-gradient(78.1deg, #2F8E2D 1.99%, rgba(217, 217, 217, 0) 142.3%)"
              bgimage={equest}
              src={equestLogo}
              heading="Equest Builders"
              work="Web Development"
              discreption=" specializes in Pipeline Crossing Analysis using analytical
                    models to protect"
              closingImage={equestSlide}
            />
            <Portfoliocard
              bgcolor="linear-gradient(69.36deg, rgba(223, 47, 47, 0.79) -6.97%, rgba(217, 217, 217, 0) 90.1%)"
              bgimage={meatBg}
              src={meatLogo}
              heading="L Chaim Meats"
              work="Web development"
              discreption=" specializes in Pipeline Crossing Analysis using analytical
                    models to protect"
              closingImage={meatslide}
              marginTop="0px"
            />
            <Portfoliocard
              bgcolor="linear-gradient(51deg, #E3002A 0%, rgba(217, 217, 217, 0.00) 88.50%)"
              bgimage={nvmcBg}
              src={nvmclogo}
              heading="NMCV Business"
              work="WordPress Development"
              discreption=" specializes in Pipeline Crossing Analysis using analytical
                    models to protect"
              closingImage={nvmcSlide}
              marginTop="-20px"
            />
            <Portfoliocard
              bgcolor="linear-gradient(51deg, #E123E4 0%, rgba(217, 217, 217, 0.00) 88.50%)"
              bgimage={toddlerbg}
              src={toddlerLogo}
              heading="LisaforSythe"
              work="Search Engine Optimization"
              discreption=" specializes in Pipeline Crossing Analysis using analytical
                    models to protect"
              closingImage={toddlerSlide}
              marginTop="-20px"
            />
            <Portfoliocard
              bgcolor="linear-gradient(68deg, #835932 0%, rgba(217, 217, 217, 0.00) 100%)"
              bgimage={potatobg}
              src={potatoLogo}
              heading="MrPotatoToken"
              work="Web Development"
              discreption=" specializes in Pipeline Crossing Analysis using analytical
                    models to protect"
              closingImage={img1}
            />
            <Portfoliocard
              bgcolor="linear-gradient(68deg, #2D488E 0%, rgba(217, 217, 217, 0.00) 100%)"
              bgimage={approplatebg}
              src={aproplateLogo}
              heading="APROPLAT"
              work="Web Development"
              discreption=" specializes in Pipeline Crossing Analysis using analytical
                    models to protect"
              closingImage={approplateSlide}
            />
            <Portfoliocard
              bgcolor="linear-gradient(64deg, #1A1C1C 0%, rgba(217, 217, 217, 0.00) 100%)"
              bgimage={deltaTechbg}
              src={deltaTechLogo}
              heading="DeltaTechStore"
              work="Ecommerce Development"
              discreption=" specializes in Pipeline Crossing Analysis using analytical
                    models to protect"
              closingImage={deltaTech}
            />
            <Portfoliocard
              bgcolor="linear-gradient(57deg, #D7B53D 0%, rgba(217, 217, 217, 0.00) 88.50%)"
              bgimage={Bncablesbg}
              src={BncablesLogo}
              heading="BNcables"
              work="Search Engine Optimization"
              discreption=" specializes in Pipeline Crossing Analysis using analytical
                    models to protect"
              closingImage={BncablesSlide}
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
