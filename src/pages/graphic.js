import React from "react";
import GameChange from "src/components/Graphic/GameChanging/GameChange";
import Hero from "src/components/Graphic/Hero/hero";
import Layout from "src/components/Layout/Layout";
import Trusted from "src/components/SocialMedia/Client/Client";

const graphic = () => {
  return (
    <Layout>
      <Hero />
      <Trusted margin="0" />
      <GameChange />
    </Layout>
  );
};

export default graphic;
