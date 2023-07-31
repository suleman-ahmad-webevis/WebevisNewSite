import React from "react";
import HireHero from "src/components/HireDeveloper/HireeHero/HireHero";
import Layout from "src/components/Layout/Layout";
import Trusted from "src/components/SocialMedia/Client/Client";
import Hire from "src/components/ExpertPool/HireDedicated/Hire";
import TalentPool from "src/components/HireDeveloper/TalentPool/TalentPool";
import Quality from "src/components/HireDeveloper/Qualtity/Quality";
import Developers from "src/components/HireDeveloper/SkilledDevelopers/Developers";
import Confidence from "src/components/HireDeveloper/Confidence/Confidence";
import Client from "src/components/LandingPage/OurClient/Client";
import TodayTalent from "src/components/HireDeveloper/TodayTalent/TodayTalent";
import Question from "src/components/HireDeveloper/Question/Question";
import Shahid from "../assets/images/HireDeveloper/Shahid.png";
import Sajiha from "../assets/images/HireDeveloper/Sajiha.png";
import GM from "../assets/images/HireDeveloper/GM.png";
import Suleman from "../assets/images/HireDeveloper/Suleman.png";
import Rabia from "../assets/images/HireDeveloper/Rabia.png";
import Atif from "../assets/images/HireDeveloper/Atif.png";
import Moiz from "../assets/images/HireDeveloper/Moiz.png";
import Sami from "../assets/images/HireDeveloper/Sami.png";
import Hamza from "../assets/images/HireDeveloper/Hamza.png";
import Shaoib from "../assets/images/HireDeveloper/Shoaib.png";
import Ulfat from "../assets/images/HireDeveloper/Ulfat.png";
import Awais from "../assets/images/HireDeveloper/Awais.png";
import Waleed from "../assets/images/HireDeveloper/Waleed.png";
import Salim from "../assets/images/HireDeveloper/salim.png";
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
import Employe1 from "../assets/images/HireDeveloper/Talent-Pool/Employe1.png";
import Employe2 from "../assets/images/HireDeveloper/Talent-Pool/Employe2.png";
import Employe3 from "../assets/images/HireDeveloper/Talent-Pool/Employe3.png";
import Employe4 from "../assets/images/HireDeveloper/Talent-Pool/Employe4.png";
import Employe5 from "../assets/images/HireDeveloper/Talent-Pool/Employe5.png";
import Employe6 from "../assets/images/HireDeveloper/Talent-Pool/Employe6.png";
import Employe7 from "../assets/images/HireDeveloper/Talent-Pool/Employe7.png";
import Employe8 from "../assets/images/HireDeveloper/Talent-Pool/Employe8.png";
import Employe9 from "../assets/images/HireDeveloper/Talent-Pool/Employe9.png";
import Employe10 from "../assets/images/HireDeveloper/Talent-Pool/Employe10.png";
import Employe11 from "../assets/images/HireDeveloper/Talent-Pool/Employe11.png";
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
const hireDeveloper = () => {
  return (
    <div>
      <Layout>
        <HireHero
          heading1="Hire The Top-Notch"
          heading2="Laravel Developer"
          heading3="Just in a Day"
          developerData={developerData}
        />
        <Trusted bg="rgba(241, 241, 241, 1)" margin="0px" />
        <Hire
          heading={"Hire remote developers in 3 easy steps with Webevis"}
          marginTop="100"
          marginBottom="100"
        />
        <TalentPool talentData={talentData} />
        <Quality />
        <Developers />
        <Confidence />
        <Client />
        <TodayTalent />
        <Question />
      </Layout>
    </div>
  );
};

export default hireDeveloper;
