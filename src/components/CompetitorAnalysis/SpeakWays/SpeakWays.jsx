import React from 'react'
import Image from "next/image";
import {
  ImageWrapper,
  SpeakWaysCard,
  SpeakWaysContainer,
  SpeakWaysOptions,
} from "./SpeakWaysStyles";
import research from "../../../assets//images/Services/AICompetitorAnalysis/research.png";
import monitor from "../../../assets//images/Services/AICompetitorAnalysis/monitor.png";
import customerService from "../../../assets//images/Services/AICompetitorAnalysis/customerService.png";

import { Container } from "src/components/Container.styles";

const SpeakWays = () => {
  return (
    <Container>
      <SpeakWaysContainer>
        <h2>A Few Ways Teams Are Using Speak To Do Competitor Analysis</h2>
        <SpeakWaysOptions>
          <SpeakWaysCard>
            <h3>Market Research</h3>
            <p>
              Use Speak to to unlock people’s opinions on products, trends,
              topics, markets, new stories and more.Use the data Speak helps you
              generate from Amazon Reviews, Twitter, YouTube Videos, Podcasts
              and more over time to see how your competitor’s customer’s are
              changing, what their behaviours are and how they are responding to
              the changing world.
            </p>
          </SpeakWaysCard>
          <ImageWrapper>
            <Image src={research} alt="research" />
          </ImageWrapper>
        </SpeakWaysOptions>
        <SpeakWaysOptions fld>
          <ImageWrapper>
            <Image src={monitor} alt="monitor" />
          </ImageWrapper>

          <SpeakWaysCard>
            <h3>Brand Monitoring</h3>
            <p>
              Whether it’s your brand, competitors or organizations that inspire
              you, Speak competitor analysis can unlock incredible insights. Use
              insights from how people speak about the brands compete against
              and you care about to build new products, improve marketing,
              respond to potential customers and more.
            </p>
          </SpeakWaysCard>
        </SpeakWaysOptions>
        <SpeakWaysOptions>
          <SpeakWaysCard>
            <h3>Customer Service</h3>
            <p>
              With so many conversations flowing across different platforms all
              over the web, it is important to be able to gather, organize, and
              respond to important queries quickly. Speak competitor analysis
              helps you do that by providing the most negative tweets that you
              can prioritize. Additionally, positive sentiment tweets can be
              used as quotes, testimonials and references for prospective
              customers.
            </p>
          </SpeakWaysCard>
          <ImageWrapper>
            <Image src={customerService} alt="customerService" />
          </ImageWrapper>
        </SpeakWaysOptions>
      </SpeakWaysContainer>
    </Container>
  );
};

export default SpeakWays
