import React from "react";
import { Container } from "src/components/Container.styles";
import {
  ConfidenceHolder,
  Confident,
  Discription,
  ImageHolder,
} from "./Confidence.styles";
import ConfidenceImg from "../../../assets/images/HireDeveloper/Confidence-Img.png";
import Image from "next/image";

const Confidence = () => {
  return (
    <ConfidenceHolder>
      <Container>
        <Confident>
          <ImageHolder>
            <Image src={ConfidenceImg} alt="Confidence" />
          </ImageHolder>
          <Discription>
            <h2>Hire With Confidence</h2>
            <p>
              We understand that recruitment of high-caliber developers in
              Lactam is a challenge for US companies, so we cover everything
              from the sourcing process to background checks
            </p>
            <div className="butn">
              <span className="White-btn">No Irrelevant Candidates</span>
              <span className="Green-btn">Deeply-Vetted Developers</span>
            </div>
            <div className="butn">
              <span className="White-btn">No Gig-oriented Freelancers</span>
              <span className="Green-btn">Engaged and Motivated Teammates</span>
            </div>
            <div className="butn">
              <span className="White-btn">No Scammers or Hoppers</span>
              <span className="Green-btn">Deep Background Checks</span>
            </div>
            <div className="butn">
              <span className="White-btn">No Compromise on Culture</span>
              <span className="Green-btn">
                Robust Communication & Soft Skills
              </span>
            </div>
          </Discription>
        </Confident>
      </Container>
    </ConfidenceHolder>
  );
};

export default Confidence;
