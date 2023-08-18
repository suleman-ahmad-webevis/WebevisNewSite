import React from "react";
import { PrimaryButton } from "src/components/Button.styles";
import Image from "next/image";
import {
  Card,
  Head,
  ImageHolder,
  Languages,
  SliderHolder,
  Talent,
} from "./Talentcard.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Icon from "../../../assets/images/HireDeveloper/Talent-icon.png";
import Modal from "src/components/Modal/Modal";
import DeveloperModals from "src/components/ExpertPool/Home/DeveloperModals";
import { useState } from "react";
const TalentCard = ({ arr, type }) => {
  const [modal, setModal] = useState(false);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          centerPadding: "100px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: "15px",
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <SliderHolder>
      <Modal
        open={modal}
        setOpen={setModal}
        bg="#fff"
        radius="25px"
        width="1340px"
        desktopTop="9px"
        desktopRight="10px"
        MobileTop="9px"
        MobileRight="10px"
        svgColor="black"
        child={<DeveloperModals type={type} />}
      />
      <Slider {...settings}>
        {arr.map((item, ind) => (
          <div key={ind} className="slide">
            <Talent>
              <Head>
                <h3>{item.title}</h3>
              </Head>
              <div className="icon-holder">
                <ImageHolder bgColor={item.bgColor}>
                  <Image src={item.image} alt="Developer" />
                </ImageHolder>
                <div>
                  <Image src={Icon} alt="icon" />
                </div>
              </div>

              <Card>
                <div>
                  <h2>{item.name}</h2>
                  <h4>{item.designation}</h4>
                  <p>{item.experience}</p>
                  <Languages>
                    {item.language.map((item) => (
                      <span key={ind}>{item}</span>
                    ))}
                  </Languages>
                  <PrimaryButton
                    width="155"
                    height="40"
                    onClick={() => setModal(true)}
                  >
                    Hire Me
                  </PrimaryButton>
                </div>
              </Card>
            </Talent>
          </div>
        ))}
      </Slider>
    </SliderHolder>
  );
};

export default TalentCard;
