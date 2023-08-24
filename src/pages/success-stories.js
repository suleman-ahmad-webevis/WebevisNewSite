import React from "react";
import Layout from "src/components/Layout/Layout";
import OurWork from "src/components/PortfolioPage/OurWork/OurWork";
import Portfolio from "src/components/LandingPage/Portfolio/Portfolio";
import PortfolioClients from "src/components/PortfolioPage/PortfolioClients/PortfolioClients";
import Trusted from "src/components/SocialMedia/Client/Client";
import MessageForm from "src/components/PortfolioPage/MessageForm/MessageForm";
import PortfolioQuality from "src/components/PortfolioPage/PotfolioQualtity/PortfolioQuality";

const Portfolios = ({ pageProps }) => {
  return (
    <Layout>
      <OurWork
        heading="Our Sucess Stories"
        para="We take pride in every solution we create – each one a testament to our commitment to pushing boundaries and delivering tangible results. We work closely with our clients to understand their unique goals and challenges. Our portfolio covers various industries and verticals, from web development and mobile apps to digital marketing and e-commerce solutions."
      />
      <Portfolio />
      <PortfolioClients
        heading="Our Approach To Excellence"
        para="Every project in our portfolio is a story of collaboration, creativity, and technical mastery. Each success story represents our dedication to transforming businesses through cutting-edge technology and strategic digital strategies."
      />
      <div className="sliderContainer" style={{ marginBottom: "60px" }}>
        <PortfolioQuality />
      </div>

      <MessageForm />
    </Layout>
  );
};

export default Portfolios;
