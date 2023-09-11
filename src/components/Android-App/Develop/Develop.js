import React from "react";
import { DevelopContent, DevelopHolder } from "./Develop.styles";
import { Container } from "src/components/Container.styles";
import { PrimaryButton } from "src/components/Button.styles";
import DevelopImg from "../../../../public/assets/images/Android-App/Develop-img.png";
import Image from "next/image";

const Develop = () => {
  return (
    <DevelopHolder>
      <Container>
        <DevelopContent>
          <div className="Content">
            <h2>
              Want to Develop an Android App with the Latest Technologies?{" "}
            </h2>
            <p>
              Our team of Android mobile app developers is well-versed in using
              AI, IoT, AR/VR technologies to build custom Android apps according
              to your business requirements.
            </p>
            <PrimaryButton
              width="422"
              minWidth="350"
              height="60"
              minheight="40"
              size="24"
              minsize="18"
            >
              Get Your Free Android App Quote
            </PrimaryButton>
          </div>
          <div className="img-holder ">
            <Image src={DevelopImg} alt="DevelopImg" />
          </div>
        </DevelopContent>
      </Container>
    </DevelopHolder>
  );
};

export default Develop;
