import React from "react";
import { Platform, PlatformHolder } from "./Platforms.styles";
import { ContainerWrapper } from "src/components/Container.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import SlidePic1 from "../../../assets/images/SeoExpert//Slide-Pic1.png";
import SlidePic2 from "../../../assets/images/SeoExpert//Slide-Pic2.png";
import SlidePic3 from "../../../assets/images/SeoExpert//Slide-Pic3.png";
import SlidePic4 from "../../../assets/images/SeoExpert//Slide-Pic4.png";
import Slider from "react-slick";
const Platforms = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <PlatformHolder>
      <ContainerWrapper>
        <Platform>
          <div>
            <h2>Tools and Platforms</h2>
            <p>
              Were generated in sales by our marketers for our customers in 2021
              What your Webevis experts use to help you grow
            </p>
          </div>
          <Slider {...settings}>
            <div className="img-holder">
              <Image src={SlidePic1} alt="SlidePic1" />
            </div>
            <div className="img-holder">
              <Image src={SlidePic2} alt="SlidePic1" />
            </div>
            <div className="img-holder">
              <Image src={SlidePic3} alt="SlidePic1" />
            </div>
            <div className="img-holder">
              <Image src={SlidePic4} alt="SlidePic1" />
            </div>
            <div className="img-holder">
              <Image src={SlidePic1} alt="SlidePic1" />
            </div>
            <div className="img-holder">
              <Image src={SlidePic2} alt="SlidePic1" />
            </div>
            <div className="img-holder">
              <Image src={SlidePic3} alt="SlidePic1" />
            </div>
            <div className="img-holder">
              <Image src={SlidePic4} alt="SlidePic1" />
            </div>
          </Slider>
        </Platform>
      </ContainerWrapper>
    </PlatformHolder>
  );
};

export default Platforms;
