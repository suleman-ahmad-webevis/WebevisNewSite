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
import { developerData, talentData } from "../components/PagesData/shopifyData";
const hireDeveloper = () => {
  return (
    <div>
      <Layout>
        <HireHero
          heading1="Hire The Top-Notch"
          heading2="Shopify Developer"
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
