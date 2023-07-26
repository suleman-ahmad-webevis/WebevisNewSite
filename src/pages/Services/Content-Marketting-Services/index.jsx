import React from "react";
import Layout from "src/components/Layout/Layout";
import Approach from "src/components/contentMarkettingServices/Approach/Approach";
import ContentAgency from "src/components/contentMarkettingServices/ContentAgency/ContentAgency";
import ContentCreation from "src/components/contentMarkettingServices/ContentCreation/ContentCreation";
import Hero from "src/components/contentMarkettingServices/HeroSection/Hero";
import LevelUp from "src/components/contentMarkettingServices/LevelUp/LevelUp";
import Services from "src/components/contentMarkettingServices/Services/Services";
import Trusted from "src/components/contentMarkettingServices/Slider/Trusted";
import Success from "src/components/contentMarkettingServices/Success/Success";
import Explore from "src/components/contentMarkettingServices/explorecurrent/Explore";
import Client from "../../../components/OurClient/Client";

const index = () => {
  return (
    <Layout>
      <Hero />
      <Trusted />
      <Services />
      <Approach />
      <Success />
      <ContentCreation />
      <ContentAgency />
      {/* <Explore /> */}
      <Client />
      <LevelUp />
    </Layout>
  );
};

export default index;
