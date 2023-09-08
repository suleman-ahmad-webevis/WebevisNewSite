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
import { developerData, talentData } from "../components/PagesData/swiftData";
import ConfidenceImg from "../assets/images/HireDeveloper/Confidence-Img.png";
import { swiftHire } from "src/components/ExpertPool/HireDedicated/HireData";
import { swiftPool } from "src/components/HireDeveloper/TalentPool/TalentPoolData";
import { swiftQuality } from "src/components/HireDeveloper/Qualtity/QualityData";
import { swiftConfidence } from "src/components/HireDeveloper/Confidence/ConfidenceData";

const hireDeveloper = () => {
  return (
    <div>
      <Layout>
        <HireHero
          heading1="Hire A Versatile"
          heading2="Swift Developer"
          heading3="In Just 24 Hours"
          developerData={developerData}
          type="Swift Developer"
          detail="Achieve excellence in app development with talented Swift developers. Our team provides the expertise and creativity to create unique, engaging, and feature-rich applications."
          Button="Hire A Swift Developer Now"
        />
        <Trusted bg="rgba(241, 241, 241, 1)" margin="0px" />
        <Hire
          heading={"3 Steps To Hire A Dedicated Swift Developer With Webevis"}
          marginTop="100"
          marginBottom="100"
          data={swiftHire}
        />
        <TalentPool
          heading="Our Swift Talent Pool"
          talentData={talentData}
          type="Swift Developer"
          data={swiftPool}
        />
        <Quality
          heading="Our Swift Development Services"
          discreption="We offer a comprehensive suite of Swift development services tailored to your unique project requirements. Our team of seasoned Swift developers is committed to delivering top-notch solutions that exceed your expectations."
          data={swiftQuality}
        />
        <Developers
          heading="Looking For Skilled Swift Developers To Build Your iOS Dreams?"
          text="Our Swift developers pay meticulous attention to detail, guaranteeing bug-free, top-notch iOS and macOS applications."
          button="Request a Free Consultation!"
        />
        <Confidence
          ConfidenceImg={ConfidenceImg}
          imgWidth="487px"
          contentWidth="50%"
          textWidth="476px"
          paddingRight="20px"
          paddingLeft="20px"
          heading="Hire With Ease"
          text="We customize the hiring process to meet your specific requirements. With our simplified process, you can focus on the success of your project while getting the right talent without any hassle."
          data={swiftConfidence}
        />
        <Client />
        <TodayTalent
          type="Swift Developer"
          title="Innovate With Swift Developers!"
          text="We bring proficiency, efficiency, and excellence to every development endeavor."
          button="Unlock Swift Talent"
        />
        <Question />
      </Layout>
    </div>
  );
};

export default hireDeveloper;
