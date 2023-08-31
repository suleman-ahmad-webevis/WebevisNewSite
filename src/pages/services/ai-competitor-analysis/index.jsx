import React from "react";
import Layout from "src/components/Layout/Layout";
import Hero from "src/components/CompetitorAnalysis/HeroSection/Hero";
import Trusted from "src/components/CompetitorAnalysis/Slider/Trusted";
import CompetitorServices from "src/components/CompetitorAnalysis/CompetitorServices/CompetitorServices";
import Process from "src/components/CompetitorAnalysis/Process/Process";
import WhyCrucial from "src/components/CompetitorAnalysis/WhyCrucial/WhyCrucial";
import SpeakWays from "src/components/CompetitorAnalysis/SpeakWays/SpeakWays";
import Explore from "src/components/CompetitorAnalysis/Explore/Explore";
import Unlock from "src/components/CompetitorAnalysis/Unlock/Unlock";
import Client from "src/components/OurClient/Client";

const index = () => {
  return (
    <>
      <Layout>
        <Hero type="AI Competitor Analysis" />
        <Trusted />
        <CompetitorServices />
        <Process />
        <WhyCrucial />
        <SpeakWays />
        {/* <Explore /> */}
        <Unlock />
        <Client />
      </Layout>
    </>
  );
};

export default index;
