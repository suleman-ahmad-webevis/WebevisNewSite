import React from "react";
import Layout from "src/components/Layout/Layout";
import AppDev from "src/components/MobileApp/AppDev/AppDev";
import AppService from "src/components/MobileApp/AppService/AppService";
import Benefit from "src/components/MobileApp/Benefit/Benefit";
import Company from "src/components/MobileApp/Company/Company";
import DevCompany from "src/components/MobileApp/DevCompany/DevCompany";
import Hero from "src/components/MobileApp/Hero/Hero";
import Scope from "src/components/MobileApp/Scope/Scope";
import Technology from "src/components/MobileApp/Technology/Technology";
import Trusted from "src/components/SocialMedia/Client/Client";
import Client from "src/components/LandingPage/OurClient/Client";
import Together from "src/components/MobileApp/Together/Together";
import Question from "src/components/HireDeveloper/Question/Question";
const index = () => {
  return (
    <Layout>
      <Hero type="Android Development" />
      <Trusted margin="0" />
      <AppService />
      <AppDev />
      <Company />
      <Benefit />
      <DevCompany />
      <Scope />
      <Technology
        heading="Technologies We Use"
        Text="We work with cutting-edge technologies designed to solve your product requirements. Focus on finding solutions for your business needs while we handle the technical aspect."
      />
      <Client marginTop="0" marginBottom="0" />
      <Together />
      <Question />
    </Layout>
  );
};

export default index;
