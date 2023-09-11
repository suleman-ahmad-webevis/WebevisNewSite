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
import { developerData, talentData } from "../components/PagesData/angularData";
import ConfidenceImg from "../assets/images/HireDeveloper/Confidence-Img.png";
import { angularHire } from "src/components/ExpertPool/HireDedicated/HireData";
import { angularPool } from "src/components/HireDeveloper/TalentPool/TalentPoolData";
import { angularQuality } from "src/components/HireDeveloper/Qualtity/QualityData";
import { angularConfidence } from "src/components/HireDeveloper/Confidence/ConfidenceData";

const hireDeveloper = () => {
  return (
    <div>
      <Layout>
        <HireHero
          heading1="Hire A High-caliber"
          heading2="Angular Developer"
          heading3="Within A Day"
          developerData={developerData}
          type="Angular Developer"
          detail="With years of experience under their belts, our Angular developers have tackled diverse projects, making them well-equipped to handle any challenge."
          Button="Hire An Angular Developer Now!"
        />
        <Trusted bg="rgba(241, 241, 241, 1)" margin="0px" />
        <Hire
          heading={"3 Steps To Hiring Angular Developers With Webevis"}
          marginTop="100"
          marginBottom="100"
          data={angularHire}
        />
        <TalentPool
          heading="Our Angular Talent Pool"
          talentData={talentData}
          type="Angular Developer"
          data={angularPool}
        />
        <Quality
          heading="Our Angular Development Services"
          discreption="Our Angular services are designed to help you harness the full potential of this robust framework, delivering web applications that stand out in today's competitive digital landscape. We tailor our services to meet your specific requirements, whether you need a single-page application, a complex enterprise solution, or anything in between."
          data={angularQuality}
        />
        <Developers
          heading="Need Top-Notch Angular Talent For Your Next Digital Innovation?"
          text="Our Angular services are designed to help you harness the full potential of this robust framework, delivering web applications that stand out in today's competitive digital landscape."
          button="Get a Free Consultation!"
        />
        <Confidence
          ConfidenceImg={ConfidenceImg}
          imgWidth="487px"
          contentWidth="50%"
          textWidth="476px"
          paddingRight="20px"
          paddingLeft="20px"
          heading="Your Trusted Developer Source"
          text="When you need developers, you can trust, turn to us. Our hiring process is a breeze, and our team delivers exceptional results consistently, ensuring your peace of mind."
          data={angularConfidence}
        />
        <Client />
        <TodayTalent
          type="Angular Developer"
          title="Meet Your Angular Dream Team Today!"
          text="We offer top-tier development skills, streamlined processes, and reliable support for your projects."
          button="Get Expertise Now"
        />
        <Question />
      </Layout>
    </div>
  );
};

export default hireDeveloper;
