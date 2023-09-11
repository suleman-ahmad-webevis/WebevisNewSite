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
import { developerData, talentData } from "../components/PagesData/pythonData";
import ConfidenceImg from "../assets/images/HireDeveloper/Confidence-Img.png";
import { pythonPool } from "src/components/HireDeveloper/TalentPool/TalentPoolData";
import { pythonQuality } from "src/components/HireDeveloper/Qualtity/QualityData";
import { pythonConfidence } from "src/components/HireDeveloper/Confidence/ConfidenceData";

const hireDeveloper = () => {
  return (
    <div>
      <Layout>
        <HireHero
          heading1="Hire A Seasoned"
          heading2="Python Developer"
          heading3="Within 24 Hours"
          developerData={developerData}
          type="Python Developer"
          detail="Turn your concepts into reality with our talented Python engineers. Custom solutions, collaborative approach, and a commitment to excellence."
          Button="Hire A Python Developer Now!"
        />
        <Trusted bg="rgba(241, 241, 241, 1)" margin="0px" />
        <Hire
          heading={"Get Python Developers With Webevis In Just 3 Steps"}
          marginTop="100"
          marginBottom="100"
        />
        <TalentPool
          talentData={talentData}
          type="Python Developer"
          heading="Our Python Talent Pool"
          data={pythonPool}
        />
        <Quality
          heading="Our Python Development Services"
          discreption="Our comprehensive range of Python services is designed to harness the language's versatility and deliver impactful solutions across industries. Our skilled Python developers are dedicated to transforming your ideas into reality while ensuring efficiency, scalability, and innovation."
          data={pythonQuality}
        />
        <Developers
          heading="Ready To Take Your Project To New Heights With Our Python Developers?"
          text="Our dedicated Python developers are ready to tackle your project with expertise, innovation, and a passion for clean and efficient code."
        />
        <Confidence
          ConfidenceImg={ConfidenceImg}
          imgWidth="487px"
          contentWidth="50%"
          textWidth="476px"
          paddingRight="20px"
          paddingLeft="20px"
          heading="Simplified Hiring Excellence"
          text="Elevate your projects with our hassle-free and superior developer hiring process. Experience ease, efficiency, and unmatched results as you onboard top Python talent."
          data={pythonConfidence}
        />
        <Client />
        <TodayTalent
          type="Python Developer"
          title="Get Python Expertise Now!"
          text="Our Python developers infuse your projects with cutting-edge technology, ensuring robust, efficient, and future-proof solutions that drive success."
          button="Ignite Your Vision with Us"
        />
        <Question />
      </Layout>
    </div>
  );
};

export default hireDeveloper;
