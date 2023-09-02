import React from "react";
import Layout from "src/components/Layout/Layout";
import Help from "src/components/SeoServices/CanHelp/Help";
import Hero from "src/components/SeoServices/HeroSection/Hero";
import Traffic from "src/components/SeoServices/Traffic/Traffic";
import { Wrapper } from "src/components/Services/heroSection/Hero.styles";
import Creator from "src/components/SeoServices/Creator/Creator";
import Rank from "src/components/SeoServices/ReadyRank/Rank";
import Client from "src/components/LandingPage/OurClient/Client";

import Explore from "src/components/explorecurrent/Explore";
import Trusted from "src/components/SocialMedia/Client/Client";
import Question from "src/components/HireDeveloper/Question/Question";
import HireSeo from "src/components/SeoServices/hireSeo/hireSeo";
import Challenge from "src/components/SeoServices/Challenges/Challenge";

const index = ({ pageProps }) => {
  return (
    <>
      <Layout {...pageProps}>
        <Hero type="AI Website Audit" />
        <Trusted bg="#EAF7EE" margin="0" />
        <Challenge />
        <Rank type="SEO" />
        <Help />
        <Traffic />
        <Creator />
        <Client />
        <HireSeo type="SEO" />
        <Question />
        {/* <Explore /> */}
      </Layout>
    </>
  );
};

export default index;
