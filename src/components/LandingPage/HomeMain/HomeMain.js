import React from "react";
import { Main } from "./HomeMain.styles";
import { Container } from "src/components/Container.styles";
import Image from "next/image";
import Poster from "../../../assets/images/Homemain/Main-poster.png";
import Banner from "../../../assets/images/Homemain/Main-poster-1.png";
import Baner from "../../../assets/images/Homemain/Main-poster-2.png";
import { Flex } from "src/components/Flex.styles";

const HomeMain = () => {
  return (
    <Main>
      <Container className="container">
        <Flex sm>
          <div>
            <h1>
              Grow your Business Today with <br /> Brand Strategy.{" "}
            </h1>
            <p>
              Build your Search Engine Optimization Foundation The Trusted
              Experts. We Offer The Right Plans.
            </p>
            <div className="btn">
              <button>GET STARTED</button>
            </div>
          </div>
          <Image className="Poster" src={Poster} alt="Poster" />
          <div className="Banner" >
            <Image src={Banner} alt="Poster" />
          </div>
          <div className="Baner">
          <Image className="Baner" src={Baner} alt="Poster" />
          </div>
        </Flex>
      </Container>
    </Main>
  );
};

export default HomeMain;
