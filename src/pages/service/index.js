// import { Inter } from "next/font/google";

import Layout from "src/components/Layout/Layout";
import Counter from "src/components/Services/counter/Counter";
// import Hero from "src/components/SocialMedia/Services/hero/Hero";
import Hero from "src/components/SocialMedia/Services/hero/Hero";
import { Wrapper } from "src/components/Services/heroSection/Hero.styles";
import Meeting from "src/components/Services/meeting/Meeting";
import ChooseUs from "src/components/Services/whyChooseUs/ChooseUs";
import CustomMobileServices from "./CustomMobileServices";

import Trusted from "src/components/AWAServices/Slider/Trusted";
import MarketingServices from "src/components/SocialMedia/Services/MarketingService/MaketingService";
// import Client from "src/components/OurClient/Client";
import Client from "src/components/LandingPage/OurClient/Client";
import HireSeo from "src/components/SeoExpert/hireSeo/hireSeo";
// import Question from "src/components/DigitalMarketing/Question/Question";
import BenifitsofMarketing from "src/components/SocialMedia/Services/BenifitsofMarketing/index"
import Question from "src/components/HireDeveloper/Question/Question";
import BoostBrand from "src/components/AboutPage/BoostBrand/index";
export default function index({ pageProps }) {
  console.log("first");
  return (
    <Layout {...pageProps}>
      <Wrapper>
        {/* <Hero /> */}
        <Hero />
        <Trusted />


        {/* <CustomMobileServices /> our services mobile & desktop component */}
        {/* <Counter />
        <ChooseUs />
        <Meeting /> */}


        <MarketingServices />
        <BenifitsofMarketing />
        <Client />
        <BoostBrand {...pageProps} />
        {/* <HireSeo /> */}
        <Question />
      </Wrapper>
    </Layout>
  );
}
