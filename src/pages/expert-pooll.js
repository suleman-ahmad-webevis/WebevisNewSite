import React from "react";
import Dedicated from "src/components/ExpertPool/Dedicated/Dedicated";
import ExpertSlider from "src/components/ExpertPool/ExpertSlider/ExpertSlider";
import Hire from "src/components/ExpertPool/HireDedicated/Hire";
import Home from "src/components/ExpertPool/Home/Home";
import Talent from "src/components/ExpertPool/Talent/Talent";
import TeamModal from "src/components/ExpertPool/TeamModel/TeamModal";
import ChooseUs from "src/components/ExpertPool/WhyChoose/ChooseUs";
import Client from "src/components/LandingPage/OurClient/Client";
import Question from "src/components/LandingPage/Question/Question";
import Layout from "src/components/Layout/Layout";
import Trusted from "src/components/SocialMedia/Client/Client";

const Expert = () => {
  return (
    <Layout>
      <Home />
      <Trusted bg="rgba(241, 241, 241, 1)" margin="0px" />
      <ExpertSlider />
      <Hire
        heading="Simplify Resource Hiring With Webevis In Just 3 Easy Steps"
        marginBottom="20"
      />
      <Dedicated />
      <ChooseUs />
      <TeamModal />
      <Talent />
      <Client />
      <Question bg="none" />
    </Layout>
  );
};

export default Expert;
