import React from "react";
import { MindSec } from "./Mind.style";
import { Container } from "src/components/Container.styles";
import mind from "../../../../public/assets/images/ReactNative/mind.png";
import { SecondaryButton } from "src/components/Button.styles";
import Image from "next/image";

const Mind = () => {
  return (
    <Container>
      <MindSec>
        <div className="mind_text">
          <h3>Have a project in mind?</h3>
          <p>
            Schedule a call or online meeting to speak directly with our React
            Native experts and see how we transform your idea into a successful
            app.
          </p>
          <SecondaryButton
            width="300"
            minWidth="197"
            minheight="40"
            minsize="16"
            height="50"
            radius="12px"
            bg="#fff"
          >
            <label>Talk To Our Experts</label>
          </SecondaryButton>
        </div>
        <figure>
          <Image src={mind} alt="mind" />
        </figure>
    
      </MindSec>
    </Container>
  );
};

export default Mind;
