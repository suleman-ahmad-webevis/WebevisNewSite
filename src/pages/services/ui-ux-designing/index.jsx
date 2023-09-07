import React from "react";
import Layout from "src/components/Layout/Layout";
import Trusted from "src/components/SocialMedia/Client/Client";
import Craft from "src/components/Ui-UX-Design/Craft/Craft";
import Hero from "src/components/Ui-UX-Design/Hero/Hero";
import Proposal from "src/components/Ui-UX-Design/Proposal/Proposal";
import Service from "src/components/Ui-UX-Design/UI-UX-Service/Service";
import Client from "src/components/LandingPage/OurClient/Client";
import Question from "src/components/HireDeveloper/Question/Question";
import Process from "src/components/Ui-UX-Design/Process/Process";
const index = () => {
  return (
    <Layout>
      <Hero />
      <Trusted margin="0px" />
      <Service />
      <Proposal />
      <Craft />
      <Process />
      <Client marginTop="0" marginBottom="0" />
      <Question />
    </Layout>
  );
};

export default index;
