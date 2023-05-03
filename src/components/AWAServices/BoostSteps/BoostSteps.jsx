import React from 'react'
import Image from "next/image";
import { BoostImage, BoostStep, BoostHeading, BoostStepsContainer, BoostStepsContent } from './BoostStepsStyles'
import StepOne from "../../../assets/images/Services/AWAServices/StepOne.png";
import StepTwo from "../../../assets/images/Services/AWAServices/StepTwo.png";
import StepThree from "../../../assets/images/Services/AWAServices/StepThree.png";
import Arrow from "../../../assets/images/Services/AWAServices/Arrow.png";

const BoostSteps = () => {
  return (
    <BoostStepsContainer>
      <h2>3 Simple StepsTo Boost Your Website</h2>
      <BoostStepsContent>
        <BoostStep>
          <BoostImage>
            <Image src={StepOne} alt="Step" />
            <Image src={Arrow} alt="Arrow" />
          </BoostImage>
          <BoostHeading>
          <h3>Do Audit</h3>
          <p>
            Choose your audit <br />
            option and get the <br />
            report
          </p>
          </BoostHeading>
        </BoostStep>
        <BoostStep>
          <BoostImage>
            <Image src={StepTwo} alt="Step" />
            <Image src={Arrow} alt="Arrow" />
          </BoostImage>
          <BoostHeading>
          <h3>Implement</h3>
          <p>
            You or your web <br />
            developer cancan <br />
            utilize all <br />
            recommendations
          </p>
          </BoostHeading>
        </BoostStep>
        <BoostStep>
          <BoostImage>
            <Image src={StepThree} alt="Step" />
          </BoostImage>
          <BoostHeading>
          <h3>More Clients</h3>
          <p>
            Better performing <br />
            website and high <br />
            Google ranking lead to <br />
            a bigger number <br />
            of requests
          </p>
          </BoostHeading>
        </BoostStep>
      </BoostStepsContent>
    </BoostStepsContainer>
  )
}

export default BoostSteps
