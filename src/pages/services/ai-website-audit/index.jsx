import React from "react";
import Layout from "src/components/Layout/Layout";
import HeroSection from "src/components/AWAServices/HeroSection/HeroSection";
import AiServices from "src/components/AWAServices/AiServices/AiServices";
import AilWebsiteAudit from "src/components/AWAServices/AiWebsiteAudit/AilWebsiteAudit";
import Boost from "src/components/AWAServices/BoostOptions/Boost";
import BoostSteps from "src/components/AWAServices/BoostSteps/BoostSteps";
import Client from "src/components/LandingPage/OurClient/Client";
import Trusted from "src/components/SocialMedia/Client/Client";
import Question from "src/components/HireDeveloper/Question/Question";
import FreeWebsite from "src/components/AWAServices/FreeWebsite/FreeWebsite";

const index = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <Trusted margin="0" bg="#EAF7EE" />
        <AiServices />
        <AilWebsiteAudit />
        <Boost />
        <BoostSteps />
        <Client />
        <FreeWebsite />
        <Question />
      </Layout>
    </>
  );
};

export default index;
