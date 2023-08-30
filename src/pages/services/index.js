import Layout from "src/components/Layout/Layout";
import Hero from "src/components/SocialMedia/Services/hero/Hero";
import MarketingServices from "src/components/SocialMedia/Services/MarketingService/MaketingService";
import Client from "src/components/LandingPage/OurClient/Client";
import BenifitsofMarketing from "src/components/SocialMedia/Services/BenifitsofMarketing/index";
import Question from "src/components/HireDeveloper/Question/Question";
import BoostBrand from "src/components/AboutPage/BoostBrand/index";
import Trusted from "src/components/SocialMedia/Client/Client";
export default function index({ pageProps }) {
  return (
    <Layout {...pageProps}>
      <Hero />
      <Trusted margin="0" bg="D9D9D9" />
      {/* <MarketingServices /> */}
      {/* <BenifitsofMarketing /> */}
      {/* <Client /> */}
      {/* <BoostBrand {...pageProps} /> */}
      {/* <Question /> */}
    </Layout>
  );
}
