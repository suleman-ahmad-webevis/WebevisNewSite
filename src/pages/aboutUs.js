import React from "react";
import Layout from "src/components/Layout/Layout";
import Hero from "../components/AboutPage/hero/Hero";
import Trusted from "src/components/SocialMedia/Client/Client";
import News from "../components/AboutPage/LatestNews/News";
import Inter from "../components/AboutPage/interest/Inter";
import Amazing from "src/components/AboutPage/amazing/Amazing";
import Message from "../components/AboutPage/Message/Message";
import Work from "src/components/AboutPage/WorkHistory/Work";
import Experince from "src/components/AboutPage/Experience/Experince";
import Vision from "src/components/AboutPage/Vision/Vision";
import Question from "src/components/LandingPage/Question/Question";
import Story from "src/components/AboutPage/Story/Story";

const aboutUs = ({ pageProps }) => {
  return (
    <Layout>
      <Hero {...pageProps} />
      <Trusted margin="0px" bg="rgba(234, 247, 238, 1)" />
      <Message />
      <Amazing {...pageProps} />
      {/* <Work /> */}
      {/* <Experince /> */}
      <Vision />
      <Story />
      <Inter {...pageProps} />
      <Question bg="none" />
    </Layout>
  );
};

export default aboutUs; 
