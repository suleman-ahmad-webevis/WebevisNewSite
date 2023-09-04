import React from "react";
import Layout from "src/components/Layout/Layout";
import Choose from "src/components/WebApp/choose/Choose";
import CustomWeb from "src/components/WebApp/customWeb/CustomWeb";
import Hero from "src/components/WebApp/heroSection/Hero";
import Talk from "src/components/WebApp/talk/Talk";
import Assurance from "src/components/WebApp/webAssurance/Assurance";
import WebProcess from "src/components/WebApp/webProcess/WebProcess";
import Trusted from "src/components/SocialMedia/Client/Client";
import Question from "src/components/HireDeveloper/Question/Question";
import Client from "src/components/LandingPage/OurClient/Client";
const index = () => {
  return (
    <Layout>
      <Hero />
      <Trusted margin="0px" />
      <CustomWeb />
      <Choose />
      <Assurance />
      <WebProcess />
      <Client />
      <Talk />
      <Question />
    </Layout>
  );
};

export default index;
