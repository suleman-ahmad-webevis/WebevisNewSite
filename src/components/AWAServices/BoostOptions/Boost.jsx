import React from "react";
import {
  BoostButton,
  BoostCard,
  BoostContainer,
  BoostOptions,
  ResponsiveImage,
} from "./BoostStyles";
import OptionOne from "../../../assets/images/Services/AWAServices/OptionOne.png";
import OptionTwo from "../../../assets/images/Services/AWAServices/OptionTwo.png";
import { Container } from "src/components/Container.styles";
import Image from "next/image";
import { PrimaryButton } from "src/components/Button.styles";
import Modal from "src/components/Modal/Modal";
import ServiceModal from "src/components/ServiceModal/ServiceModal";
import { useState } from "react";

const Boost = ({ type }) => {
  const [modal, setModal] = useState(false);
  return (
    <Container>
      <Modal
        open={modal}
        setOpen={setModal}
        bg="#fff"
        radius="25px"
        width="1340px"
        desktopTop="9px"
        desktopRight="10px"
        MobileTop="9px"
        MobileRight="10px"
        svgColor="black"
        child={<ServiceModal type={type} />}
      />
      <BoostContainer>
        <h2>How It Works</h2>
        <p>Two options to boost your website</p>
        <BoostOptions>
          <div className="img-holder">
            <Image src={OptionOne} alt="Boost Option" />
          </div>
          <BoostCard>
            <h3>AI Website Audit*</h3>
            <h5>
              The audit will be run by our software and you will get a detailed
              report in 1-2 minutes. Implementing all recommendations give you
              at least 30% traffic growth.
            </h5>
            <p>
              * we call it AI website audit because it&apos;s learning with each
              Audit.
            </p>
            <PrimaryButton
              width="209"
              height="50"
              minheight="40"
              size="20"
              minsize="16"
              radius="54px"
              onClick={() => setModal(true)}
            >
              Start Now
            </PrimaryButton>
          </BoostCard>
        </BoostOptions>
        <BoostOptions direction>
          <BoostCard>
            <h3>Manual Website Audit</h3>
            <h5>
              The audit will be done by our SEO experts and Web developers with
              15 years of experience in the web development field. Implementing
              all recommendations give you at least 70% traffic growth.
            </h5>
            <PrimaryButton
              width="209"
              height="50"
              minheight="40"
              size="20"
              minsize="16"
              radius="54px"
              onClick={() => setModal(true)}
            >
              Start Now
            </PrimaryButton>
          </BoostCard>
          <div className="img-holder">
            <Image src={OptionTwo} alt="Boost Option" />
          </div>
        </BoostOptions>
      </BoostContainer>
    </Container>
  );
};

export default Boost;
