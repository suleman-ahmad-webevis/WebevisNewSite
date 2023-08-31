import React from "react";
import Layout from "src/components/Layout/Layout";
import Candidates from "src/components/Policy/Candidates/Candidates";
import Cookies from "src/components/Policy/Cookies/Cookies";
import Hero from "src/components/Policy/Hero/Hero";
import Retention from "src/components/Policy/Retention/Retention";

const term = () => {
  return (
    <Layout>
      <Hero heading="Welcome to Webevis!" />
      <Candidates />
      <Cookies />
      <Retention />
    </Layout>
  );
};

export default term;
