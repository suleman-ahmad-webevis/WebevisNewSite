import React from "react";
import CareerHero from "src/components/Careers/CareerHero/CareerHero";
import Growth from "src/components/Careers/Growth/Growth";
import Hiring from "src/components/Careers/Hiring/Hiring";
import Layout from "src/components/Layout/Layout";

const careers = () => {
  return (
    <Layout>
      <CareerHero />
      <Growth />
      <Hiring />
    </Layout>
  );
};

export default careers;
