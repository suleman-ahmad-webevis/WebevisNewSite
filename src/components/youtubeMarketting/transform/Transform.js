import React from "react";
import {
  TransformFlex,
  TransformImage,
  TransformPos,
  TransformSec,
  TransformText,
} from "./Transform.style";
import Image from "next/image";
import img1 from "../../../../public/assets/images/youtubeMarketting/women.png";
import { Container } from "src/components/Container.styles";
import { SecondaryButton } from "src/components/Button.styles";
import Modal from "src/components/Modal/Modal";
import ServiceModal from "src/components/ServiceModal/ServiceModal";
import { useState } from "react";

const Transform = ({ type }) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <TransformSec>
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
        <Container className="container">
          <TransformFlex>
            <TransformText>
              <h1>Transform your channel with our services</h1>
              <SecondaryButton
                width="321"
                minWidth=""
                height="50"
                minheight="40"
                bg="#fff"
                radius="8px"
                hover="black"
                size="20"
                minsize="18"
                onClick={() => setModal(true)}
              >
                <label>Boost my presence</label>
              </SecondaryButton>
            </TransformText>
            <TransformImage>
              <Image src={img1} alt="" />
            </TransformImage>
            <TransformPos>
              <Image src={img1} alt="" />
            </TransformPos>
          </TransformFlex>
        </Container>
      </TransformSec>
    </>
  );
};

export default Transform;
