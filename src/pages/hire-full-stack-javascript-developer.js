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
import {
  developerData,
  talentData,
} from "../components/PagesData/fullStakData";
import Developer from "../assets/images/SeoExpert/Developers-Img.png";
import BG from "../assets/images/SeoExpert/Modal-BG.png";
import { fullStackPool } from "src/components/HireDeveloper/TalentPool/TalentPoolData";
import { fullStackQuality } from "src/components/HireDeveloper/Qualtity/QualityData";
import { fullStackConfidence } from "src/components/HireDeveloper/Confidence/ConfidenceData";
import { fullStackQuestionData } from "src/components/HireDeveloper/Question/QuestionData";
const hireDeveloper = () => {
  return (
    <div>
      <Layout>
        <HireHero
          heading1="Get A Competent"
          heading2="Full-Stack Developer"
          heading3="In Just 24 Hours"
          developerData={developerData}
          type="Full Stack Developer"
          detail="With expertise in both front-end and back-end technologies, our team of experienced and skilled Full-Stack Developers is here to provide end-to-end solutions for all your web development needs."
          Button="Hire A Full-Stack Developer Now!"
        />
        <Trusted bg="rgba(241, 241, 241, 1)" margin="0px" />
        <Hire
          heading={
            "Hire Dedicated Full-Stack Developers With Webevis In Just 3 Steps"
          }
          marginTop="100"
          marginBottom="100"
        />
        <TalentPool
          data={fullStackPool}
          heading="Why Webevis Full-Stack Developers"
          talentData={talentData}
          type="Full Stack Developer"
        />
        <Quality
          heading="Our Full-Stack Development Services"
          discreption="At Webevis, we take pride in offering comprehensive Full-Stack development services that empower businesses to create dynamic and efficient digital solutions. Our team of skilled Full-Stack developers combines their expertise in both front-end and back-end technologies to deliver integrated, seamless, and high-performance applications."
          data={fullStackQuality}
        />
        <Developers
          heading="Want To Bring Your Digital Vision To Life With A Versatile And Skilled Professional?"
          text="Our Full-Stack Developers empower your projects with versatile expertise. We provide holistic solutions that resonate with innovation and efficiency, from seamless user interfaces to robust back-end systems."
        />
        <Confidence
          ConfidenceImg={ConfidenceImg}
          imgWidth="487px"
          contentWidth="50%"
          textWidth="476px"
          paddingRight="20px"
          paddingLeft="20px"
          heading="Effortless Talent Acquisition"
          text="Experience the simplicity of hiring a reliable innovation partner—our Full-Stack Developers are ready to create and collaborate easily."
          data={fullStackConfidence}
        />
        <Client />
        <TodayTalent
          type="Full Stack Developer"
          title="Enlist Our Proficient Full-Stack Developers!"
          text="We provide outstanding web solutions that align with your goals and engage your audience."
          button="Hire Expertise Today"
        />
        <Question
          heading="Everything You Need to Know About Hiring Full-Stack Developers"
          detail="Full-stack development encompasses seamlessly blending frontend and backend technologies to create dynamic web applications. Hiring skilled full-stack developers becomes paramount in a world driven by multifaceted digital experiences. This guide equips you with insights, strategies, and considerations to navigate the process effectively."
          data={fullStackQuestionData}
        />
      </Layout>
    </div>
  );
};

export default hireDeveloper;
