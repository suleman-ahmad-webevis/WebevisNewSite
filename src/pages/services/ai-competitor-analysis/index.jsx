import React from "react";
import Layout from "src/components/Layout/Layout";
import Hero from "src/components/CompetitorAnalysis/HeroSection/Hero";
import CompetitorServices from "src/components/CompetitorAnalysis/CompetitorServices/CompetitorServices";
import Process from "src/components/CompetitorAnalysis/Process/Process";
import WhyCrucial from "src/components/CompetitorAnalysis/WhyCrucial/WhyCrucial";
import SpeakWays from "src/components/CompetitorAnalysis/SpeakWays/SpeakWays";
import Unlock from "src/components/CompetitorAnalysis/Unlock/Unlock";
import Trusted from "src/components/SocialMedia/Client/Client";
import Client from "src/components/LandingPage/OurClient/Client";
import Question from "src/components/HireDeveloper/Question/Question";

const index = () => {
  return (
    <>
      <Layout>
        <Hero type="AI Competitor Analysis" />
        <Trusted margin="0" shadow />
        <CompetitorServices />
        <Process />
        <WhyCrucial />
        <SpeakWays />
        <Client />
        <Unlock />
        <Question />
      </Layout>
    </>
  );
};

export default index;
