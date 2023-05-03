import React from 'react'
import Image from "next/image";
import { BoostButton, BoostCard, BoostContainer, BoostOptions } from './BoostStyles'
import OptionOne from "../../../assets/images/Services/AWAServices/OptionOne.png";
import OptionTwo from "../../../assets/images/Services/AWAServices/OptionTwo.png";

const Boost = () => {
  return (
    <BoostContainer>
      <h2>How It Works</h2>
      <p>Two options to boost your website</p>
      <BoostOptions>
        <Image src={OptionOne} alt="Boost Option" />
        <BoostCard>
            <h3>AI Website Audit*</h3>
            <h5>
            The audit will be run by our software <br />
            and you will get a detailed report in 1-2 minutes. <br />
            Implementing all recommendations give <br />
            you at least 30% traffic growth.
            </h5>
            <p>* we call it AI website audit because it's learning with each Audit.</p>
            <BoostButton>Start Now</BoostButton>
        </BoostCard>
        <BoostCard>
            <h3>Manual Website Audit</h3>
            <h5>
            The audit will be done by our SEO experts <br />
            and Web developers with 15 years of <br />
            experience in the web development field. <br />
            Implementing all recommendations give <br />
            you at least 70% traffic growth.
            </h5>
            <BoostButton>Start Now</BoostButton>
        </BoostCard>
        <Image src={OptionTwo} alt="Boost Option" />
      </BoostOptions>
    </BoostContainer>
  )
}

export default Boost
