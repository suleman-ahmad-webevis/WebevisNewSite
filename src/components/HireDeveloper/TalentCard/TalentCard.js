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
import Employe1 from "../../../assets/images/HireDeveloper/Talent-Pool/Employe1.png";
import Employe2 from "../../../assets/images/HireDeveloper/Talent-Pool/Employe2.png";
import Employe3 from "../../../assets/images/HireDeveloper/Talent-Pool/Employe3.png";
import Employe4 from "../../../assets/images/HireDeveloper/Talent-Pool/Employe4.png";
import Employe5 from "../../../assets/images/HireDeveloper/Talent-Pool/Employe5.png";
import Employe6 from "../../../assets/images/HireDeveloper/Talent-Pool/Employe6.png";
import Employe7 from "../../../assets/images/HireDeveloper/Talent-Pool/Employe7.png";
import Employe8 from "../../../assets/images/HireDeveloper/Talent-Pool/Employe8.png";
import Employe9 from "../../../assets/images/HireDeveloper/Talent-Pool/Employe9.png";
import Employe10 from "../../../assets/images/HireDeveloper/Talent-Pool/Employe10.png";
import Employe11 from "../../../assets/images/HireDeveloper/Talent-Pool/Employe11.png";
// import Employe12 from "../../../assets/images/H ireDeveloper/Talent-Pool/Employe12.png";
// import Employe13 from "../../../assets/images/H ireDeveloper/Talent-Pool/Employe13.png";

export const talentData = [
  {
    id: 1,
    title: "Available in Week",
    image: Employe1,
    bgColor: "#DBE8FE",
    name: "Hamza",
    designation: "Full-Stack Developer",
    experience: "5 Year Experience",
    language: ["React Js", "JavaScript", "Express. Js", "Node. Js", "Redux"],
  },
  {
    id: 1,
    title: "Available in Week",
    image: Employe2,
    bgColor: "#D4E1F9;",
    name: "Awais",
    designation: "Frontend Developer",
    experience: "5 Year Experience",
    language: ["React Js", "JavaScript", "Express. Js", "Node. Js", "Redux"],
  },
  {
    id: 1,
    title: "Available in Week",
    image: Employe3,
    bgColor: "#A1B2FF;",
    name: "Rabia",
    designation: "Frontend Developer",
    experience: "5 Year Experience",
    language: ["React Js", "JavaScript", "Express. Js", "Node. Js", "Redux"],
  },
  {
    id: 1,
    title: "Available in Week",
    image: Employe4,
    bgColor: "#8BE3FF",
    name: "Shahid",
    designation: "Mern-Stack Developer",
    experience: "5 Year Experience",
    language: ["React Js", "JavaScript", "Express. Js", "Node. Js", "Redux"],
  },
  {
    id: 1,
    title: "Available in Week",
    image: Employe5,
    bgColor: "#FFBCC0",
    name: "Waleed",
    designation: "Full-Stack Developer",
    experience: "5 Year Experience",
    language: ["React Js", "JavaScript", "Express. Js", "Node. Js", "Redux"],
  },
  {
    id: 1,
    title: "Available in Week",
    image: Employe6,
    bgColor: "#A1B2FF",
    name: "Atif",
    designation: "Frontend Developer",
    experience: "5 Year Experience",
    language: ["React Js", "JavaScript", "Express. Js", "Node. Js", "Redux"],
  },
  {
    id: 1,
    title: "Available in Week",
    image: Employe7,
    bgColor: "#F1F0EE",
    name: "GM",
    designation: "Frontend Developer",
    experience: "5 Year Experience",
    language: ["React Js", "JavaScript", "Express. Js", "Node. Js", "Redux"],
  },
  {
    id: 1,
    title: "Available in Week",
    image: Employe8,
    bgColor: "#BED9FF",
    name: "Sami",
    designation: "Frontend Developer",
    experience: "5 Year Experience",
    language: ["React Js", "JavaScript", "Express. Js", "Node. Js", "Redux"],
  },
  {
    id: 1,
    title: "Available in Week",
    image: Employe9,
    bgColor: "#E5E3E5",
    name: "Shoaib",
    designation: "Frontend Developer",
    experience: "5 Year Experience",
    language: ["React Js", "JavaScript", "Express. Js", "Node. Js", "Redux"],
  },
  {
    id: 1,
    title: "Available in Week",
    image: Employe10,
    bgColor: "#FBF9FF",
    name: "Sajiha",
    designation: "Frontend Developer",
    experience: "5 Year Experience",
    language: ["React Js", "JavaScript", "Express. Js", "Node. Js", "Redux"],
  },
  {
    id: 1,
    title: "Available in Week",
    image: Employe11,
    bgColor: "#7A7F8D",
    name: "Suleman",
    designation: "Frontend Developer",
    experience: "5 Year Experience",
    language: ["React Js", "JavaScript", "Express. Js", "Node. Js", "Redux"],
  },
  // {
  //   id: 1,
  //   title: "Available in Week",
  //   image: Employe12,
  //   bgColor: "#A1B2FF",
  //   name: "Ahmed",
  //   designation: "Frontend Developer",
  //   experience: "5 Year Experience",
  //   language: ["React Js", "JavaScript", "Express. Js", "Node. Js", "Redux"],
  // },
  // {
  //   id: 1,
  //   title: "Available in Week",
  //   image: Employe13,
  //   bgColor: "#F1DDDD",
  //   name: "Ahmed",
  //   designation: "Frontend Developer",
  //   experience: "5 Year Experience",
  //   language: ["React Js", "JavaScript", "Express. Js", "Node. Js", "Redux"],
  // },
];

const TalentCard = (bgColor) => {
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
      <Slider {...settings}>
        {talentData.map((item, ind) => (
          <div key={ind} className="slide">
            <Talent>
              <Head>
                <h3>{item.title}</h3>
              </Head>
              <ImageHolder bgColor={item.bgColor}>
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
