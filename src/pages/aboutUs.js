import React from "react";
import Layout from "src/components/Layout/Layout";
import Hero from "../components/AboutPage/hero/Hero";
import Brilliant from "../components/AboutPage/brilliant/Brilliant";
import Client from "../components/AboutPage/OurClient/Client";
import News from "../components/AboutPage/LatestNews/News";
import Inter from "../components/AboutPage/interest/Inter";
import Amazing from "src/components/AboutPage/amazing/Amazing";

const aboutUs = ({ pageProps }) => {
  return (
    <Layout>
      <Hero {...pageProps} />
      <Brilliant {...pageProps} />
      <Client {...pageProps} />
      <Amazing {...pageProps} />
      <News {...pageProps} />
      <Inter {...pageProps} />
    </Layout>
  );
};

export default aboutUs; 
