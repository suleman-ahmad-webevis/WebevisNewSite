import React from "react";
import Layout from "src/components/Layout/Layout";
import Hero from "../components/AboutPage/hero/Hero";
import Trusted from "src/components/SocialMedia/Client/Client";
import News from "../components/AboutPage/LatestNews/News";
import Inter from "../components/AboutPage/interest/Inter";
import Amazing from "src/components/AboutPage/amazing/Amazing";
import Message from "../components/AboutPage/Message/Message";
import Work from "src/components/AboutPage/WorkHistory/Work";

const aboutUs = ({ pageProps }) => {
  return (
    <Layout>
      <Hero {...pageProps} />
      <Trusted margin="0px" bg="rgba(234, 247, 238, 1)" />
      <Message />
      <Amazing {...pageProps} />
      <Work />
      <News {...pageProps} />
      <Inter {...pageProps} />
    </Layout>
  );
};

export default aboutUs; 
