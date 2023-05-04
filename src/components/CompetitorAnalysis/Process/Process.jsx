import React from 'react'
import Image from "next/image";
import { ProcessContainer, ProcessCards, ProcessCard } from './ProcessStyles'
import capture from "../../../assets//images/Services/AICompetitorAnalysis/capture.png";
import clean from "../../../assets//images/Services/AICompetitorAnalysis/clean.png";
import analyze from "../../../assets//images/Services/AICompetitorAnalysis/analyze.png";
import enrich from "../../../assets//images/Services/AICompetitorAnalysis/enrich.png";
import share from "../../../assets//images/Services/AICompetitorAnalysis/share.png";

const Process = () => {
  return (
    <ProcessContainer>
      <h2>Our Process</h2>

      <ProcessCards>
        <ProcessCard>
            <Image src={capture} alt="seo" />
            <h3>Capture</h3>
            <p>Automatically capture <br /> relevant data based on <br /> keywords and brands.</p>
        </ProcessCard>
        <ProcessCard>
            <Image src={clean} alt="stats" />
            <h3>Clean</h3>
            <p>Remove any unnecessary <br /> details to prepare for <br /> strong analysis.</p>
        </ProcessCard>
        <ProcessCard>
            <Image src={analyze} alt="problems" />
            <h3>Analyze</h3>
            <p>Analyze audio, video and <br /> text data to find entities <br /> and relationships.</p>
        </ProcessCard>
        <ProcessCard>
            <Image src={enrich} alt="content" />
            <h3>Enrich</h3>
            <p>Enrich the data with <br /> search engine data for <br /> marketing and sales.</p>
        </ProcessCard>
        <ProcessCard>
            <Image src={share} alt="structure" />
            <h3>Share</h3>
            <p>Share interactive reports <br /> with stakeholders to <br /> drive insights and action.</p>
        </ProcessCard>
      </ProcessCards>
    </ProcessContainer>
  )
}

export default Process
