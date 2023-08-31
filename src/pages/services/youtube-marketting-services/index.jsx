import React from "react";
import Layout from "src/components/Layout/Layout";
import HeroSection from "src/components/youtubeMarketting/heroSection/heroSection";
import YoutubeMarket from "src/components/youtubeMarketting/youtubeMarketing/YoutubeMarket";
import Beneficial from "src/components/youtubeMarketting/benificalMarket/Beneficial";
import Vedio from "src/components/youtubeMarketting/vedioBeneficial/Vedio";
import MarketServices from "src/components/youtubeMarketting/marketServices/MarketServices";
import Transform from "src/components/youtubeMarketting/transform/Transform";
import Trusted from "src/components/SocialMedia/Client/Client";
import Client from "src/components/LandingPage/OurClient/Client";
import Question from "src/components/HireDeveloper/Question/Question";
const index = () => {
  return (
    <Layout>
      <HeroSection type="Youtube Marketing" />
      <Trusted margin="0" bg="fff" shadow />
      <YoutubeMarket />
      <Vedio />
      <Beneficial />
      <MarketServices />
      <Client />
      <Transform type="Youtube Marketing" />
      <Question />
    </Layout>
  );
};
export default index;
