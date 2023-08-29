import React from "react";
import Layout from "src/components/Layout/Layout";
import Dev from "src/components/WebDevelopment/devStrategies/Dev";
import Hero from "src/components/WebDevelopment/heroSection/Hero";
import Inquir from "src/components/WebDevelopment/inquir/Inquir";
import Process from "src/components/WebDevelopment/processFlow/Process";
import FlowSite from "src/components/WebDevelopment/webFlowSite/FlowSite";
import WebServices from "src/components/WebDevelopment/webServices/WebServices";
import Client from "src/components/LandingPage/OurClient/Client";
import Technologies from "src/components/WebDevelopment/webTechnology/Technologies";
import Question from "src/components/HireDeveloper/Question/Question";

const index = () => {
  return (
    <Layout>
      <Hero />
      <WebServices />
      <Dev />
      <FlowSite />
      <Process />
      <Technologies />
      <Client />
      <Inquir />
      <Question />
    </Layout>
  );
};

export default index;
