import React from "react";
import {
  Button,
  RankImg,
  RankSec,
  RankWrapper,
  ReadyText,
} from "./Rank.styles";
import MacBook from "../../../../public/assets/images/SocialMedia/Macbook.png";
import Image from "next/image";
import { Container } from "src/components/Container.styles";
import Modal from "src/components/Modal/Modal";
import ServiceModal from "src/components/ServiceModal/ServiceModal";
import { useState } from "react";

const Rank = ({ type }) => {
  const [modal, setModal] = useState(false);
  return (
    <Container resPadding="0">
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
      <RankWrapper>
        <RankSec>
          <ReadyText>
            <h1>Need Help with Your Next Social Media Project?</h1>

            <Button href="/" onClick={() => setModal(true)}>
              <h2>Request a free audit</h2>
            </Button>
            <p>
              Get a free, no-obligation social media marketing performance
              evaluation.
            </p>
          </ReadyText>
          <RankImg>
            <Image src={MacBook} alt="MacBook" />
          </RankImg>
        </RankSec>
      </RankWrapper>
    </Container>
  );
};

export default Rank;
