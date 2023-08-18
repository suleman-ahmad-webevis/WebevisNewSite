import React from "react";
import Layout from "src/components/Layout/Layout";
import Approach from "src/components/contentMarkettingServices/Approach/Approach";
import ContentAgency from "src/components/contentMarkettingServices/ContentAgency/ContentAgency";
import ContentCreation from "src/components/contentMarkettingServices/ContentCreation/ContentCreation";
import Hero from "src/components/contentMarkettingServices/HeroSection/Hero";
import LevelUp from "src/components/contentMarkettingServices/LevelUp/LevelUp";
import Services from "src/components/contentMarkettingServices/Services/Services";
import Trusted from "src/components/SocialMedia/Client/Client";
import Success from "src/components/contentMarkettingServices/Success/Success";
import Client from "src/components/LandingPage/OurClient/Client";
import Question from "src/components/HireDeveloper/Question/Question";

const index = () => {
  return (
    <Layout>
      <Hero />
      <Trusted margin="0" bg="#fff" shadow />
      <Services />
      <Approach />
      <Success />
      <ContentCreation />
      <ContentAgency />
      <Client />
      <LevelUp />
      <Question />
    </Layout>
  );
};

export default index;
