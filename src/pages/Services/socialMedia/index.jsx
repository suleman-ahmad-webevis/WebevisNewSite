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
import Rank from "src/components/SocialMedia/ReadyRank/Rank";
import Trusted from "src/components/SocialMedia/Client/Client";
import Explore from "src/components/explorecurrent/Explore";
import Sliders from "src/components/socialMediaSlider/Slider";

const SocialMedia = ({ pageProps }) => {
  return (
    <>
      <Layout {...pageProps}>
        <GlobalStyle />
        <Wrapper>
          <Hero />
          <Trusted />
          <Services />
          <Serve />
          <Benefits />
          <SMO />
          <WhyWebevis />
          <Experts />
          <Sliders />
          <Traffic />
          <Explore />
          <Rank />
          <Clientslider />
        </Wrapper>
      </Layout>
    </>
  );
};

export default SocialMedia;
