import React from "react";
import { ConSec } from "./Conversation.style";
import { Container } from "src/components/Container.styles";
import conversation from "../../../../public/assets/images/uiPage/conversation.png";
import button from "../../../../public/assets/images/uiPage/button.png";
import Image from "next/image";
import { ConversationData } from "./ConversationData";

const Conversation = () => {
  return (
    <Container>
      <ConSec>
        <div className="main_con">
          <div className="con">
            <h2>Why Choose Us for Your PSD to HTML5 Conversion Project</h2>
            {ConversationData.map((el, ind) => (
              <div className="first_con" key={ind}>
                <div className="image">
                  <Image src={button} alt="button" />
                </div>
                <div className="text">
                  <h3>{el.title}</h3>
                  <h4>{el.descreption}</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="con_image">
            <Image src={conversation} alt="conversation" />
          </div>
        </div>
      </ConSec>
    </Container>
  );
};

export default Conversation;
