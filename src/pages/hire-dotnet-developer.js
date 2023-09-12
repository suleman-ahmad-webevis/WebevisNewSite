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
import Developer from "../assets/images/SeoExpert/Developers-Img.png";
import BG from "../assets/images/SeoExpert/Modal-BG.png";
import {
  dotNetData,
  dotNetSliderData,
} from "src/components/PagesData/dotNetData";
import { dotNetHire } from "src/components/ExpertPool/HireDedicated/HireData";
import { dotNetPool } from "src/components/HireDeveloper/TalentPool/TalentPoolData";
import { dotNetQuality } from "src/components/HireDeveloper/Qualtity/QualityData";
import { dotNetConfidence } from "src/components/HireDeveloper/Confidence/ConfidenceData";
import { dotNetQuestionData } from "src/components/HireDeveloper/Question/QuestionData";
const hireDeveloper = () => {
  return (
    <div>
      <Layout>
        <HireHero
          heading1="Onboard A Premium"
          heading2=".NET Developer"
          heading3="In Just 24 Hours"
          developerData={dotNetData}
          type=".Net Developer"
          detail="With a passion for coding, a commitment to excellence, and a deep understanding of the .NET framework, we are the experts you need to succeed in today's competitive tech landscape."
          Button="Hire A .NET Developer Now"
        />
        <Trusted bg="rgba(241, 241, 241, 1)" margin="0px" />
        <Hire
          heading={"3 Steps To Hire A Dedicated .NET Developer With Webevis"}
          marginTop="100"
          marginBottom="100"
          data={dotNetHire}
        />
        <TalentPool
          heading="Our .NET Talent Pool"
          talentData={dotNetSliderData}
          type=".Net Developer"
          data={dotNetPool}
        />
        <Quality
          heading="Our .NET Development Services"
          discreption="We offer a wide range of .NET services designed to cater to your diverse software development needs. With our team of experienced and skilled .NET developers, we are committed to delivering high-quality solutions that drive your business forward."
          data={dotNetQuality}
        />
        <Developers
          heading="Ready to hire a .NET developer from our talented team?"
          text="Fuel your business success with our exceptional .NET developers. We provide superior skills, adaptable solutions, and a commitment to your goals."
          button="Request a Free Consultation!"
        />
        <Confidence
          ConfidenceImg={ConfidenceImg}
          imgWidth="487px"
          contentWidth="50%"
          textWidth="476px"
          paddingRight="20px"
          paddingLeft="20px"
          heading="Your Developer, Your Way"
          text="We tailor the hiring process to meet your unique needs. We allow you to choose a developer who perfectly aligns with your project requirements and vision."
          data={dotNetConfidence}
        />
        <Client />
        <TodayTalent
          type=".Net Developer"
          title="Build Stunning .NET-Powered Apps Today!"
          text="Our commitment is to provide innovative and reliable .NET solutions that empower your business."
          button="Let's Begin"
        />
        <Question
          heading="Hiring .NET Developers: Work With The Best"
          detail=".NET development is a versatile framework launched by Microsoft in 2002, initially known as NGWS. With approximately 6 million developers worldwide and widespread adoption by tech giants like Dell, Accenture, and TCS, .NET is a powerhouse for web, mobile, and Windows-based applications. Its increasing demand is evident in a job growth rate of 13%, far above the industry average of 5%. "
          subdetail="However, finding the right .NET developer can be challenging due to diversity and specialization. This guide will give you everything you need about hiring freelance .NET developers to ensure the perfect fit for your project."
          data={dotNetQuestionData}
        />
      </Layout>
    </div>
  );
};

export default hireDeveloper;
