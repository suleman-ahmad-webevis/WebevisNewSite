import React from "react";
import TalentPic from "../../../assets/images/HireDeveloper/Talent-Pic.png";
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

export const talentData = [
  {
    id: 1,
    title: "Available in Week",
    image: TalentPic,
    name: "Shahid",
    designation: "Full-Stack Developer",
    experience: "5 Year Experience",
    language: ["React Js", "JavaScript", "Express. Js", "Node. Js", "Redux"],
  },
  {
    id: 1,
    title: "Available in Week",
    image: TalentPic,
    name: "Atif",
    designation: "Frontend Developer",
    experience: "5 Year Experience",
    language: ["React Js", "JavaScript", "Express. Js", "Node. Js", "Redux"],
  },
  {
    id: 1,
    title: "Available in Week",
    image: TalentPic,
    name: "Hamza",
    designation: "Frontend Developer",
    experience: "5 Year Experience",
    language: ["React Js", "JavaScript", "Express. Js", "Node. Js", "Redux"],
  },
  {
    id: 1,
    title: "Available in Week",
    image: TalentPic,
    name: "Suleman",
    designation: "Mern-Stack Developer",
    experience: "5 Year Experience",
    language: ["React Js", "JavaScript", "Express. Js", "Node. Js", "Redux"],
  },
  {
    id: 1,
    title: "Available in Week",
    image: TalentPic,
    name: "Ghulam",
    designation: "Full-Stack Developer",
    experience: "5 Year Experience",
    language: ["React Js", "JavaScript", "Express. Js", "Node. Js", "Redux"],
  },
  {
    id: 1,
    title: "Available in Week",
    image: TalentPic,
    name: "Ahmed",
    designation: "Frontend Developer",
    experience: "5 Year Experience",
    language: ["React Js", "JavaScript", "Express. Js", "Node. Js", "Redux"],
  },
];

const TalentCard = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
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
      <Slider {...settings}>
        {talentData.map((item, ind) => (
          <div key={ind} className="slide">
            <Talent>
              <Head>
                <h3>{item.title}</h3>
              </Head>
              <ImageHolder>
                <Image src={item.image} alt="Developer" />
              </ImageHolder>
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
                  <PrimaryButton width="155" height="40">
                    Hire Me
                  </PrimaryButton>
                </div>
                <div>
                  <Image src={Icon} alt="icon" />
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
