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
import ConfidenceImg from "../assets/images/HireDeveloper/Confidence-Img.png";
import { developerData } from "src/components/PagesData/shopifyData";
import { talentData } from "src/components/PagesData/shopifyData";
import { shopifyHire } from "src/components/ExpertPool/HireDedicated/HireData";
import { shopifyPool } from "src/components/HireDeveloper/TalentPool/TalentPoolData";
import { shopifyQuality } from "src/components/HireDeveloper/Qualtity/QualityData";
import { shopifyConfidence } from "src/components/HireDeveloper/Confidence/ConfidenceData";

const hireDeveloper = () => {
  return (
    <div>
      <Layout>
        <HireHero
          heading1="Onboard An Expert"
          heading2="Shopify Developer"
          heading3="Within 24 Hours"
          developerData={developerData}
          type="Shopify Developer"
          detail="Start your Shopify journey confidently by teaming up with our skilled developers, ensuring a strong foundation for your e-commerce success."
          Button="Hire A Shopify Developer Now!"
        />
        <Trusted bg="rgba(241, 241, 241, 1)" margin="0px" />
        <Hire
          heading={"Get Shopify Developers With Webevis In Just 3 Steps"}
          marginTop="100"
          marginBottom="100"
          data={shopifyHire}
        />
        <TalentPool
          talentData={talentData}
          type="Shopify Developer"
          heading="Our Shopify Talent Pool"
          data={shopifyPool}
        />
        <Quality
          heading="Our Shopify Development Services"
          discreption="We provide an extensive variety of Shopify services to help you succeed in the competitive world of e-commerce. Our team of experienced Shopify developers and experts is dedicated to providing top-notch solutions tailored to your unique business needs. Our Shopify services are designed to cater to businesses of all sizes and industries."
          data={shopifyQuality}
        />
        <Developers
          heading="Need A Skilled Shopify Developer To Accelerate Your E-commerce Journey?"
          text="Our team of skilled Shopify developers is here to help you transform your online business into a thriving, customer-centric powerhouse."
          button="Get a Free Consultation!"
        />
        <Confidence
          ConfidenceImg={ConfidenceImg}
          imgWidth="487px"
          contentWidth="50%"
          textWidth="476px"
          paddingRight="20px"
          paddingLeft="20px"
          heading="Rapid, Reliable Team Building"
          text="You can improve the quality of your projects by hiring developers with our hassle-free and superior hiring process. We make onboarding top Shopify talent easy, efficient, and results-driven."
          data={shopifyConfidence}
        />
        <Client />
        <TodayTalent
          type="Shopify Developer"
          title="Experience Shopify Excellence Now!"
          text="Benefit from our experience, delivering stunning, high-performance stores that captivate customers and drive sales."
          button="Start Thriving With Us"
        />
        <Question />
      </Layout>
    </div>
  );
};

export default hireDeveloper;
