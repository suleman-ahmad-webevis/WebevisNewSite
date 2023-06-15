// import { Inter } from "next/font/google";

import { Container } from "src/components/Container.styles";
import Designation from "src/components/LandingPage/Designation/Designation";
import Experts from "src/components/LandingPage/Experts/Experts";
import Feed from "src/components/LandingPage/Feed/Feed";
import HomeMain from "src/components/LandingPage/HomeMain/HomeMain";
import Layout from "src/components/Layout/Layout";
import Trusted from "src/components/SocialMedia/Client/Client";
import Solution from "src/components/LandingPage/Solution/Solution";
import Agency from "src/components/LandingPage/DigitalAgency/Agency";

// const inter = Inter({ subsets: ["latin"] });

export default function Home({ pageProps }) {
  return (
    <>
      <Layout>
        <HomeMain {...pageProps} />
        <Trusted bg="white" {...pageProps} />
        {/* <Designation {...pageProps} /> */}
        <Agency />
        <Experts {...pageProps} />
        <Solution />
      </Layout>
    </>
  );
}
