import React from 'react'
import { HeroContainer, HeroContainerMobile, Button } from './Hero.style'

const Hero = () => {
  return (
    <>
    <HeroContainer>
      <h2>
        Content Marketing <br />
        Services That <br />
        Change Your <br />
        Content Game
      </h2>
      <p>
        Build trust and credibility through helpful <br />
        content that's centered around your audience <br />
        (not your brand).
      </p>
      <Button>
        <label>Find A Time To Talk</label>
      </Button>
    </HeroContainer>
    <HeroContainerMobile>
      <h2>
        Content Marketing <br />
        Services That Change <br /> 
        Your Content Game
      </h2>
      <p>
        Build trust and credibility through helpful <br />
        content that's centered around your <br />
        audience(not your brand).
      </p>
      <Button>
        <label>Find A Time To Talk</label>
      </Button>
    </HeroContainerMobile>
    </>
  )
}

export default Hero
