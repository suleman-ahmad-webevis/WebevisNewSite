import React from "react";
import Layout from "src/components/Layout/Layout";
import OurWork from "src/components/PortfolioPage/OurWork/OurWork";
import Portfolio from "src/components/LandingPage/Portfolio/Portfolio";

const Portfolios = () => {
  return (
    <Layout>
      <OurWork
        heading="Our Work"
        para="We specialize in our field and strive for perfection in everything
            we design for our clients, as customer satisfaction is our top
            priority. Webevis assures you of dependable and quick web and app
            development, as well as high-quality standards."
      />
      <Portfolio
        headline="Our Latest Projects"
        para="Read more about the engaging, innovative, and efficient solutions that help our clients reach their goals and build trust with their customers."
      />
    </Layout>
  );
};

export default Portfolios;
