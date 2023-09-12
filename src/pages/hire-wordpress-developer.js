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
} from "../components/PagesData/wordpressData";
import { wordPressHire } from "src/components/ExpertPool/HireDedicated/HireData";
import { wordPressPool } from "src/components/HireDeveloper/TalentPool/TalentPoolData";
import { wordPressQuality } from "src/components/HireDeveloper/Qualtity/QualityData";
import { wordPressConfidence } from "src/components/HireDeveloper/Confidence/ConfidenceData";
import { wordpressQuestionData } from "src/components/HireDeveloper/Question/QuestionData";

const hireDeveloper = () => {
  return (
    <div>
      <Layout>
        <HireHero
          heading1="Recruit A Dream"
          heading2=" WordPress Developer"
          heading3="In Just 24 Hours"
          developerData={developerData}
          type="Wordpress Developer"
          detail="Our WordPress experts craft responsive websites that adapt flawlessly across devices, creating a consistent and captivating user experience that drives results for your business."
          Button="Hire A WordPress Developer Now!"
        />
        <Trusted bg="rgba(241, 241, 241, 1)" margin="0px" />
        <Hire
          heading={
            "3 Steps To Hire A Dedicated WordPress Developer With Webevis"
          }
          marginTop="100"
          marginBottom="100"
          data={wordPressHire}
        />
        <TalentPool
          heading="Our WordPress Talent Pool"
          data={wordPressPool}
          talentData={talentData}
          type="Wordpress Developer"
        />
        <Quality
          heading="Our WordPress Development Services"
          discreption="Our comprehensive suite of top-tier WordPress services is designed to elevate your online presence, engage your audience, and drive business growth. With a deep understanding of the WordPress platform and its capabilities, we bring your digital aspirations to life."
          data={wordPressQuality}
        />
        <Developers
          heading="Looking for Expertise to Make Your WordPress Dreams Come True?"
          text="Our team of skilled WordPress experts is committed to delivering exceptional solutions that seamlessly blend creativity, functionality, and innovation."
        />
        <Confidence
          ConfidenceImg={ConfidenceImg}
          imgWidth="487px"
          contentWidth="50%"
          textWidth="476px"
          paddingRight="20px"
          paddingLeft="20px"
          heading="Expertise Made Accessible"
          text="Hiring top-tier WordPress developers has never been easier. We simplify the process, ensuring you find the perfect match for your project without the usual hassles."
          data={wordPressConfidence}
        />
        <Client />
        <TodayTalent
          type="Wordpress Developer"
          title="Transform with Expert WordPress Developers!"
          text="We craft exceptional websites that captivate, engage, and succeed in the digital realm."
          button="Connect for Success"
        />
        <Question
          heading="Hiring WordPress Developers: Work With The Best"
          detail="WordPress, a versatile content management system (CMS), revolutionizes website creation. Its open-source nature and user-friendly interface enable individuals and businesses to craft dynamic web platforms effortlessly. Now, we will navigate how to find skilled professionals who can shape your ideal website."
          data={wordpressQuestionData}
        />
      </Layout>
    </div>
  );
};

export default hireDeveloper;
