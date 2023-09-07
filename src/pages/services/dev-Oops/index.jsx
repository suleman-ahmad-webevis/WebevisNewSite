import React from "react";
import Layout from "src/components/Layout/Layout";
import Question from "src/components/HireDeveloper/Question/Question";
import Trusted from "src/components/SocialMedia/Client/Client";
import Client from "src/components/LandingPage/OurClient/Client";
import Hero from "src/components/DevOopsPage/heroSection/Hero";
import Oops from "src/components/DevOopsPage/OopsServices/Oops";
import Choose from "src/components/DevOopsPage/devChoose/Choose";
import Talk from "src/components/DevOopsPage/devTalk/Talk";
import Solution from "src/components/DevOopsPage/devSolution/Solution";
import Implement from "src/components/DevOopsPage/implement/Implement";

const index = () => {
  return (
    <Layout>
      <Hero />
      <Trusted margin="0px" />
      <Oops />
      <Choose />
      <Implement/>
      <Solution />
      <Client />
      <Talk />
      <Question />
    </Layout>
  );
};

export default index;
