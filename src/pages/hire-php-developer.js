import React from "react";
import HireHero from "src/components/HireDeveloper/HireeHero/HireHero";
import Layout from "src/components/Layout/Layout";
import Trusted from "src/components/SocialMedia/Client/Client";
import Hire from "src/components/ExpertPool/HireDedicated/Hire";
import TalentPool from "src/components/HireDeveloper/TalentPool/TalentPool";
import Quality from "src/components/HireDeveloper/Qualtity/Quality";
import Developers from "src/components/HireDeveloper/SkilledDevelopers/Developers";
import Confidence from "src/components/HireDeveloper/Confidence/Confidence";
import Client from "src/components/LandingPage/OurClient/Client";
import TodayTalent from "src/components/HireDeveloper/TodayTalent/TodayTalent";
import Question from "src/components/HireDeveloper/Question/Question";
import { developerData } from "src/components/PagesData/phpData";
import { talentData } from "src/components/PagesData/phpData";
import ConfidenceImg from "../assets/images/HireDeveloper/Confidence-Img.png";
import { phpPool } from "src/components/HireDeveloper/TalentPool/TalentPoolData";
import { phpQuality } from "src/components/HireDeveloper/Qualtity/QualityData";
import { phpConfidence } from "src/components/HireDeveloper/Confidence/ConfidenceData";

const hireDeveloper = () => {
  return (
    <div>
      <Layout>
        <HireHero
          heading1="Onboard A"
          heading2="PHP Developer"
          heading3=" In Just 24 Hours"
          developerData={developerData}
          type="Php Developer"
          detail="Our dedicated PHP developers bring proficiency, innovation, and reliability to your projects. Unlock dynamic web solutions tailored to your needs, driven by expertise and guided by excellence."
          Button="Hire A PHP Developer Now!"
        />
        <Trusted bg="rgba(241, 241, 241, 1)" margin="0px" />
        <Hire
          heading={"Hire Dedicated PHP Developers With Webevis In Just 3 Steps"}
          marginTop="100"
          marginBottom="100"
        />
        <TalentPool
          talentData={talentData}
          type="Php Developer"
          heading="Why Hire Our Developers "
          data={phpPool}
        />
        <Quality
          heading="Our PHP Development Services"
          discreption="Our PHP services combine cutting-edge technology with a customer-centric approach. Our team of skilled PHP developers is equipped to meet your diverse needs, from custom web applications to e-commerce solutions. We are committed to delivering results that exceed your expectations."
          data={phpQuality}
        />
        <Developers
          heading="Want Reliable PHP Development Services For Tailored Solutions That Drive Success?"
          text="Discover the potential of our PHP developers, offering custom solutions that align with your business objectives and propel your success."
        />
        <Confidence
          ConfidenceImg={ConfidenceImg}
          imgWidth="487px"
          contentWidth="50%"
          textWidth="476px"
          paddingRight="20px"
          paddingLeft="20px"
          heading="Your Talent Solution"
          text="Our process ensures a seamless transition as talented developers integrate into your projects, enhancing productivity and project momentum."
          data={phpConfidence}
        />
        <Client />
        <TodayTalent
          type="Php Developer"
          title="Get Your PHP Dream Team Now!"
          text="Our team of experienced PHP developers is committed to delivering excellence in every project we undertake."
          button="Start Building with PHP Pros!"
        />
        <Question />
      </Layout>
    </div>
  );
};

export default hireDeveloper;
