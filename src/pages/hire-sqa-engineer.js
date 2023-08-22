import React from "react";
import Hire from "src/components/ExpertPool/HireDedicated/Hire";
import HireHero from "src/components/HireDeveloper/HireeHero/HireHero";
import TalentPool from "src/components/HireDeveloper/TalentPool/TalentPool";
import Layout from "src/components/Layout/Layout";
import Trusted from "src/components/SocialMedia/Client/Client";
import { seoData, seoTalentData } from "../components/PagesData/seoExpertData";
import HireSeo from "src/components/SeoExpert/hireSeo/hireSeo";
import Activities from "src/components/SeoExpert/SeoActivities/Activities";
import ExpertForm from "src/components/SeoExpert/ExpertForm/ExpertForm";
import Platforms from "src/components/SeoExpert/Platforms/Platforms";
import Confidence from "src/components/HireDeveloper/Confidence/Confidence";
import BeniftIMG from "../assets/images/SeoExpert/Benifits-img.png";
import Question from "src/components/HireDeveloper/Question/Question";
import Developers from "src/components/HireDeveloper/SkilledDevelopers/Developers";

const SeoExperts = () => {
  return (
    <div>
      <Layout>
        <HireHero
          heading1="Hire Professional"
          heading2="SQA Engineer"
          developerData={seoData}
          type="SQA Engineer"
          Button="Hire SQA Engineer"
        />
        <Trusted bg="rgba(241, 241, 241, 1)" margin="0px" />
        <Hire
          heading={"Hire remote developers in 3 easy steps with Webevis"}
          marginTop="100"
          marginBottom="100"
        />
        <TalentPool
          heading="Top Seo Experts"
          talentData={seoTalentData}
          type="SQA Engineer"
        />
        <HireSeo />
        <Activities />
        <ExpertForm />
        <Platforms />
        <Confidence
          ConfidenceImg={BeniftIMG}
          paddingRight="20px"
          imgWidth="682px"
          contentWidth="630px"
          heading="Benefits of Hiring Seo Experts"
          text="Grow your business with the professional and expert team of digital marketers that uses a result-driven approach to grow your business."
          white1="improved Search Engine Rankings"
          white2="Targeted Traffic and Audience"
          white3="Long-Term Strategy"
          white4="Stay Updated with Algorithm Changes"
          green1="ROI and Measurable Results"
          green2="Better User Experience"
          green3="Local SEO Optimization"
          green4="ROI and Measurable Results"
          padding="0 15px"
        />
        <Developers
          heading="Schedule an Interview & Hire Seo Expert Now"
          text="Our certified experts are extremely knowledgeable, experienced, and well-equipped to create robust apps that address the various business demands of all of our clients throughout the world."
        />
        <Question />
      </Layout>
    </div>
  );
};

export default SeoExperts;
