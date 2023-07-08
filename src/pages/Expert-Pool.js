import React from "react";
import Dedicated from "src/components/ExpertPool/Dedicated/Dedicated";
import ExpertSlider from "src/components/ExpertPool/ExpertSlider/ExpertSlider";
import Hire from "src/components/ExpertPool/HireDedicated/Hire";
import Home from "src/components/ExpertPool/Home/Home";
import TeamModal from "src/components/ExpertPool/TeamModel/TeamModal";
import ChooseUs from "src/components/ExpertPool/WhyChoose/ChooseUs";
import Layout from "src/components/Layout/Layout";

import Trusted from "src/components/SocialMedia/Client/Client";

const Expert = () => {
  return (
    <Layout>
      <Home />
      <Trusted bg="rgba(241, 241, 241, 1)" margin="0px" />
      <ExpertSlider />
      <Hire />
      <Dedicated />
      <ChooseUs />
      <TeamModal />
    </Layout>
  );
};

export default Expert;
