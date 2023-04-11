import Image from "next/image";
import React, { useEffect } from "react";
import { Button } from "../Button.style";
import Meetingmain from "../../../assets/images/Services/meetingmain.png";

import {
  MeetingImage,
  MeetingImg,
  MeetingSec,
  MeetingTxt,
  MeetinWraaper,
  Paragraph,
} from "./Meeting.styles";
import "aos/dist/aos.css";
import Aos from "aos";

const Meeting = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <MeetinWraaper data-aos="fade-up">
      <MeetingSec>
        <MeetingTxt>
          <Paragraph FSRS="20px" FSRT="25px">
            Have Project In Mind?
          </Paragraph>
          <Paragraph mt="0" FSRS="20px" FSRT="25px">
            Let's Chat About It
          </Paragraph>
          <Paragraph
            FW="500"
            FS="25px"
            mt="1rem"
            LH="35px"
            FSRF="25px"
            FSRS="15px"
            FSRT="16px"
            LHRS="25px"
          >
            Speak to an expert to find out how Digital Consumer Intelligence
            will change the way you work.
          </Paragraph>
          <Button mt="2rem" href="">
            Book a Meeting
          </Button>
        </MeetingTxt>
        <MeetingImg>
          <Image src={Meetingmain} alt="" />
        </MeetingImg>
      </MeetingSec>
      <MeetingImage>
        <Image src={Meetingmain} alt="" />
      </MeetingImage>
    </MeetinWraaper>
  );
};

export default Meeting;
