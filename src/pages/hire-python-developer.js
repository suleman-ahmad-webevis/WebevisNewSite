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
import { developerData, talentData } from "../components/PagesData/pythonData";
import ConfidenceImg from "../assets/images/HireDeveloper/Confidence-Img.png";

const hireDeveloper = () => {
  return (
    <div>
      <Layout>
        <HireHero
          heading1="Hire A Seasoned"
          heading2="Python Developer"
          heading3="Within 24 Hours"
          developerData={developerData}
          type="Python Developer"
          detail="Turn your concepts into reality with our talented Python engineers. Custom solutions, collaborative approach, and a commitment to excellence."
          Button="Hire A Python Developer Now!"
        />
        <Trusted bg="rgba(241, 241, 241, 1)" margin="0px" />
        <Hire
          heading={"Get Python Developers With Webevis In Just 3 Steps"}
          marginTop="100"
          marginBottom="100"
        />
        <TalentPool talentData={talentData} type="Python Developer" />
        <Quality />
        <Developers
          heading="Looking for skilled and dedicated developers to power your project? "
          text="Our certified experts are extremely knowledgeable, experienced, and well-equipped to create robust apps that address the various business demands of all of our clients throughout the world."
        />
        <Confidence
          ConfidenceImg={ConfidenceImg}
          imgWidth="487px"
          contentWidth="50%"
          textWidth="476px"
          paddingRight="20px"
          paddingLeft="20px"
          heading="Hire With Confidence"
          text="We understand that recruitment of high-caliber developers in Lactam is a challenge for US companies, so we cover everything from the sourcing process to background checks"
          white1="No Irrelevant Candidates"
          white2="No Gig-oriented Freelancers"
          white3="No Scammers or Hoppers"
          white4="No Compromise on Culture"
          green1="Deeply-Vetted Developers"
          green2="Engaged and Motivated Teammates"
          green3="Deep Background Checks"
          green4="Robust Communication & Soft Skills"
        />
        <Client />
        <TodayTalent type="Python Developer" />
        <Question />
      </Layout>
    </div>
  );
};

export default hireDeveloper;
