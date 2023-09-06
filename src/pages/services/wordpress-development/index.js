import React from "react";
import Layout from "src/components/Layout/Layout";
import Hero from "src/components/WordPressPage/heroSection/Hero";
import Trusted from "src/components/SocialMedia/Client/Client";
import Question from "src/components/HireDeveloper/Question/Question";
import Client from "src/components/LandingPage/OurClient/Client";
import Word from "src/components/WordPressPage/wordStarted/Word";
import Request from "src/components/WordPressPage/request/Request";
import ComWeb from "src/components/ECommerencePage/ecomWeb/ComWeb";
import Funtionality from "src/components/WordPressPage/wordFuntionality/Funtionality";
import Services from "src/components/WordPressPage/wordServices/Services";
import Choose from "src/components/WordPressPage/wordChoose/Choose";

const index = () => {
  return (
    <Layout>
      <Hero />
      <Trusted margin="0px" bg="#fff" />
      <Services/>
      <Choose/>
      <Word/>
      <Funtionality/>
      <ComWeb/>
      <Client />
      <Request/>

      <Question />
    </Layout>
  );
};

export default index;
