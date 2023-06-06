import React from 'react'
import Image from "next/image";
import {
  CrucialButton,
  CrucialButtonDiff,
  CrucialCard,
  CrucialContainer,
  CrucialOptions,
  ImageWrapper,
} from "./WhyCrucialStyles";
import environment from "../../../assets//images/Services/AICompetitorAnalysis/environment.png";
import advertise from "../../../assets//images/Services/AICompetitorAnalysis/advertise.png";
import { ResponsiveImage } from "../HeroSection/HeroStyles";

const WhyCrucial = () => {
  return (
    <CrucialContainer>
      <h2>Why Is Competitor Analysis Crucial?</h2>
      <CrucialOptions>
        <ImageWrapper>
          <ResponsiveImage src={environment} alt="Crucial Option" />
        </ImageWrapper>
        <CrucialCard>
          <h3>Hyper-Competitive Environment</h3>
          <h5>
            All organizations are competing in a hyper-competitive <br />
            online environment. <br />
            Competitor analysis is crucial in helping you understand <br />
            your competitors’ strengths and weaknesses in comparison
            <br />
            to your own so that you can find an opportunity in the
            <br />
            market.
          </h5>
          <CrucialButton>Start Now</CrucialButton>
        </CrucialCard>
      </CrucialOptions>
      <CrucialOptions>
        <CrucialCard>
          <h3>Paid Advertising Performance Is Weaker</h3>
          <h5>
            With big changes in the ability to target and retarget prospective{" "}
            <br />
            customers online, money spent on Google Ads, Facebook Ads and <br />
            other paid channels are decreasing in effectiveness. <br />
            Now, more than ever, organizations need to find ways to <br />
            understand their competitors, create better messaging, and find
            <br />
            ways to differentiate for the profitable customer acquisition.
          </h5>
          <CrucialButtonDiff>Start Now</CrucialButtonDiff>
        </CrucialCard>
        <ImageWrapper>
          <ResponsiveImage src={advertise} alt="Crucial Option" />
        </ImageWrapper>
      </CrucialOptions>
    </CrucialContainer>
  );
};

export default WhyCrucial
