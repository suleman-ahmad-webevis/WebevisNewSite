import React from 'react'
import Image from "next/image";
import { CompetitorServicesContainer, CompetitorServicesCards, CompetitorService } from './CompetitorServicesStyles'
import analytics from "../../../assets//images/Services/AICompetitorAnalysis/analytics.png";
import online from "../../../assets//images/Services/AICompetitorAnalysis/online.png";
import audit from "../../../assets//images/Services/AICompetitorAnalysis/audit.png";
import improvement from "../../../assets//images/Services/AICompetitorAnalysis/improvement.png";
import virtual from "../../../assets//images/Services/AICompetitorAnalysis/virtual.png";
import lead from "../../../assets//images/Services/AICompetitorAnalysis/lead.png";

const CompetitorServices = () => {
  return (
    <CompetitorServicesContainer>
      <h2>Service In AI Competitor Analyis</h2>

      <CompetitorServicesCards>
        <CompetitorService>
            <Image src={analytics} alt="seo" />
            <h3>Competitors Analysis <br /> Section</h3>
        </CompetitorService>
        <CompetitorService>
            <Image src={online} alt="stats" />
            <h3>Online Presence Ranking</h3>
        </CompetitorService>
        <CompetitorService>
            <Image src={audit} alt="problems" />
            <h3>Seo Audit</h3>
        </CompetitorService>
        <CompetitorService>
            <Image src={improvement} alt="content" />
            <h3>Areas of improvement</h3>
        </CompetitorService>
        <CompetitorService>
            <Image src={virtual} alt="structure" />
            <h3>Advance Technology & Tools</h3>
        </CompetitorService>
        <CompetitorService>
            <Image src={lead} alt="performance" />
            <h3>Sales/Leads Gains</h3>
        </CompetitorService>
      </CompetitorServicesCards>
    </CompetitorServicesContainer>
  )
}

export default CompetitorServices
