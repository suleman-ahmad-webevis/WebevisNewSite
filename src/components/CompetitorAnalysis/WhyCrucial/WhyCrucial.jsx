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
import environment from "../../../../public/assets/images/AICompetitorAnalysis/environment.png";
import advertise from "../../../../public/assets/images/AICompetitorAnalysis/advertise.png";
import { Container } from "src/components/Container.styles";
import { PrimaryButton } from "src/components/Button.styles";

const WhyCrucial = () => {
  return (
    <Container>
      <CrucialContainer>
        <h2>Why Is Competitor Analysis Crucial?</h2>
        <CrucialOptions>
          <ImageWrapper>
            <Image src={environment} alt="Crucial Option" />
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
            <PrimaryButton
              width="209"
              height="50"
              minheight="40"
              radius="45px"
              size="20"
              minsize="18"
              weight="700"
            >
              Start Now
            </PrimaryButton>
          </CrucialCard>
        </CrucialOptions>
        <CrucialOptions>
          <CrucialCard>
            <h3>Paid Advertising Performance Is Weaker</h3>
            <h5>
              With big changes in the ability to target and retarget prospective{" "}
              <br />
              customers online, money spent on Google Ads, Facebook Ads and{" "}
              <br />
              other paid channels are decreasing in effectiveness. <br />
              Now, more than ever, organizations need to find ways to <br />
              understand their competitors, create better messaging, and find
              <br />
              ways to differentiate for the profitable customer acquisition.
            </h5>
            <PrimaryButton
              width="209"
              height="50"
              minheight="40"
              radius="45px"
              size="20"
              minsize="18"
              weight="700"
            >
              Start Now
            </PrimaryButton>
          </CrucialCard>
          <ImageWrapper>
            <Image src={advertise} alt="Crucial Option" />
          </ImageWrapper>
        </CrucialOptions>
      </CrucialContainer>
    </Container>
  );
};

export default WhyCrucial
