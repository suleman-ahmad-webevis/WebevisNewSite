import React from "react";
import Layout from "src/components/Layout/Layout";
import Question from "src/components/HireDeveloper/Question/Question";
import Trusted from "src/components/SocialMedia/Client/Client";
import Client from "src/components/LandingPage/OurClient/Client";
import Hero from "src/components/AiDevelopment/heroSection/Hero";
import Services from "src/components/AiDevelopment/aiServices/Services";
import Sight from "src/components/AiDevelopment/aiSight/Sight";
import Benefits from "src/components/AiDevelopment/aiBenefits/Benefits";
import Choose from "src/components/AiDevelopment/aiChoose/Choose";
import Stream from "src/components/AiDevelopment/aiStream/Stream";
const index = () => {
  return (
    <Layout>
      <Hero />
      <Trusted margin="0px" />
      <Services/>
      <Choose/>
      <Benefits/>
      <Stream/>
      <Client />
      <Sight/>
      <Question />
    </Layout>
  );
};

export default index;
