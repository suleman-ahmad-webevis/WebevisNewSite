// import { Inter } from "next/font/google";

import Layout from "src/components/Layout/Layout";
import Counter from "src/components/Services/counter/Counter";
import Hero from "src/components/Services/heroSection/Hero";
import { Wrapper } from "src/components/Services/heroSection/Hero.styles";
import Meeting from "src/components/Services/meeting/Meeting";
import ChooseUs from "src/components/Services/whyChooseUs/ChooseUs";
import CustomMobileServices from "./CustomMobileServices";

export default function index({ pageProps }) {
  console.log("first");
  return (
    <Layout {...pageProps}>
      <Wrapper>
        <Hero />
        <CustomMobileServices /> {/* our services mobile & desktop component */}
        <Counter />
        <ChooseUs />
        <Meeting />
      </Wrapper>
    </Layout>
  );
}
