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
import { developerData, talentData } from "src/components/PagesData/javaData";
import ConfidenceImg from "../assets/images/HireDeveloper/Confidence-Img.png";
import { javaHire } from "src/components/ExpertPool/HireDedicated/HireData";
import { javaPool } from "src/components/HireDeveloper/TalentPool/TalentPoolData";
import { javaQuality } from "src/components/HireDeveloper/Qualtity/QualityData";
import { javaConfidence } from "src/components/HireDeveloper/Confidence/ConfidenceData";
const hireDeveloper = () => {
  return (
    <div>
      <Layout>
        <HireHero
          heading1="Recruit The Best"
          heading2="Java Developer"
          heading3="In Just 24 Hours"
          developerData={developerData}
          type="Java Developer"
          detail="Whether web, mobile, or enterprise applications, our Java developers are catalysts for innovation, crafting cutting-edge applications and driving your business into the future."
          Button="Hire A Java Developer Now"
        />
        <Trusted bg="rgba(241, 241, 241, 1)" margin="0px" />
        <Hire
          heading={"3 Steps To Hire A Dedicated Java Developer With Webevis"}
          marginTop="100"
          marginBottom="100"
          data={javaHire}
        />
        <TalentPool
          heading="Our Java Talent Pool"
          talentData={talentData}
          type="Java Developer"
          data={javaPool}
        />
        <Quality
          heading="Our Java Development Services"
          discreption="With our array of Java services, we are committed to helping you harness the full potential of this versatile language to achieve your business objectives. We combine technical excellence with industry-specific expertise to deliver tailored solutions that drive your business forward."
          data={javaQuality}
        />
        <Developers
          heading="Ready To Boost Your Project With Skilled Java Developers?"
          text="Our expert developers adapt to your project's evolving needs and provide flexibility, tailored solutions, deep knowledge, and a commitment to excellence."
        />
        <Confidence
          ConfidenceImg={ConfidenceImg}
          imgWidth="487px"
          contentWidth="50%"
          textWidth="476px"
          paddingRight="20px"
          paddingLeft="20px"
          heading="Your Developer, Your Choice"
          text="We tailor the hiring process to meet your unique needs. Our streamlined process ensures you get the right talent hassle-free, saving you time and effort so you can focus on your project's success."
          data={javaConfidence}
        />
        <Client />
        <TodayTalent
          type="Java Developer"
          title="Power Your Projects With Java Today!"
          text="We offer full-stack capabilities, quality assurance, and a focus on exceeding your expectations every step of the way."
          button="Connect With Top Talent"
        />
        <Question />
      </Layout>
    </div>
  );
};

export default hireDeveloper;
