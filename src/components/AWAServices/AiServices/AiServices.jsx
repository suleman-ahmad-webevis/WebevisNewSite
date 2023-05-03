import React from 'react'
import Image from "next/image";
import { AiContainer, AiServicesCards, AiService } from './AiStyles'
import seo from "../../../assets/images/Services/AWAServices/seo.png";
import stats from "../../../assets/images/Services/AWAServices/stats.png";
import problem from "../../../assets/images/Services/AWAServices/problem.png";
import content from "../../../assets/images/Services/AWAServices/content.png";
import structure from "../../../assets/images/Services/AWAServices/structure.png";
import performance from "../../../assets/images/Services/AWAServices/performance.png";

const AiServices = () => {
  return (
    <AiContainer>
      <h2>Our AI WEBsite AUDIT Services</h2>

      <AiServicesCards>
        <AiService>
            <Image src={seo} alt="seo" />
            <h3>Technical SEO</h3>
        </AiService>
        <AiService>
            <Image src={stats} alt="stats" />
            <h3>Ranking and search engine <br /> traffic statistics</h3>
        </AiService>
        <AiService>
            <Image src={problem} alt="problems" />
            <h3>UX/UI problems</h3>
        </AiService>
        <AiService>
            <Image src={content} alt="content" />
            <h3>On-page content <br /> performance</h3>
        </AiService>
        <AiService>
            <Image src={structure} alt="structure" />
            <h3>Structure and <br /> Modules</h3>
        </AiService>
        <AiService>
            <Image src={performance} alt="performance" />
            <h3>Performance Audit</h3>
        </AiService>
      </AiServicesCards>
    </AiContainer>
  )
}

export default AiServices
