import React from "react";
import GameChange from "src/components/Graphic/GameChanging/GameChange";
import GraphicDesign from "src/components/Graphic/GraphicDesign/GraphicDesign";
import Hero from "src/components/Graphic/Hero/Hero";
import Hire from "src/components/Graphic/Hire/Hire";
import Methdology from "src/components/Graphic/Methdology/Methdology";
import Tools from "src/components/Graphic/Tools/Tools";
import Question from "src/components/HireDeveloper/Question/Question";
import Client from "src/components/LandingPage/OurClient/Client";
import Layout from "src/components/Layout/Layout";
import Trusted from "src/components/SocialMedia/Client/Client";

const graphic = () => {
  return (
    <Layout>
      <Hero type="Graphic Designing" />
      <Trusted margin="0" />
      <GameChange type="Graphic Designing" />
      <GraphicDesign />
      <Tools />
      <Methdology />
      <Client />
      <Hire />
      <Question />
    </Layout>
  );
};

export default graphic;
