import React from "react";
import Layout from "src/components/Layout/Layout";
import HeroSection from "src/components/AWAServices/HeroSection/HeroSection";
import Trusted from "src/components/AWAServices/Slider/Trusted";
import AiServices from "src/components/AWAServices/AiServices/AiServices";
import AilWebsiteAudit from "src/components/AWAServices/AiWebsiteAudit/AilWebsiteAudit";
import Boost from "src/components/AWAServices/BoostOptions/Boost";
import BoostSteps from "src/components/AWAServices/BoostSteps/BoostSteps";
import FreeWebsite from "src/components/AWAServices/FreeWebsite/FreeWebsite";
<<<<<<< HEAD
import Client from "src/components/AWAServices/OurClient/Client";
=======
import Client from "src/components/OurClient/Client";
>>>>>>> a03ceb0f07e1c0d0952dd8ae02d85b415f36951c
import Explore from "src/components/explorecurrent/Explore";

const index = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <Trusted />
        <AiServices />
        <AilWebsiteAudit />
        <Boost />
        <BoostSteps />
        {/* <Explore /> */}
        <FreeWebsite />
        <Client />
      </Layout>
    </>
  );
};

export default index;
