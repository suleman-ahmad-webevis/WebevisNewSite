import Image from "next/image";
import React from "react";
import {
  ChooseSection,
  FloatLine,
  ItemImg,
  Paragraph,
  StepImage,
  Stepitem,
  StepItems,
  StepWrapper,
} from "./ChooseUs.styles";
import chosse from "../../../assets/images/Services/chooseImage.png";
import line from "../../../assets/images/Services/line.png";
import { data } from "./ChooseusData";

const ChooseUs = () => {
  return (
    <ChooseSection>
      <Paragraph mt="5rem">Why You Should Choose Us</Paragraph>
      <Paragraph FW="700" FZ="45px" LH="56px">
        Comprehensive Intake Process
      </Paragraph>
      <StepWrapper>
        <StepItems>
          {data.map((elem, ind) => (
            <Stepitem key={ind}>
              <Paragraph
                FW="700"
                FZ="28px"
                LH="150%"
                FSR="20px"
                LHR="30px"
                FSRS="16px"
              >
                {elem.head}
              </Paragraph>
              <ItemImg>
                <Image src={elem.image} alt="steps" />
              </ItemImg>
              <Paragraph FW="700" FZ="28px" LH="150%" FSRF="18px" FSRS="16px">
                {elem.title}
              </Paragraph>
              <Paragraph
                FW="500"
                FZ="20px"
                LH="150%"
                FSR="18px"
                LHR="30px"
                FSRF="16px"
                FSRS="12px"
                LHRS="22px"
              >
                {elem.body}
              </Paragraph>
            </Stepitem>
          ))}
          <FloatLine>
            <Image src={line} alt="line" />
          </FloatLine>
          <FloatLine top="63%">
            <Image src={line} alt="line" />
          </FloatLine>
        </StepItems>
        <StepImage>
          <Image src={chosse} alt="cover" />
        </StepImage>
      </StepWrapper>
    </ChooseSection>
  );
};

export default ChooseUs;
