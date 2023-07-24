import React from "react";
import Hero from "src/components/ContactUs/Hero/Hero";
import Layout from "src/components/Layout/Layout";
import Question from "src/components/LandingPage/Question/Question";

const ContactUs = () => {
  return (
    <Layout>
      <Hero />
      <Question bg="none" />
    </Layout>
  );
};

export default ContactUs;
