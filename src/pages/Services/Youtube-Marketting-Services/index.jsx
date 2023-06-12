import React from "react";
import Layout from "src/components/Layout/Layout";
import HeroSection from "src/components/youtubeMarketting/heroSection/heroSection";
import YoutubeMarket from "src/components/youtubeMarketting/youtubeMarketing/YoutubeMarket";
import Beneficial from "src/components/youtubeMarketting/benificalMarket/Beneficial";
import Vedio from "src/components/youtubeMarketting/vedioBeneficial/Vedio";
import MarketServices from "src/components/youtubeMarketting/marketServices/MarketServices";
import Transform from "src/components/youtubeMarketting/transform/Transform";
const index = () => {
  return (
    <Layout>
      <HeroSection />
      <YoutubeMarket />
      <Beneficial />
      <Vedio/>
      <MarketServices/>
      <Transform/>
    </Layout>
  );
};
export default index;
