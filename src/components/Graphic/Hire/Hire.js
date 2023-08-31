import React from "react";
import { Content, HireHolder } from "./Hire.styles";
import { Container } from "src/components/Container.styles";
import { SecondaryButton } from "src/components/Button.styles";
import HireImg from "../../../assets/images/Graphic/Hire-img.png";
import Image from "next/image";
import Link from "next/link";

const Hire = () => {
  return (
    <HireHolder>
      <Container>
        <Content>
          <div className="Content">
            <h3>LET&apos;S WORK TOGETHER</h3>
            <h2>20x faster than hiring internally</h2>
            <h3>Reliable. Scalable. Affordable.</h3>
            <Link href="/hire-graphic-designer">
              <SecondaryButton
                bg="#fff"
                padding="0 20"
                hover="#2B2C2F"
                size="24"
                minsize="16"
                weight="700"
                height="50"
                minheight="40"
                radius="4px"
              >
                <label>Make Your Brand Shine</label>
              </SecondaryButton>
            </Link>
          </div>
          <div className="img-holder">
            <Image src={HireImg} alt="HireImg" />
          </div>
        </Content>
      </Container>
    </HireHolder>
  );
};

export default Hire;
