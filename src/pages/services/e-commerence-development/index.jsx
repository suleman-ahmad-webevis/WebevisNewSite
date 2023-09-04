import React from "react";
import Consult from "src/components/ECommerencePage/consultation/Consult";
import EServices from "src/components/ECommerencePage/ecommerenceServices/EServices";
import Hero from "src/components/ECommerencePage/heroSection/Hero";
import Success from "src/components/ECommerencePage/sucessStory/Success";
import Technology from "src/components/ECommerencePage/technology/Technology";
import Question from "src/components/HireDeveloper/Question/Question";
import Trusted from "src/components/SocialMedia/Client/Client";
import Client from "src/components/LandingPage/OurClient/Client";

import Layout from "src/components/Layout/Layout";
import ComWeb from "src/components/ECommerencePage/ecomWeb/ComWeb";
import Choose from "src/components/ECommerencePage/chooseWeb/Choose";

const index = () => {
  return (
    <Layout>
      <Hero />
      <Trusted margin="0px" />
      <EServices />
      <Choose/>
      <ComWeb/>
      <Success />
      <Technology />
      <Client />
      <Consult />
      <Question />
    </Layout>
  );
};

export default index;
