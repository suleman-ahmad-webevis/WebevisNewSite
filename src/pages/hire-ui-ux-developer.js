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
import { developerData, talentData } from "../components/PagesData/uiUxData";
import ConfidenceImg from "../assets/images/HireDeveloper/Confidence-Img.png";
import { uiDevHire } from "src/components/ExpertPool/HireDedicated/HireData";
import { uiDevPool } from "src/components/HireDeveloper/TalentPool/TalentPoolData";
import { uiDevQuality } from "src/components/HireDeveloper/Qualtity/QualityData";
import { uiDevConfidence } from "src/components/HireDeveloper/Confidence/ConfidenceData";

const hireDeveloper = () => {
  return (
    <div>
      <Layout>
        <HireHero
          heading1="Hire A Proficient"
          heading2="UI/UX Developer"
          heading3=" In Just 24 Hours"
          developerData={developerData}
          type="UI/UX Developer"
          detail="With a UI/UX developer from our team, expect a focus on user-driven strategies, guaranteeing an interface that resonates with your target audience."
          Button="Hire A UI/UX Developer Now"
        />
        <Trusted bg="rgba(241, 241, 241, 1)" margin="0px" />
        <Hire
          heading={"3 Steps To Hire A Dedicated UI/UX Developer With Webevis"}
          marginTop="100"
          marginBottom="100"
          data={uiDevHire}
        />
        <TalentPool
          heading="Why Hire UI/UX Developers With Webevis?"
          talentData={talentData}
          type="UI/UX Developer"
          data={uiDevPool}
        />
        <Quality
          heading="Our UI/UX Development Services"
          discreption="We understand that great user experiences are built on the foundation of seamless design and functional user interfaces. Our UI/UX developers are not just designers; they are versatile front-end developers with the ability to transform your concepts into reality. Our skilled UI/UX developers combine design aesthetics with technical prowess to create exceptional user experiences."
          data={uiDevQuality}
        />
        <Developers
          heading="Want A UI/UX Developer To Enhance Your Digital Experience For Your Project?"
          text="Our UI/UX developers combine design finesse with technical prowess to create user-centric, captivating experiences that drive success."
          button="Request a Free Consultation!"
        />
        <Confidence
          ConfidenceImg={ConfidenceImg}
          imgWidth="487px"
          contentWidth="50%"
          textWidth="476px"
          paddingRight="20px"
          paddingLeft="20px"
          heading="Hire With Confidence"
          text="We understand that recruitment of high-caliber developers in Lactam is a challenge for US companies, so we cover everything from the sourcing process to background checks"
          data={uiDevConfidence}
        />
        <Client />
        <TodayTalent
          type="UI/UX Developer"
          title="Enhance User Experience Today!"
          text="Expect intuitive designs, responsive interfaces, and a focus on user-centric innovation for exceptional digital experiences."
          button="Get Started"
        />
        <Question />
      </Layout>
    </div>
  );
};

export default hireDeveloper;
