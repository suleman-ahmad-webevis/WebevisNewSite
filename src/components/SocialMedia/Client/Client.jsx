import React from "react";
import { Container } from "src/components/Container.styles";
import {
  MarqueHolder,
  SliderContainer,
  SliderImage,
  SliderWrapper,
  Trust,
} from "./Client.styles";
import Ts from "../../../assets/images/Trusted/Ts.png";
import MA from "../../../assets/images/Trusted/MA.png";
import Delta from "../../../assets/images/Trusted/Delta.png";
import Paragon from "../../../assets/images/Trusted/Paragon.png";
import Meat from "../../../assets/images/Trusted/Meat.png";
import Food from "../../../assets/images/Trusted/Food.png";
import vstar from "../../../assets/images/HireDeveloper/Quality/vstar.svg";
import poet from "../../../assets/images/HireDeveloper/Quality/poet.svg";
import gfp from "../../../assets/images/HireDeveloper/Quality/gfp.svg";
import toddlers from "../../../assets/images/HireDeveloper/Quality/toddlers.svg";
import builders from "../../../assets/images/HireDeveloper/Quality/builders.svg";
import immigrantly from "../../../assets/images/HireDeveloper/Quality/immigrantly.svg";
import mrPotato from "../../../assets/images/HireDeveloper/Quality/mrPotato.svg";
import aproplat from "../../../assets/images/HireDeveloper/Quality/aproplat.svg";
import diningout from "../../../assets/images/HireDeveloper/Quality/diningout.svg";
import arc from "../../../assets/images/HireDeveloper/Quality/arc.svg";
import zia from "../../../assets/images/HireDeveloper/Quality/zia.svg";
import DelMesa from "../../../assets/images/HireDeveloper/Quality/DelMesa.svg";
import bedsore from "../../../assets/images/HireDeveloper/Quality/bedsore.svg";
import cables from "../../../assets/images/HireDeveloper/Quality/cables.svg";

import { Flex } from "src/components/Flex.styles";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import SliderImg from "../../../../public/assets/images/slider-img.png";

const Trusted = ({ bg, margin, ti, tf, shadow }) => {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 5,
    speed: 500,
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    css: "linear",

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <Trust bg={bg} margin={margin} ti={ti} tf={tf} shadow={shadow}>
      <SliderContainer>
        <Flex>
          <Slider {...settings}>
            <SliderWrapper>
              <SliderImage src={Ts} alt="" max="111.95" min="46.35" />
            </SliderWrapper>

            <SliderWrapper>
              <SliderImage src={MA} alt="" max="121.95" min="46.35" />
            </SliderWrapper>
            <SliderWrapper>
              <SliderImage src={DelMesa} alt="" max="121.95" min="46.35" />
            </SliderWrapper>
            <SliderWrapper>
              <SliderImage src={gfp} alt="" max="121.95" min="46.35" />
            </SliderWrapper>
            <SliderWrapper>
              <SliderImage src={immigrantly} alt="" max="121.95" min="46.35" />
            </SliderWrapper>

            {/* <SliderWrapper>
              <SliderImage src={aproplat} alt="" max="111.95" min="46.35" />
            </SliderWrapper> */}

            <SliderWrapper>
              <SliderImage src={cables} alt="" max="216" min="90" />
            </SliderWrapper>

            <SliderWrapper>
              <SliderImage src={Paragon} alt="" max="111.95" min="46.35" />
            </SliderWrapper>
            <SliderWrapper>
              <SliderImage src={zia} alt="" max="111.95" min="46.35" />
            </SliderWrapper>
            <SliderWrapper>
              <SliderImage src={Delta} alt="" max="216" min="90" />
            </SliderWrapper>
            <SliderWrapper>
              <SliderImage src={vstar} alt="" max="111.95" min="46.35" />
            </SliderWrapper>
            <SliderWrapper>
              <SliderImage src={arc} alt="" max="111.95" min="46.35" />
            </SliderWrapper>
            <SliderWrapper>
              <SliderImage src={Meat} alt="" max="137.78" min="50" />
            </SliderWrapper>

            <SliderWrapper>
              <SliderImage src={Food} alt="" max="139.7" min="50" />
            </SliderWrapper>

            <SliderWrapper>
              <SliderImage src={builders} alt="" max="111.95" min="46.35" />
            </SliderWrapper>

            <SliderWrapper>
              <SliderImage src={Ts} alt="" max="111.95" min="46.35" />
            </SliderWrapper>

            <SliderWrapper>
              <SliderImage src={MA} alt="" max="121.95" min="46.35" />
            </SliderWrapper>
            <SliderWrapper>
              <SliderImage src={DelMesa} alt="" max="121.95" min="46.35" />
            </SliderWrapper>
            <SliderWrapper>
              <SliderImage src={gfp} alt="" max="121.95" min="46.35" />
            </SliderWrapper>
            <SliderWrapper>
              <SliderImage src={immigrantly} alt="" max="121.95" min="46.35" />
            </SliderWrapper>

            {/* <SliderWrapper>
              <SliderImage src={aproplat} alt="" max="111.95" min="46.35" />
            </SliderWrapper> */}

            <SliderWrapper>
              <SliderImage src={cables} alt="" max="216" min="90" />
            </SliderWrapper>

            <SliderWrapper>
              <SliderImage src={Paragon} alt="" max="111.95" min="46.35" />
            </SliderWrapper>
            <SliderWrapper>
              <SliderImage src={zia} alt="" max="111.95" min="46.35" />
            </SliderWrapper>
            <SliderWrapper>
              <SliderImage src={Delta} alt="" max="216" min="90" />
            </SliderWrapper>
            <SliderWrapper>
              <SliderImage src={vstar} alt="" max="111.95" min="46.35" />
            </SliderWrapper>
            <SliderWrapper>
              <SliderImage src={arc} alt="" max="111.95" min="46.35" />
            </SliderWrapper>
            <SliderWrapper>
              <SliderImage src={Meat} alt="" max="137.78" min="50" />
            </SliderWrapper>

            <SliderWrapper>
              <SliderImage src={Food} alt="" max="139.7" min="50" />
            </SliderWrapper>

            <SliderWrapper>
              <SliderImage src={builders} alt="" max="111.95" min="46.35" />
            </SliderWrapper>
          </Slider>
        </Flex>
      </SliderContainer>
    </Trust>
  );
};

export default Trusted;
