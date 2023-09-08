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
import ConfidenceImg from "../assets/images/HireDeveloper/Confidence-Img.png";
import {
  developerData,
  talentData,
} from "../components/PagesData/reactNativeData";
import { reactNativeHire } from "src/components/ExpertPool/HireDedicated/HireData";
import { reactNativePool } from "src/components/HireDeveloper/TalentPool/TalentPoolData";
import { nativeQuality } from "src/components/HireDeveloper/Qualtity/QualityData";
import { nativeConfidence } from "src/components/HireDeveloper/Confidence/ConfidenceData";

const hireDeveloper = () => {
  return (
    <div>
      <Layout>
        <HireHero
          heading1="Hire A Dream "
          heading2="React Native Developer"
          heading3="Within A Day"
          developerData={developerData}
          type="React Native Developer"
          detail="Tailored to your unique requirements, our skilled React Native developers craft customized solutions that align perfectly with your app's goals."
          Button="Hire A React Native Developer!"
        />
        <Trusted bg="rgba(241, 241, 241, 1)" margin="0px" />
        <Hire
          heading={"3 Steps To Hiring React Native Developers With Webevis"}
          marginTop="100"
          marginBottom="100"
          data={reactNativeHire}
        />
        <TalentPool
          heading="Our React Native Talent Pool"
          talentData={talentData}
          type="React Native Developer"
          data={reactNativePool}
        />
        <Quality
          heading="Our React Native Development Services"
          discreption="Our comprehensive suite of React Native services is designed to meet your unique mobile app development needs. We are committed to delivering high-quality, cross-platform solutions that drive success and user satisfaction."
          data={nativeQuality}
        />
        <Developers
          heading="Looking For Top-Notch React Native Developers To Build Cross-Platform Apps?"
          text="Our experienced team is ready to collaborate with you, turning your ideas into remarkable mobile applications efficiently, cost-effectively, and with unwavering quality. "
          button="Request a Free Consultation!"
        />
        <Confidence
          ConfidenceImg={ConfidenceImg}
          imgWidth="487px"
          contentWidth="50%"
          textWidth="476px"
          paddingRight="20px"
          paddingLeft="20px"
          heading="Your Trusted Developer Source"
          text="You can trust us when you need expert developers. Enjoy a seamless recruitment journey tailored to your needs, free from the complexities and uncertainties often associated with traditional hiring."
          data={nativeConfidence}
        />
        <Client />
        <TodayTalent
          type="React Native Developer"
          title="Innovate with Our Expertise Today!"
          text="We offer the expertise, creativity, and resources you need to innovate and excel in the mobile app world."
          button="Start With Us Now"
        />
        <Question />
      </Layout>
    </div>
  );
};

export default hireDeveloper;
