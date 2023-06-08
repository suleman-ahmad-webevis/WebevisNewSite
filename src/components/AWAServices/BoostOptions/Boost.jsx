import React from 'react'
import Image from "next/image";
import {
  BoostButton,
  BoostCard,
  BoostContainer,
  BoostOptions,
  ResponsiveImage,
} from "./BoostStyles";
import OptionOne from "../../../assets/images/Services/AWAServices/OptionOne.png";
import OptionTwo from "../../../assets/images/Services/AWAServices/OptionTwo.png";

const Boost = () => {
  return (
    <BoostContainer>
      <h2>How It Works</h2>
      <p>Two options to boost your website</p>
      <BoostOptions>
        <ResponsiveImage
          src={OptionOne}
          alt="Boost Option"
          max="579"
          min="350"
          maxh="401"
          minh="242.4"
        />
        <BoostCard>
          <h3>AI Website Audit*</h3>
          <h5>
            The audit will be run by our software and you will get a detailed
            report in 1-2 minutes. Implementing all recommendations give you at
            least 30% traffic growth.
          </h5>
          <p>
<<<<<<< HEAD
            * we call it AI website audit because it's learning with each Audit.
=======
            * we call it AI website audit because it&apos;s learning with each
            Audit.
>>>>>>> a03ceb0f07e1c0d0952dd8ae02d85b415f36951c
          </p>
          <BoostButton>Start Now</BoostButton>
        </BoostCard>
      </BoostOptions>
      <BoostOptions direction>
        <BoostCard>
          <h3>Manual Website Audit</h3>
          <h5>
            The audit will be done by our SEO experts and Web developers with 15
            years of experience in the web development field. Implementing all
            recommendations give you at least 70% traffic growth.
          </h5>
          <BoostButton>Start Now</BoostButton>
        </BoostCard>
        <ResponsiveImage
          src={OptionTwo}
          alt="Boost Option"
          max="579"
          min="351"
          maxh="401"
          minh="243.09"
        />
      </BoostOptions>
    </BoostContainer>
  );
};

export default Boost
