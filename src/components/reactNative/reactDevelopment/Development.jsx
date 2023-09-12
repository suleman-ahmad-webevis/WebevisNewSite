import React from "react";
import { DevelopSec } from "./Development.style";
import Image from "next/image";
import { Container } from "src/components/Container.styles";
import conversation from "../../../../public/assets/images/uiPage/conversation.png";
import button from "../../../../public/assets/images/uiPage/button.png";
import { DevelopData } from "./DevelopmentData";
const Development = () => {
  return (
    <Container>
      <DevelopSec>
        <div className="main_con">
          <div className="con_image">
            <Image src={conversation} alt="conversation" />
          </div>
          <div className="con">
            <h2>
              Why Webevis Is The Right <br /> React Native Development <br />{" "}
              For You?
            </h2>

            <div className="parent">
              {DevelopData.map((el, ind) => (
                <div className="first_con" key={ind}>
                  <div className="image">
                    <Image src={button} alt="button" />
                  </div>
                  <div className="text">
                    <h3>{el.title}</h3>
                    <div
                      dangerouslySetInnerHTML={{ __html: el.descreption }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DevelopSec>
    </Container>
  );
};

export default Development;
