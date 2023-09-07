import React from "react";
import { CraftContent, CraftHolder } from "./Craft.styles";
import { Container } from "src/components/Container.styles";
import Craft1 from "../../../../public/assets/images/UI-UX/Craft-1.png";
import Craft2 from "../../../../public/assets/images/UI-UX/Craft-2.png";
import Craft3 from "../../../../public/assets/images/UI-UX/Craft-3.png";
import Craft4 from "../../../../public/assets/images/UI-UX/Craft-4.png";
import Craft5 from "../../../../public/assets/images/UI-UX/Craft-5.png";
import Image from "next/image";
import { SecondaryButton } from "src/components/Button.styles";

const Craft = () => {
  return (
    <CraftHolder>
      <Container>
        <CraftContent>
          <div>
            <h2>The tools we Utilize to Craft Designs.</h2>
            <p>
              We offer professional graphic design services for all your
              creative needs.
            </p>
          </div>
          <div className="Col-holder">
            <div className="Col">
              <div className="img-holder">
                <Image src={Craft1} alt="Craft1" />
              </div>
              <p>Sketch</p>
            </div>
            <div className="Col">
              <div className="img-holder">
                <Image src={Craft2} alt="Craft2" />
              </div>
              <p>Adobe Phot..</p>
            </div>
            <div className="Col">
              <div className="img-holder">
                <Image src={Craft3} alt="Craft3" />
              </div>
              <p>Adobe Illus..</p>
            </div>
            <div className="Col">
              <div className="img-holder">
                <Image src={Craft4} alt="Craft4" />
              </div>
              <p>Adobe XD</p>
            </div>
            <div className="Col">
              <div className="img-holder">
                <Image src={Craft5} alt="Craft5" />
              </div>
              <p>Figma</p>
            </div>
          </div>
          <div>
            <h2>Let’s Talk about your Project</h2>
            <SecondaryButton
              bg="#fff"
              width="212"
              minWidth="150"
              height="60"
              minheight="40"
              size="24"
              ra
              minsize="18"
              hover="#424954"
            >
              <label>Get In Touch</label>
            </SecondaryButton>
          </div>
        </CraftContent>
      </Container>
    </CraftHolder>
  );
};

export default Craft;
