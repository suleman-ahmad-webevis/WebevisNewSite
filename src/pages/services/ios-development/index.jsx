import React from "react";
import Layout from "src/components/Layout/Layout";
import Question from "src/components/HireDeveloper/Question/Question";
import Trusted from "src/components/SocialMedia/Client/Client";
import Client from "src/components/LandingPage/OurClient/Client";
import Hero from "src/components/IosDevelopment/heroSection/Hero";
import Services from "src/components/IosDevelopment/ioServices/Services";
import Business from "src/components/IosDevelopment/ioBusiness/Business";
import Company from "src/components/IosDevelopment/ioCompany/Company";
import Expert from "src/components/IosDevelopment/ioExpert/Expert";
import Process from "src/components/IosDevelopment/ioProcess/Process";
const index = () => {
  return (
    <Layout>
      <Hero />
      <Trusted margin="0px" bg="#fff" />7
      <Services/>
      <Business/>
      <Company/>
      <Process/>
      <Client />
      <Expert/>
      <Question />
    </Layout>
  );
};

export default index;
