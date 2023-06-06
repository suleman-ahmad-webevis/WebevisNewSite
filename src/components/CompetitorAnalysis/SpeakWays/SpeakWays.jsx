import React from 'react'
import Image from "next/image";
import { SpeakWaysButton, SpeakWaysButtonDiff, SpeakWaysCard, SpeakWaysContainer, SpeakWaysOptions } from './SpeakWaysStyles'
import research from "../../../assets//images/Services/AICompetitorAnalysis/research.png";
import monitor from "../../../assets//images/Services/AICompetitorAnalysis/monitor.png";
import customerService from "../../../assets//images/Services/AICompetitorAnalysis/customerService.png";
import { ImageWrapper } from "../WhyCrucial/WhyCrucialStyles";

const SpeakWays = () => {
  return (
    <SpeakWaysContainer>
      <h2>
        A Few Ways Teams Are Using Speak <br /> To Do Competitor Analysis
      </h2>
      <SpeakWaysOptions>
        <SpeakWaysCard>
          <h3>Market Research</h3>
          <p>
            Use Speak to to unlock people’s opinions on products, trends,
            topics, markets, new <br />
            stories and more.Use the data Speak helps you generate from Amazon
            Reviews, Twitter, <br />
            YouTube Videos, Podcasts and more over time to see how your
            competitor’s customer’s <br />
            are changing, what their behaviours are and how they are responding
            to the changing
            <br />
            world.
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
            you, Speak <br />
            competitor analysis can unlock incredible insights. <br />
            Use insights from how people speak about the brands compete against
            and you care <br />
            about to build new products, improve marketing, respond to potential
            customers <br />
            and more.
          </p>
        </SpeakWaysCard>
      </SpeakWaysOptions>
      <SpeakWaysOptions>
        <SpeakWaysCard>
          <h3>Customer Service</h3>
          <p>
            With so many conversations flowing across different platforms all
            over the web, it is <br />
            important to be able to gather, organize, and respond to important
            queries quickly. <br />
            Speak competitor analysis helps you do that by providing the most
            negative tweets that <br />
            you can prioritize. Additionally, positive sentiment tweets can be
            used as quotes,
            <br />
            testimonials and references for prospective customers.
          </p>
        </SpeakWaysCard>
        <ImageWrapper>
          <Image src={customerService} alt="customerService" />
        </ImageWrapper>
      </SpeakWaysOptions>
    </SpeakWaysContainer>
  );
};

export default SpeakWays
