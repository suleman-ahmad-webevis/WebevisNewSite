import React from "react";
import { Container } from "src/components/Container.styles";
import { Heading, Hero, Hire, ImageHolder } from "./HireHero.styles";
import { PrimaryButton } from "src/components/Button.styles";
import DeveloperSlider from "../DeveloperSlider/DeveloperSlider";
import Shahid from "../../../assets/images/HireDeveloper/Shahid.png";
import Sajiha from "../../../assets/images/HireDeveloper/Sajiha.png";
import GM from "../../../assets/images/HireDeveloper/GM.png";
import Suleman from "../../../assets/images/HireDeveloper/Suleman.png";
import Rabia from "../../../assets/images/HireDeveloper/Rabia.png";
import Atif from "../../../assets/images/HireDeveloper/Atif.png";
import Moiz from "../../../assets/images/HireDeveloper/Moiz.png";
import Sami from "../../../assets/images/HireDeveloper/Sami.png";
import Hamza from "../../../assets/images/HireDeveloper/Hamza.png";
import Shaoib from "../../../assets/images/HireDeveloper/Shoaib.png";
import Ulfat from "../../../assets/images/HireDeveloper/Ulfat.png";
import Awais from "../../../assets/images/HireDeveloper/Awais.png";
import Waleed from "../../../assets/images/HireDeveloper/Waleed.png";
import Salim from "../../../assets/images/HireDeveloper/salim.png";
const developerData = [
  {
    title: "Your Ideal Candidate Profile",
    technology: ["React", "Node Js", ".Net"],
    fintech: "Finetech Experience",
    independence: "Independence ",
    image: Shahid,
  },
  {
    title: "Your Ideal Candidate Profile",
    technology: ["React", "Node Js", ".Net"],
    fintech: "Finetech Experience",
    independence: "Independence ",
    image: Sajiha,
  },
  {
    title: "Your Ideal Candidate Profile",
    technology: ["React", "Node Js", ".Net"],
    fintech: "Finetech Experience",
    independence: "Independence ",
    image: GM,
  },
  {
    title: "Your Ideal Candidate Profile",
    technology: ["React", "Node Js", ".Net"],
    fintech: "Finetech Experience",
    independence: "Independence ",
    image: Atif,
  },
  {
    title: "Your Ideal Candidate Profile",
    technology: ["React", "Node Js", ".Net"],
    fintech: "Finetech Experience",
    independence: "Independence ",
    image: Suleman,
  },
  {
    title: "Your Ideal Candidate Profile",
    technology: ["React", "Node Js", ".Net"],
    fintech: "Finetech Experience",
    independence: "Independence ",
    image: Rabia,
  },
  {
    title: "Your Ideal Candidate Profile",
    technology: ["React", "Node Js", ".Net"],
    fintech: "Finetech Experience",
    independence: "Independence ",
    image: Moiz,
  },
  {
    title: "Your Ideal Candidate Profile",
    technology: ["React", "Node Js", ".Net"],
    fintech: "Finetech Experience",
    independence: "Independence ",
    image: Sami,
  },
  {
    title: "Your Ideal Candidate Profile",
    technology: ["React", "Node Js", ".Net"],
    fintech: "Finetech Experience",
    independence: "Independence ",
    image: Hamza,
  },
  {
    title: "Your Ideal Candidate Profile",
    technology: ["React", "Node Js", ".Net"],
    fintech: "Finetech Experience",
    independence: "Independence ",
    image: Shaoib,
  },
  {
    title: "Your Ideal Candidate Profile",
    technology: ["React", "Node Js", ".Net"],
    fintech: "Finetech Experience",
    independence: "Independence ",
    image: Ulfat,
  },
  {
    title: "Your Ideal Candidate Profile",
    technology: ["React", "Node Js", ".Net"],
    fintech: "Finetech Experience",
    independence: "Independence ",
    image: Awais,
  },
  {
    title: "Your Ideal Candidate Profile",
    technology: ["React", "Node Js", ".Net"],
    fintech: "Finetech Experience",
    independence: "Independence ",
    image: Waleed,
  },
  {
    title: "Your Ideal Candidate Profile",
    technology: ["React", "Node Js", ".Net"],
    fintech: "Finetech Experience",
    independence: "Independence ",
    image: Salim,
  },
];
const HireHero = () => {
  return (
    <Hire>
      <Container>
        <Hero>
          <Heading>
            <h1>
              Hire The Best Remote <span>Freelance Developers </span>
              in 24 Hours
            </h1>
            <p>
              Hire top software developers and engineers on-demand. From Java,
              .Net, Python, and C++ to Node.js and React, our experts are always
              ready to go.
            </p>
            <PrimaryButton
              width="190"
              height="50"
              minWidth="170"
              minHeight="40"
            >
              Hire a Developer
            </PrimaryButton>
          </Heading>
          <ImageHolder>
            <DeveloperSlider arr={developerData} />
          </ImageHolder>
        </Hero>
      </Container>
    </Hire>
  );
};

export default HireHero;
