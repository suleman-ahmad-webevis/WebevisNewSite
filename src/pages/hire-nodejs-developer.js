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
import { developerData, talentData } from "../components/PagesData/nodeJsData";
import ConfidenceImg from "../assets/images/HireDeveloper/Confidence-Img.png";
import { nodePool } from "src/components/HireDeveloper/TalentPool/TalentPoolData";
import { nodeQuality } from "src/components/HireDeveloper/Qualtity/QualityData";
import { nodeConfidence } from "src/components/HireDeveloper/Confidence/ConfidenceData";
import { nodeQuestionData } from "src/components/HireDeveloper/Question/QuestionData";

const hireDeveloper = () => {
  return (
    <div>
      <Layout>
        <HireHero
          heading1="Hire A Highly skilled"
          heading2="Node.js Developer"
          heading3=" In Just 24 Hours"
          developerData={developerData}
          type="NodeJs Developer"
          Button="Hire A Node.js Developer Now!"
          detail="Empower your project with a Node.js developer who excels in API development, scalability, and real-time applications, ensuring optimal results."
        />
        <Trusted bg="rgba(241, 241, 241, 1)" margin="0px" />
        <Hire
          heading={
            "Hire Dedicated Node.js Developers With Webevis In Just 3 Steps"
          }
          marginTop="100"
          marginBottom="100"
        />
        <TalentPool
          data={nodePool}
          heading="Why Webevis Node.js Developers"
          talentData={talentData}
          type="React Js Developer"
        />
        <Quality
          heading="Our Node.js Development Services"
          discreption="Partner with us to leverage the full potential of Node.js and propel your digital initiatives to new heights. Our comprehensive range of services is designed to cater to your diverse business needs. Our skilled Node.js developers are equipped to handle every aspect of your project, ensuring seamless performance, innovation, and user engagement."
          data={nodeQuality}
        />
        <Developers
          heading="Seeking A Proficient Node.js Developer To Bring Your Web Applications To Life?"
          text="Gain insights into our offerings and explore how our Node.js developers can propel your projects forward with innovative web solutions."
        />
        <Confidence
          ConfidenceImg={ConfidenceImg}
          imgWidth="487px"
          contentWidth="50%"
          textWidth="476px"
          paddingRight="20px"
          paddingLeft="20px"
          heading="Streamlined Developer Acquisition"
          text="Experience the ease of hiring. Our effort-free Node.js hiring process ensures you find the right developers quickly, ready to contribute seamlessly to your project."
          data={nodeConfidence}
        />
        <Client />
        <TodayTalent
          type="NodeJs Developer"
          title="Hire Our Expert Node.js Developer Today!"
          text="Reach out to hire Node.js developers committed to achieving your project's goals together."
          button="Enlist Top Talent"
        />
        <Question
          heading="Everything You Need to Know About Hiring Node.js Developers"
          detail="Node.js stands at the forefront of the digital revolution, driving growth across the software industry. As technology advances into AI, hybrid cloud, and beyond, Node.js continues to lead, empowering efficient development. Explore the following to learn how hiring Node.js developers propels businesses forward, meeting demands swiftly and effectively."
          data={nodeQuestionData}
        />
      </Layout>
    </div>
  );
};

export default hireDeveloper;
