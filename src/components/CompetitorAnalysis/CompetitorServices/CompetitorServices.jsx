import React from 'react'
import Image from "next/image";
import { CompetitorServicesContainer, CompetitorServicesCards, CompetitorService } from './CompetitorServicesStyles'
import analytics from "../../../assets//images/Services/AICompetitorAnalysis/analytics.png";
import online from "../../../assets//images/Services/AICompetitorAnalysis/online.png";
import audit from "../../../assets//images/Services/AICompetitorAnalysis/audit.png";
import improvement from "../../../assets//images/Services/AICompetitorAnalysis/improvement.png";
import virtual from "../../../assets//images/Services/AICompetitorAnalysis/virtual.png";
import lead from "../../../assets//images/Services/AICompetitorAnalysis/lead.png";
import { data } from "./CompetitorData";
import { ResponsiveImage } from "../HeroSection/HeroStyles";
import { Container } from "src/components/Container.styles";

const CompetitorServices = () => {
  return (
    <Container>
      <CompetitorServicesContainer>
        <h2>Service In AI Competitor Analyis</h2>

        <CompetitorServicesCards>
          {data.map((elem, ind) => (
            <CompetitorService key={ind}>
              <ResponsiveImage
                src={elem.image}
                alt={elem.text}
                max={elem.max}
                min={elem.min}
                maxh={elem.maxh}
                minh={elem.minh}
              />
              <h3>{elem.text}</h3>
            </CompetitorService>
          ))}
        </CompetitorServicesCards>
      </CompetitorServicesContainer>
    </Container>
  );
};

export default CompetitorServices
