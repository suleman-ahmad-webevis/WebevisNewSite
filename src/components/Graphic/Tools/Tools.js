import React from "react";
import { Tool, ToolHolder } from "./Tools.styles";
import Sliders from "src/components/socialMediaSlider/Slider";
import { toolsData } from "./ToolsData";
import { ContainerWrapper } from "src/components/Container.styles";

const Tools = () => {
  return (
    <ToolHolder>
      <ContainerWrapper>
        <Tool>
          <h2>Tools We Uses for Create Designs</h2>
          <p>
            We offer professional graphic design services for all your creative
            needs.
          </p>
        </Tool>
      </ContainerWrapper>
      <Sliders arr={toolsData} />
    </ToolHolder>
  );
};

export default Tools;
