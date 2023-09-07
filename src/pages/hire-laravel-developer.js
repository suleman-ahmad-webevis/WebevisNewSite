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
import { developerData, talentData } from "src/components/PagesData/larvelData";
import ConfidenceImg from "../assets/images/HireDeveloper/Confidence-Img.png";
import { phpHire } from "src/components/ExpertPool/HireDedicated/HireData";
import { larvelPool } from "src/components/HireDeveloper/TalentPool/TalentPoolData";
import { laravelQuality } from "src/components/HireDeveloper/Qualtity/QualityData";
import { laravelConfidence } from "src/components/HireDeveloper/Confidence/ConfidenceData";

const hireDeveloper = () => {
  return (
    <div>
      <Layout>
        <HireHero
          heading1="Bring In A"
          heading2=" Laravel Developer"
          heading3="In Just 24 Hours"
          developerData={developerData}
          type="Laravel Developer"
          detail="Our proficient Laravel developers bring years of hands-on experience, delivering scalable, secure, and feature-rich web applications tailored to your business objectives."
          Button="Hire A Laravel Developer Now!"
        />
        <Trusted bg="rgba(241, 241, 241, 1)" margin="0px" />
        <Hire
          data={phpHire}
          heading={"3 Steps To Hire A Dedicated Laravel Developer With Webevis"}
          marginTop="100"
          marginBottom="100"
        />
        <TalentPool
          heading="Our Laravel Talent Pool"
          talentData={talentData}
          type="Laravel Developer"
          data={larvelPool}
        />
        <Quality
          heading="Our Laravel Development Services"
          discreption="When you choose us to hire a Laravel developer, you gain access to a team with a proven track record of delivering high-quality web applications. Our developers are well-versed in the following services:"
          data={laravelQuality}
        />
        <Developers
          heading="Ready To Take Your Web Application To The Next Level With Laravel?"
          text="Trust our Laravel developers to deliver top-notch solutions tailored to your specific needs with their expertise in creating robust and scalable web applications."
        />
        <Confidence
          ConfidenceImg={ConfidenceImg}
          imgWidth="487px"
          contentWidth="50%"
          textWidth="476px"
          paddingRight="20px"
          paddingLeft="20px"
          heading="Hire With Confidence"
          text="Our straightforward process makes navigating the complex task of hiring a Laravel developer effortless. We handle the intricacies, making sure you find the perfect fit seamlessly."
          data={laravelConfidence}
        />
        <Client />
        <TodayTalent
          type="Laravel Developer"
          title="Collaborate With Seasoned Laravel Professionals!"
          text="Benefit from expertise, collaboration, and top-notch solutions to set your project in motion."
          button="Get Started Now"
        />
        <Question />
      </Layout>
    </div>
  );
};

export default hireDeveloper;
