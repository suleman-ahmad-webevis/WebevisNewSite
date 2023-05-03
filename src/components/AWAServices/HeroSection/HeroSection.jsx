import React from 'react'
import Image from "next/image";
import {HeroContainer, AWAButton, HeroSectionContainer, CrawlLogContainer} from './HeroSectionStyles'
import CrawlLog from "../../../assets/images/Services/AWAServices/CrawlLog.png";

const HeroSection = () => {
  return (
    <HeroSectionContainer>
    <HeroContainer>
        <h2>
        AI Website Audit
        </h2>
        <p>
        Your online presence, whether in the B2B or B2C space, is the <br />
        face of your company, and understanding the nuances of the <br />
        functional areas and components of a website's performance <br />
        is critical.
        </p>
        <AWAButton>
            <label>Get Your Free Ai Audit</label>
        </AWAButton>
    </HeroContainer>
        <CrawlLogContainer><Image src={CrawlLog} alt="Crawl Log" /></CrawlLogContainer>
    </HeroSectionContainer>
  )
}

export default HeroSection
