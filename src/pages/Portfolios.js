import React from "react";
import Layout from "src/components/Layout/Layout";
import OurWork from "src/components/PortfolioPage/OurWork/OurWork";
import Portfolio from "src/components/LandingPage/Portfolio/Portfolio";
import PortfolioClients from "src/components/PortfolioPage/PortfolioClients/PortfolioClients";
import Trusted from "src/components/SocialMedia/Client/Client";
import MessageForm from "src/components/PortfolioPage/MessageForm/MessageForm";

const Portfolios = ({ pageProps }) => {
  return (
    <Layout>
      <OurWork
        heading="Our Work"
        para="We specialize in our field and strive for perfection in everything
            we design for our clients, as customer satisfaction is our top
            priority. Webevis assures you of dependable and quick web and app
            development, as well as high-quality standards."
      />
      <Portfolio />
      <PortfolioClients
        heading="CLIENTS"
        para="Our unique blend of strategic thinking and tactical expertise enables us to create performance-led marketing campaigns and highly effective websites."
      />
      <div className="sliderContainer" style={{ marginBottom: "60px" }}>
        <Trusted
          bg="white"
          ti="translateX(0)"
          tf="translateX(-1200px)"
          {...pageProps}
        />
        <Trusted
          bg="white"
          ti="translateX(-1200px)"
          tf="translateX(0)"
          {...pageProps}
        />
        {/* <Trusted bg="white" {...pageProps} />
        <Trusted
          bg="white"
          ti="translateX(-1200px)"
          tf="translateX(0)"
          {...pageProps}
        /> */}
      </div>

      <MessageForm />
    </Layout>
  );
};

export default Portfolios;
