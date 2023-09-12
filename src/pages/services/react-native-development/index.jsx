import React from "react";
import Layout from "src/components/Layout/Layout";
import Question from "src/components/HireDeveloper/Question/Question";
import Trusted from "src/components/SocialMedia/Client/Client";
import Client from "src/components/LandingPage/OurClient/Client";
import Hero from "src/components/reactNative/heroSection/Hero";
import Services from "src/components/reactNative/reactServices/Services";
import Development from "src/components/reactNative/reactDevelopment/Development";
import Mind from "src/components/reactNative/reactMind/Mind";
import Process from "src/components/reactNative/reactProcess/Process";
import Looking from "src/components/reactNative/reactLooking/Looking";
const index = () => {
  return (
    <Layout>
      <Hero />
      <Trusted margin="0px" bg="#fff" />
      <Services/>
      <Mind/>
      <Development/>
      <Process/>
      <Client />
      <Looking/>
      <Question />
    </Layout>
  );
};

export default index;
