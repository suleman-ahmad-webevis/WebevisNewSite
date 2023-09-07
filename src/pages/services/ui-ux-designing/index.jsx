import React from "react";
import Layout from "src/components/Layout/Layout";
import Trusted from "src/components/SocialMedia/Client/Client";
import Craft from "src/components/Ui-UX-Design/Craft/Craft";
import Hero from "src/components/Ui-UX-Design/Hero/Hero";
import Proposal from "src/components/Ui-UX-Design/Proposal/Proposal";
import Service from "src/components/Ui-UX-Design/UI-UX-Service/Service";
import Client from "src/components/LandingPage/OurClient/Client";
import Question from "src/components/HireDeveloper/Question/Question";
const index = () => {
  return (
    <Layout>
      <Hero />
      <Trusted margin="0px" />
      <Service />
      <Proposal />
      <Craft />
      <Client />
      <Question />
    </Layout>
  );
};

export default index;
