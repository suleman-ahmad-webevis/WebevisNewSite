import { Flex } from "src/components/Flex.styles";
import React, { useState } from "react";
import { Col, Content } from "./Column.styles";
import Fade from "react-reveal/Fade";

const Column = ({ number, title, content, view, isHovered, ...props }) => {
  return (
    <Col {...props} className={isHovered && "hovered"}>
      <Flex content="none" Gap="10px" sm>
        <h1>{number}</h1>
        <h2>{title}</h2>
      </Flex>
      <div className="Content">
        <Fade right>
          <p>{content}</p>
          <h3>{view}</h3>
        </Fade>
      </div>
    </Col>
  );
};

export default Column;
