import React from "react";
import Layout from "src/components/Layout/Layout";
import Traffic from "src/components/SocialMedia/Traffic/Traffic";
import { Wrapper } from "src/components/Services/heroSection/Hero.styles";
import Client from "src/components/SocialMedia/Client/Client";
import Clientslider from "src/components/SeoServices/ourClient/ClientSlider";
import Experts from "src/components/SocialMedia/Experts/Experts";
import Hero from "src/components/SocialMedia/HeroSection/Hero";
import Serve from "src/components/SocialMedia/Serve/Serve";
import Services from "src/components/SocialMedia/Services/Services";
import SMO from "src/components/SocialMedia/SmoService/SMO";
import WhyWebevis from "src/components/SocialMedia/WhyWebevis/WhyWebevis";
import Benefits from "src/components/SocialMedia/benefits/Benefits";
import GlobalStyle from "src/global.styles";
import Offer from "src/components/SocialMedia/Offers/Offer";
import Rank from "src/components/SocialMedia/ReadyRank/Rank";

const SocialMedia = ({ pageProps }) => {
  return (
    <>
      <Layout {...pageProps}>
        <GlobalStyle />
        <Wrapper>
          <Hero />
          <Client />
          <Services />
          <Serve />
          <Benefits />
          <SMO />
          <WhyWebevis />
          <Experts />
          <Traffic />
          <Offer />
          <Rank />
          <Clientslider />
        </Wrapper>
      </Layout>
    </>
  );
};

export default SocialMedia;
