import React from "react";
import Layout from "src/components/Layout/Layout";
import Hero from "src/components/semservices/heroSection/Hero";
import Display from "src/components/semservices/display/Display";
import SimSer from "src/components/semservices/simser/SimSer";
import Explore from "src/components/semservices/explorecurrent/Explore";
import Client from "src/components/ourClient/Client";
import Look from "src/components/semservices/lookingProject/Look";
import Marketing from "src/components/semservices/marketing/Marketing";
import { ContainerServices } from "src/components/semservices/ContainerServices.style";
// import Images from "src/components/semservices/imagebar/Images";
import Trusted from "src/components/contentMarkettingServices/Slider/Trusted";

const index = () => {
  return (
    <>
      <Layout>
        <ContainerServices>
          <Hero />
          <Trusted />
          {/* <Images /> */}
          <Marketing />
          <Display />
          <SimSer />
          {/* <Explore /> */}
          <Look />
          <Client />
        </ContainerServices>
      </Layout>
    </>
  );
};

export default index;
