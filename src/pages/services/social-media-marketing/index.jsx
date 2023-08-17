import React from "react";
import Layout from "src/components/Layout/Layout";
import Traffic from "src/components/SocialMedia/Traffic/Traffic";
import Experts from "src/components/SocialMedia/Experts/Experts";
import Hero from "src/components/SocialMedia/HeroSection/Hero";
import Serve from "src/components/SocialMedia/Serve/Serve";
import Services from "src/components/SocialMedia/Services/Services";
import SMO from "src/components/SocialMedia/SmoService/SMO";
import WhyWebevis from "src/components/SocialMedia/WhyWebevis/WhyWebevis";
import Benefits from "src/components/SocialMedia/benefits/Benefits";
import Rank from "src/components/SocialMedia/ReadyRank/Rank";
import Trusted from "src/components/SocialMedia/Client/Client";
import Sliders from "src/components/socialMediaSlider/Slider";
import Client from "src/components/LandingPage/OurClient/Client";
import Question from "src/components/HireDeveloper/Question/Question";

const SocialMedia = ({ pageProps }) => {
  return (
    <>
      <Layout {...pageProps}>
        <Hero />
        <Trusted />
        <Services />
        <Serve />
        <Benefits />
        <SMO />
        <WhyWebevis />
        <Sliders />
        <Traffic />
        <Client />
        <Rank />
        <Question />
      </Layout>
    </>
  );
};

export default SocialMedia;
