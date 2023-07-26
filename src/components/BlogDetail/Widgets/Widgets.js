import React from "react";
import { Recent } from "./Widgets.styles";

const Widgets = ({ heading, Children }) => {
  return (
    <Recent>
      <h3>{heading}</h3>
      {Children}
    </Recent>
  );
};

export default Widgets;
