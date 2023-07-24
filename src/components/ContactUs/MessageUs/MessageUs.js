import React from "react";
import { Container } from "src/components/Container.styles";
import { Flex } from "src/components/Flex.styles";
// import { Message,  MessageContainer } "./MessageUs.styles";

const MessageUs = () => {
  return (
    <Message>
      <Container>
        <Flex>
          <MessageContainer></MessageContainer>
        </Flex>
      </Container>
    </Message>
  );
};

export default MessageUs;
