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
        <Quality heading="Our React Development Services" />
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
          white1="Bid Farewell To Irrelevant Candidates"
          white2="No Communication Gaps"
          white3="Isolation Is Not An Option"
          white4="No Compromise On Developer Compatibility"
          green1="Focused Candidate Selection"
          green2="Open Communication"
          green3="Collaborative Partnerships"
          green4="Top-Tier Talent"
        />
        <Client />
        <TodayTalent type="React Js Developer" />
        <Question />
      </Layout>
    </div>
  );
};

export default hireDeveloper;
