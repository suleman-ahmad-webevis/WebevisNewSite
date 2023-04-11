import React from "react";
import Layout from "src/components/Layout/Layout";
import { Wrapper } from "src/components/Services/heroSection/Hero.styles";
import Client from "src/components/SocialMedia/Client/Client";
import Hero from "src/components/SocialMedia/HeroSection/Hero";
import Serve from "src/components/SocialMedia/Serve/Serve";
import Services from "src/components/SocialMedia/Services/Services";
import GlobalStyle from "src/global.styles";

const SocialMedia = ({ pageProps }) => {
  return (
    <>
      {/* <Layout {...pageProps}> */}
      <GlobalStyle />
      <Wrapper>
        <Hero />
        <Client />
        <Services />
        <Serve />
      </Wrapper>
      {/* </Layout> */}
    </>
  );
};

export default SocialMedia;
