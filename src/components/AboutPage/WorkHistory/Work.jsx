import React from "react";
import { ContainerWrapper } from "src/components/Container.styles";
import { StyledWorkHistory, TeamSlider, WorkText } from "./WorkHistory.styles";
import WorkProgress from "./WorkProgress";
import img1 from "../../../../public/assets/images/slide1.png";
import img2 from "../../../../public/assets/images/slide2.jpg";
import img3 from "../../../assets/images/AboutUs/image1.jpg";
import img4 from "../../../assets/images/AboutUs/image2.jpg";
import img5 from "../../../assets/images/AboutUs/image3.jpg";
import img6 from "../../../assets/images/AboutUs/image4.jpg";
import Slider from "react-slick";
import Image from "next/image";
var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,

  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};
const Work = () => {
  return (
    <ContainerWrapper>
      <StyledWorkHistory>
        <WorkText>
          <h3>OUR SUCCESSFUL WORK</h3>
          <h2>
            Advancements and New Insights are<span> Precisely</span>
          </h2>
          <h4>
            Dedication to adopting the latest technological solutions enables us
            to understand the needs of entrepreneurs and corporations whose core
            business.
          </h4>
          <WorkProgress />
        </WorkText>
        <TeamSlider>
          <div>
            <Slider {...settings}>
              <div className="box">
                <Image src={img1} alt="img1" />
              </div>
              <div className="box">
                <Image src={img3} alt="img1" />
              </div>
              <div className="box">
                <Image src={img4} alt="img1" />
              </div>
              <div className="box">
                <Image src={img5} alt="img1" />
              </div>
              <div className="box">
                <Image src={img6} alt="img1" />
              </div>
            </Slider>
          </div>
        </TeamSlider>
      </StyledWorkHistory>
    </ContainerWrapper>
  );
};

export default Work;
