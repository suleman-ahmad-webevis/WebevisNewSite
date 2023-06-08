import React from 'react'
import Image from "next/image";
import {HeroContainer, AWAButton, HeroSectionContainer, CrawlLogContainer} from './HeroSectionStyles'
import CrawlLog from "../../../assets/images/Services/AWAServices/CrawlLog.png";

const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <HeroContainer>
        <h2>AI Website Audit</h2>
        <p>
          Your online presence, whether in the B2B or B2C space, is the face of
          your company, and understanding the nuances of the functional areas
<<<<<<< HEAD
          and components of a website's performance is critical.
=======
          and components of a website&apos;s performance is critical.
>>>>>>> a03ceb0f07e1c0d0952dd8ae02d85b415f36951c
        </p>
        <AWAButton>
          <label>Get Your Free Ai Audit</label>
        </AWAButton>
      </HeroContainer>
      <CrawlLogContainer>
        <Image src={CrawlLog} alt="Crawl Log" />
      </CrawlLogContainer>
    </HeroSectionContainer>
  );
}

export default HeroSection
