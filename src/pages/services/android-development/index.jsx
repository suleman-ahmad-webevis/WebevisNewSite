import React from "react";
import Hero from "src/components/Android-App/Hero/Hero";
import Layout from "src/components/Layout/Layout";
import Trusted from "src/components/SocialMedia/Client/Client";
const index = () => {
  return (
    <Layout>
      <Hero />
      <Trusted margin="0" />
    </Layout>
  );
};

export default index;
