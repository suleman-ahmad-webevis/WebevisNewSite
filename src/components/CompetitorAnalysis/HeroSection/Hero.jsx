import React from 'react'
import Image from "next/image";
import { HeroContainer, Button, HeroContent, SearchCompetitor, Input } from './HeroStyles'
import Traffic from "../../../assets//images/Services/AICompetitorAnalysis/Traffic.png";

const Hero = () => {
  return (
    <HeroContainer>
        <HeroContent>
            <h2> Get Expert <br /> Competitor Analysis </h2>
            <p>
              “Know your competition” is a business mantra <br /> 
              that has been around as long as competition itself. Our <br /> 
              Competitive Analysis using AI-enabled and custom <br /> 
              analytics platform discovers brand marketing and <br /> 
              performance gaps for better business decisions.
            </p>
            <SearchCompetitor>
                <Input placeholder='Enter Email' />
                <Button>Find A Time To Talk</Button>
            </SearchCompetitor>
      </HeroContent>
      <Image src={Traffic} alt="Traffic" />
    </HeroContainer>
  )
}

export default Hero
