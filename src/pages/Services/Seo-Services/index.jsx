import React from "react";
import Layout from "src/components/Layout/Layout";
import Help from "src/components/SeoServices/CanHelp/Help";
import Hero from "src/components/SeoServices/HeroSection/Hero";
import Traffic from "src/components/SeoServices/Traffic/Traffic";
import Client from "src/components/SeoServices/client/Client";
import { Wrapper } from "src/components/Services/heroSection/Hero.styles";
import Creator from "src/components/SeoServices/Creator/Creator";
import Rank from "src/components/SeoServices/ReadyRank/Rank";
import Clients from "src/components/OurClient/Client";
import Explore from "src/components/explorecurrent/Explore";

const index = ({ pageProps }) => {
  return (
    <>
      <Layout {...pageProps}>
        <Hero />
        <Client />
        <Help />
        <Traffic />
        <Creator />
        <Explore />
        <Rank />
        <Clients />
      </Layout>
    </>
  );
};

export default index;
