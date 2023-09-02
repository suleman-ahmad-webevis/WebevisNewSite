import React from "react";
import { ContainerWrapper } from "src/components/Container.styles";
import { StyledWorkHistory, TeamSlider, WorkText } from "./WorkHistory.styles";
import WorkProgress from "./WorkProgress";
import img3 from "../../../../public/assets/images/AboutUs/image1.jpg";
import img4 from "../../../../public/assets/images/AboutUs/image2.jpg";
import img5 from "../../../../public/assets/images/AboutUs/image3.jpg";
import img6 from "../../../../public/assets/images/AboutUs/image4.jpg";
import Slider from "react-slick";
import Image from "next/image";
var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  // autoplay: true,

  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};
const Work = () => {
  return (
    <ContainerWrapper>
      <StyledWorkHistory>
        <WorkText>
          <h3>The Secrets of Success</h3>
          <h2>
            Advancement and Cutting-Edge Insights
            <span> Combined</span>
          </h2>
          <h4>
            Our work is fueled by the combination of progress and cutting-edge
            knowledge, driving transformative solutions and breakthrough
            outcomes.
          </h4>
          <WorkProgress />
        </WorkText>
        <TeamSlider>
          <Slider {...settings}>
            <div className="box">
              <Image src={img6} alt="img1" />
            </div>
            <div className="box">
              <Image src={img3} alt="img1" />
            </div>

            <div className="box">
              <Image src={img5} alt="img1" />
            </div>
            <div className="box">
              <Image src={img4} alt="img1" />
            </div>
          </Slider>
        </TeamSlider>
      </StyledWorkHistory>
    </ContainerWrapper>
  );
};

export default Work;
