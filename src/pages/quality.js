import React from "react";
import Layout from "src/components/Layout/Layout";
import Hero from "src/components/Policy/Hero/Hero";
import Quality from "src/components/Quality/Quality";
const quality = () => {
  return (
    <Layout>
      <Hero
        heading="Quality & Information Security Management System Policy"
        display="none"
      />
      <Quality />
    </Layout>
  );
};

export default quality;
