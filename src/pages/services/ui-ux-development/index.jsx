import React from "react";
import Layout from "src/components/Layout/Layout";
import Hero from "../../../components/UiUxPage/heroSection/Hero";
import Psd from "src/components/UiUxPage/psdUi/Psd";
import Conversation from "src/components/UiUxPage/conversation/Conversation";
import HServices from "src/components/UiUxPage/htmlServices/HServices";
import Responsive from "src/components/UiUxPage/resProcess/Responsive";
import Consultation from "src/components/UiUxPage/consultation/Consultation";
import Trusted from "src/components/SocialMedia/Client/Client";
import Question from "src/components/HireDeveloper/Question/Question";
import Client from "src/components/LandingPage/OurClient/Client";
import Expertise from "src/components/UiUxPage/expertise/Expertise";

const index = () => {
  return (
    <Layout>
      <Hero />
      <Trusted margin="0px" />
      <Psd />
      <Conversation />
      <HServices />
      <Expertise/>
      <Responsive />
      <Client />
      <Consultation />
      <Question />
    </Layout>
  );
};

export default index;
