import React, { useState } from "react";
import {
  Button,
  Expertise,
  RankImg,
  RankSec,
  RankWrapper,
  ReadyText,
} from "./Rank.styles";
import MacBook from "../../../../public/assets/images/seoservices/Macbook.png";
import Image from "next/image";
import { SecondaryButton } from "src/components/Button.styles";
import { ContainerWrapper } from "src/components/Container.styles";
import Modal from "src/components/Modal/Modal";
import ServiceModal from "src/components/ServiceModal/ServiceModal";

const Rank = ({ type }) => {
  const [modal, setModal] = useState(false);
  return (
    <ContainerWrapper>
      <RankWrapper>
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
        <Expertise className="container">
          <RankSec>
            <ReadyText>
              <h1>Expertise You Can Trust</h1>
              <p>
                With decades of experience in the industry, our team of
                professionals brings unmatched expertise and knowledge to every
                project.
              </p>
              <SecondaryButton
                width="301"
                height="50"
                minheight="40"
                minWidth="273.33"
                bg="white"
                size="24"
                minsize="18"
                radius="27px"
                hover="black"
                onClick={() => setModal(true)}
              >
                <label> Get Your Free Strategy</label>
              </SecondaryButton>
            </ReadyText>
            <RankImg className="fix">
              <Image src={MacBook} alt="MacBook" />
            </RankImg>
          </RankSec>
          <RankImg className="absolute">
            <Image src={MacBook} alt="MacBook" />
          </RankImg>
        </Expertise>
      </RankWrapper>
    </ContainerWrapper>
  );
};

export default Rank;
