import React from "react";
import Layout from "src/components/Layout/Layout";
import Hero from "src/components/semservices/heroSection/Hero";
import Display from "src/components/semservices/display/Display";
import SimSer from "src/components/semservices/simser/SimSer";
import Look from "src/components/semservices/lookingProject/Look";
import Marketing from "src/components/semservices/marketing/Marketing";
import { ContainerServices } from "src/components/semservices/ContainerServices.style";
import Trusted from "src/components/SocialMedia/Client/Client";
import Client from "src/components/LandingPage/OurClient/Client";
import Question from "src/components/HireDeveloper/Question/Question";
const index = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Trusted margin="0px" />
        <Marketing />
        <Display />
        <SimSer />
        <Client />
        <Look type="SEM" />
        <Question />
      </Layout>
    </>
  );
};

export default index;
