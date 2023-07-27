import React, { useEffect, useState } from "react";
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
import { SecondaryButton } from "src/components/Button.styles";
import { FiArrowDown } from "react-icons/fi";
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
  const [card, setCard] = useState(4);
  const [btn, setBtn] = useState(1);
  const handelWeb = (ind) => {
    setBtn(ind);
    if (ind === 1) {
      setData(PortfolioData);
    } else if (ind === 2) {
      setCard(3);
      const WebProject = PortfolioData.filter((elem) =>
        elem.tag.includes("web-development")
      );

      setData(WebProject);
    } else if (ind === 3) {
      setCard(2);

      setData(PortfolioData);
      const WebProject = PortfolioData.filter((elem) =>
        elem.tag.includes("mobile-development")
      );

      setData(WebProject);
    } else if (ind === 4) {
      setCard(4);

      const DigitalProject = PortfolioData.filter((elem) =>
        elem.tag.includes("digital-marketing")
      );
      setData(DigitalProject);
    }
  };
  const color = "linear-gradient(97.77deg, #1fabd3 0.78%, #1ccc97 77.81%)";
  return (
    <StyledPortfolio>
      <PortfolioWrapper>
        <h1>Our Success Stories</h1>

        <PortFolioButton>
          <SecondaryButton
            bg={btn == 1 ? color : "#fff"}
            bgText={btn == 1 ? "#fff" : color}
            bgTextH="#fff"
            radius="7px"
            shadow="0px 0px 11px 0px rgba(0, 0, 0, 0.17)"
            shadowH="0px 0px 11px 0px rgba(0, 0, 0, 0.17)"
            width="280"
            minWidth="350"
            height="70"
            minheight="40"
            size="22"
            minsize="16"
            hover=""
            onClick={() => handelWeb(1)}
          >
            <label>Featured</label>
          </SecondaryButton>
          <SecondaryButton
            bg={btn == 2 ? color : "#fff"}
            bgText={btn == 2 ? "#fff" : color}
            bgTextH="#fff"
            hover=""
            width="280"
            minWidth="350"
            height="70"
            minheight="40"
            radius="7px"
            shadow="0px 0px 11px 0px rgba(0, 0, 0, 0.17)"
            shadowH="0px 0px 11px 0px rgba(0, 0, 0, 0.17)"
            size="22"
            minsize="16"
            onClick={() => handelWeb(2)}
          >
            <label>Web Development</label>
          </SecondaryButton>
          <SecondaryButton
            bg={btn == 3 ? color : "#fff"}
            bgText={btn == 3 ? "#fff" : color}
            bgTextH="#fff"
            hover=""
            width="280"
            minWidth="350"
            height="70"
            minheight="40"
            radius="7px"
            shadow="0px 0px 11px 0px rgba(0, 0, 0, 0.17)"
            shadowH="0px 0px 11px 0px rgba(0, 0, 0, 0.17)"
            size="22"
            minsize="16"
            onClick={() => handelWeb(3)}
          >
            <label>Mobile Development</label>
          </SecondaryButton>
          <SecondaryButton
            bg={btn == 4 ? color : "#fff"}
            bgText={btn == 4 ? "#fff" : color}
            bgTextH="#fff"
            hover=""
            radius="7px"
            shadow="0px 0px 11px 0px rgba(0, 0, 0, 0.17)"
            shadowH="0px 0px 11px 0px rgba(0, 0, 0, 0.17)"
            width="280"
            minWidth="350"
            height="70"
            minheight="40"
            size="22"
            minsize="16"
            onClick={() => handelWeb(4)}
          >
            <label>Digital Marking</label>
          </SecondaryButton>
        </PortFolioButton>
        {/* {!isTablet ? ( */}
        <PortfolioList>
          {data.slice(0, card).map((elem, ind) => (
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
        <div className="LoadButoon">
          <PrimaryButton
            width="140"
            height="50"
            minheight="40"
            bg="#fff"
            color="#28B781"
            size="16"
            onClick={() => setCard(card + 2)}
          >
            Load more <FiArrowDown size="18" />
          </PrimaryButton>
        </div>

        {/* ) : ( */}
        {/* <PortfolioSlider /> */}
        {/* )} */}
      </PortfolioWrapper>
    </StyledPortfolio>
  );
};

export default Portfolio;
