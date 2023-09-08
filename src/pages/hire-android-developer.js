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
import { developerData, talentData } from "../components/PagesData/androidData";
import ConfidenceImg from "../assets/images/HireDeveloper/Confidence-Img.png";
import { androidHire } from "src/components/ExpertPool/HireDedicated/HireData";
import { androidPool } from "src/components/HireDeveloper/TalentPool/TalentPoolData";
import { androidQuality } from "src/components/HireDeveloper/Qualtity/QualityData";
import { androidConfidence } from "src/components/HireDeveloper/Confidence/ConfidenceData";

const hireDeveloper = () => {
  return (
    <div>
      <Layout type="Android Developer">
        <HireHero
          heading1="Secure An Adept"
          heading2="Android Developer"
          heading3=" Within A Day"
          developerData={developerData}
          type="Android Developer"
          detail="With years of experience and a passion for innovation, we are ready to take on your Android development project and deliver outstanding results."
          Button="Hire An Android Developer!"
        />
        <Trusted bg="rgba(241, 241, 241, 1)" margin="0px" />
        <Hire
          heading={"3 Steps To Hiring Android Developers With Webevis"}
          marginTop="100"
          marginBottom="100"
          data={androidHire}
        />
        <TalentPool
          heading="Our Android Talent Pool"
          talentData={talentData}
          type="Android Developer"
          Button="Hire Android Developer"
          data={androidPool}
        />
        <Quality
          heading="Our Android Development Services"
          discreption="Our comprehensive suite of Android services is designed to meet your unique mobile app development needs. We are committed to delivering high-quality, cross-platform solutions that drive success and user satisfaction."
          data={androidQuality}
        />
        <Developers
          heading="Need Skilled Android Developers To Drive Your App's Success?"
          text="Our experienced Android developers create high-performing, user-friendly apps to elevate your mobile presence and captivate your audience with seamless experiences."
          button="Request a Free Consultation!"
        />
        <Confidence
          ConfidenceImg={ConfidenceImg}
          imgWidth="487px"
          contentWidth="50%"
          textWidth="476px"
          paddingRight="20px"
          paddingLeft="20px"
          heading="Seamless Team Building"
          text="We believe that hiring Android developers should be a simple process. Our streamlined process ensures easy talent acquisition, making it hassle-free to build your dream team."
          data={androidConfidence}
        />
        <Client />
        <TodayTalent
          type="Android Developer"
          title="Elevate Your App Development Journey!"
          text="We ensure your Android app reaches the market faster, gaining an edge in a competitive landscape and maximizing its potential."
          button="Build with Us"
        />
        <Question />
      </Layout>
    </div>
  );
};

export default hireDeveloper;
