import React from "react";
import Process from "src/components/Android-App/AndroidProcess/Process";
import AppService from "src/components/Android-App/AppService/AppService";
import Develop from "src/components/Android-App/Develop/Develop";
import Hero from "src/components/Android-App/Hero/Hero";
import OurApp from "src/components/Android-App/OurApp/OurApp";
import Layout from "src/components/Layout/Layout";
import Technology from "src/components/MobileApp/Technology/Technology";
import Trusted from "src/components/SocialMedia/Client/Client";
import Client from "src/components/LandingPage/OurClient/Client";
import Question from "src/components/HireDeveloper/Question/Question";
const index = () => {
  return (
    <Layout>
      <Hero />
      <Trusted margin="0" />
      <AppService />
      <Develop />
      <OurApp />
      <Process />
      <Technology heading="Technology Stacks We Use For Android App Solutions" />
      <Client marginTop="0" marginBottom="0" />
      <Question />
    </Layout>
  );
};

export default index;
