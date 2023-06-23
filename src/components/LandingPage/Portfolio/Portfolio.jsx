import React from "react";
import {
  Button,
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

const Portfolio = () => {
  return (
    <StyledPortfolio>
      <PortfolioWrapper>
        <h1>Our Dedicated Work Portfolio</h1>
        <PortFolioButton>
          <Button maxWidth="312" minWidth="350">
            <p>Featured</p>
          </Button>
          <Button maxWidth="312" minWidth="350">
            <p>Design & Development</p>
          </Button>
          <Button maxWidth="312" minWidth="350">
            <p>Digital Marking</p>
          </Button>
        </PortFolioButton>
        <PortfolioList>
          <Portfoliocard
            bgcolor="linear-gradient(81deg, #BD7347 -11.32%, rgba(217, 217, 217, 0) 74.67%)"
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
        <PortfolioSlider />
      </PortfolioWrapper>
    </StyledPortfolio>
  );
};

export default Portfolio;
