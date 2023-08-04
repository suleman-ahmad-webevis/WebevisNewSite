import React from "react";
import Hire from "src/components/ExpertPool/HireDedicated/Hire";
import HireHero from "src/components/HireDeveloper/HireeHero/HireHero";
import TalentPool from "src/components/HireDeveloper/TalentPool/TalentPool";
import Layout from "src/components/Layout/Layout";
import Trusted from "src/components/SocialMedia/Client/Client";
import { seoData, seoTalentData } from "../components/PagesData/seoExpertData";
import HireSeo from "src/components/SeoExpert/hireSeo/hireSeo";
import Activities from "src/components/SeoExpert/SeoActivities/Activities";
import ExpertForm from "src/components/SeoExpert/ExpertForm/ExpertForm";
import Platforms from "src/components/SeoExpert/Platforms/Platforms";
const SeoExperts = () => {
  return (
    <Layout>
      <HireHero
        heading1="Hire Professional"
        heading2="Seo Experts"
        developerData={seoData}
      />
      <Trusted bg="rgba(241, 241, 241, 1)" margin="0px" />
      <Hire
        heading={"Hire remote developers in 3 easy steps with Webevis"}
        marginTop="100"
        marginBottom="100"
      />
      <TalentPool heading="Top Seo Experts" talentData={seoTalentData} />
      <HireSeo />
      <Activities />
      <ExpertForm />
      <Platforms />
    </Layout>
  );
};

export default SeoExperts;
