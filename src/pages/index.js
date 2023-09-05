import Experts from "src/components/LandingPage/Experts/Experts";
import HomeMain from "src/components/LandingPage/HomeMain/HomeMain";
import Layout from "src/components/Layout/Layout";
import Trusted from "src/components/SocialMedia/Client/Client";
import Solution from "src/components/LandingPage/Solution/Solution";
import Agency from "src/components/LandingPage/DigitalAgency/Agency";
import Question from "src/components/DigitalMarketing/Question/Question";
import Portfolio from "src/components/LandingPage/Portfolio/Portfolio";
import AgencyCounter from "src/components/LandingPage/DigitalAgency/AgencyCounter";
import { Background } from "src/components/LandingPage/Experts/Experts.styles";
import questionbg from "../assets/images/Homemain/questionbg.png";
// import Api from "src/components/ServiceModal/Api";

export default function Home({ pageProps }) {
  return (
    <>
      <Layout>
        <HomeMain {...pageProps} />
        <Trusted bg="white" {...pageProps} />
        <Background>
          <Agency />
          <AgencyCounter />
          <Experts {...pageProps} />
          <Portfolio />
          <Solution background="#2B2C2F" />
        </Background>
        <Question bg={`url(${questionbg.src})`} />
        {/* <Api /> */}
      </Layout>
    </>
  );
}
