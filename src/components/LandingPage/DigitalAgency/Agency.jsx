import React from "react";
import AgencyDesk from "./AgencyDesk";
import AgencyMobile from "./AgencyMobile";
import styled from "styled-components";

export const DeskWrapper = styled.section`
  @media screen and (max-width: 971px) {
    display: none;
  }
`;
export const MobileWrapper = styled.section`
  @media screen and (min-width: 972px) {
    display: none;
  }
`;
const Agency = () => {
  return (
    <div>
      <DeskWrapper>
        <AgencyDesk />
      </DeskWrapper>
      <MobileWrapper>
        <AgencyMobile />
      </MobileWrapper>
    </div>
  );
};

export default Agency;
