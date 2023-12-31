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
import { developerData, talentData } from "../components/PagesData/reactData";
import ConfidenceImg from "../assets/images/HireDeveloper/Confidence-Img.png";
import { reactHire } from "src/components/ExpertPool/HireDedicated/HireData";
import { reactPool } from "src/components/HireDeveloper/TalentPool/TalentPoolData";
import { reactQuality } from "src/components/HireDeveloper/Qualtity/QualityData";
import { reactConfidence } from "src/components/HireDeveloper/Confidence/ConfidenceData";
import { reactQuestionData } from "src/components/HireDeveloper/Question/QuestionData";

const hireDeveloper = () => {
  return (
    <div>
      <Layout>
        <HireHero
          heading1="Recruit A Top-Tier"
          heading2="ReactJS Developer"
          heading3="In Just 24 Hours"
          developerData={developerData}
          type="React Js Developer"
          Button="Hire A ReactJS Developer Now!"
        />
        <Trusted bg="rgba(241, 241, 241, 1)" margin="0px" />
        <Hire
          data={reactHire}
          heading={
            "Hire Dedicated ReactJS Developers With Webevis In Just 3 Steps"
          }
          marginTop="100"
          marginBottom="100"
        />
        <TalentPool
          data={reactPool}
          heading="Why Webevis ReactJS Developers"
          talentData={talentData}
          type="React Js Developer"
        />
        <Quality
          heading="Our React Development Services"
          discreption="Elevate your digital presence with our comprehensive ReactJS services designed to empower your web applications with dynamic, responsive, and user-friendly interfaces. Our team of experienced React developers is committed to delivering exceptional solutions that meet your unique business goals and user experience requirements."
          data={reactQuality}
        />
        <Developers
          button="Request a Consultation Now!"
          heading="Are You Looking For Exceptional React Development For Your Projects?"
          text="Our experts are ready to craft tailored solutions that bring your vision to life. Let's collaborate to create dynamic and engaging web experiences that make an impact."
        />
        <Confidence
          ConfidenceImg={ConfidenceImg}
          imgWidth="487px"
          contentWidth="50%"
          textWidth="476px"
          paddingRight="20px"
          paddingLeft="20px"
          heading="Streamline Your Hiring Process"
          text="When you partner with Webevis, you are not just hiring developers but building a team poised for success. Experience a recruitment process designed to eliminate hurdles and give you the confidence to make the right hiring decisions."
          data={reactConfidence}
        />
        <Client />
        <TodayTalent type="React Js Developer" />
        <Question
          heading="Everything You Need to Know About Hiring ReactJS Developers"
          detail="ReactJS, developed by Facebook, is an influential open-source JavaScript library renowned for crafting seamless user interfaces and web applications. Its component-based approach and virtual DOM implementation optimize performance and offer developers unparalleled flexibility in creating dynamic, modern digital experiences."
          data={reactQuestionData}
        />
      </Layout>
    </div>
  );
};

export default hireDeveloper;
