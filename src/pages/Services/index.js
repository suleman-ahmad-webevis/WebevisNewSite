// import { Inter } from "next/font/google";

import Layout from "src/components/Layout/Layout";
import Counter from "src/components/Services/counter/Counter";
import Hero from "src/components/Services/heroSection/Hero";
import { Wrapper } from "src/components/Services/heroSection/Hero.styles";
import Meeting from "src/components/Services/meeting/Meeting";
import OurServices from "src/components/Services/ourServices/OurServices";
import OurServicesMobile from "src/components/Services/ourServices/OurservicesMobile";
import ChooseUs from "src/components/Services/whyChooseUs/ChooseUs";

export default function index({ pageProps }) {
  return (
    <>
      <Layout {...pageProps}>
        <Wrapper>
          <Hero />
          <OurServices />
          {/* <OurServicesMobile /> */}
          <Counter />
          <ChooseUs />
          <Meeting />
        </Wrapper>
      </Layout>
    </>
  );
}
