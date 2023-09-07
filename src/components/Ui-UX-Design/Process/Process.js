import React from "react";
import { ProcessContent, ProcessHolder } from "./Process.styles";
import { Container } from "src/components/Container.styles";
import ColImg1 from "../../../../public/assets/images/UI-UX/Process-img1.png";
import Image from "next/image";
const Process = () => {
  return (
    <ProcessHolder>
      <Container>
        <ProcessContent>
          <h2>Our UX/UI Design Process</h2>
          <p>
            Software projects are hard to predict. Usually that means that the
            bills keep mounting and the goal post keeps moving. We don&apos;t
            bill hours. We don&apos;t believe that it makes sense. We agree on
            an outcome and make it happen. From start to finish. If it takes
            longer than expected? Don&apos;t worry, the price will stay the same
          </p>
          <div className="Col-holder">
            <div className="Col">
              <div className="img-holder">
                <Image src={ColImg1} alt="ColImg1" />
              </div>
              <h3>Inquire And Secure Your Spot</h3>
            </div>
          </div>
        </ProcessContent>
      </Container>
    </ProcessHolder>
  );
};

export default Process;
