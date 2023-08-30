import React from "react";
import Layout from "src/components/Layout/Layout";
import Candidates from "src/components/Policy/Candidates/Candidates";
import Cookies from "src/components/Policy/Cookies/Cookies";
import Hero from "src/components/Policy/Hero/Hero";
import Retention from "src/components/Policy/Retention/Retention";

const policy = () => {
  return (
    <Layout>
      <Hero heading="Privacy Policy" />
      <Candidates />
      <Cookies />
      <Retention />
    </Layout>
  );
};

export default policy;
