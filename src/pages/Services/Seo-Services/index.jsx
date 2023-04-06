import React from "react";
import Layout from "src/components/Layout/Layout";
import Help from "src/components/SeoServices/CanHelp/Help";
import Hero from "src/components/SeoServices/HeroSection/Hero";
import Traffic from "src/components/SeoServices/Traffic/Traffic";
import Client from "src/components/SeoServices/client/Client";
import { Wrapper } from "src/components/Services/heroSection/Hero.styles";
import GlobalStyle from "src/globalStyles";
import Creator from "src/components/SeoServices/Creator/Creator";
import Offer from "src/components/SeoServices/Offers/Offer";
import Rank from "src/components/SeoServices/ReadyRank/Rank";

const index = ({ pageProps }) => {
  return (
    <Layout {...pageProps}>
      <>
        <GlobalStyle />
        <Hero />
        <Client />
        <Help />
        {/* <Traffic /> */}
        {/* <Creator /> */}
        {/* <Offer /> */}
        {/* <Rank /> */}
      </>
      //{" "}
    </Layout>
  );
};

export default index;
